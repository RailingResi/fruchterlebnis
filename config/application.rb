require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# Load application environment variables and merge with existing variables.
# We load these variables here to be able to use them in initializers files (config/initiliazers/*)
# Learn more about this on: https://quickleft.com/simple-rails-app-configuration-settings
ENV.update(YAML.load_file('config/application.yml')[Rails.env]) rescue {}

module Fruchterlebnis
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Eager load the lib folder. Rails 5 no longer eager 
    config.eager_load_paths << Rails.root.join('lib')
  end
end
