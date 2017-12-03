require 'resque'
require 'resque/failure/multiple'
require 'resque/failure/redis'

Resque::Failure::Multiple.classes = [Resque::Failure::Redis]
Resque::Failure.backend = Resque::Failure::Multiple

Resque.redis = $redis

Resque.before_fork do
    defined?(ActiveRecord::Base) && ActiveRecord::Base.connection.disconnect!
end

Resque.after_fork do
    defined?(ActiveRecord::Base) && ActiveRecord::Base.establish_connection
end
