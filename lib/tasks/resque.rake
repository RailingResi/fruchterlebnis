require 'resque/tasks'
# require 'resque/scheduler/tasks'

task 'resque:setup' => :environment do
    ENV['QUEUE'] ||= '*'
    # for redistogo on heroku http://stackoverflow.com/questions/2611747/rails-resque-workers-fail-with-pgerror-server-closed-the-connection-unexpectedl
    Resque.before_fork = proc { ActiveRecord::Base.establish_connection }
end

# namespace :resque do
#     desc 'Remove alreay retried jobs'
#     task remove_retried_jobs: :environment do
#         redis = Resque.redis
#         (0...Resque::Failure.count).each do |i|
#             string = redis.lindex(:failed, i)
#             break if string.nil?

#             job = Resque.decode(string)
#             remove = !job['retried_at'].nil?
#             next unless remove

#             redis.lrem(:failed, 1, string)
#             redo
#         end
#     end

#     desc 'Clear pending jobs'
#     task clear: :environment do
#         queues = Resque.queues
#         queues.each do |queue_name|
#             puts "Clearing #{queue_name}..."
#             Resque.redis.del "queue:#{queue_name}"
#         end

#         puts 'Clearing delayed...' # in case of scheduler - doesn't break if no scheduler module is installed
#         Resque.redis.keys('delayed:*').each do |key|
#             Resque.redis.del key.to_s
#         end
#         Resque.redis.del 'delayed_queue_schedule'

#         puts 'Clearing stats...'
#         Resque.redis.set 'stat:failed', 0
#         Resque.redis.set 'stat:processed', 0
#     end
# end

