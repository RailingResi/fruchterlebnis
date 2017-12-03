source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# gem 'compass-rails'
gem 'autoprefixer-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
gem 'font-awesome-sass', '~> 4.7.0'
gem 'chartkick'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
# gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'bootstrap-sass', '~> 3.3.7'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development


gem 'bootstrap-datepicker-rails', '~> 1.6.4'
gem 'will_paginate'
gem 'will_paginate-bootstrap'
gem 'client_side_validations'

gem 'redis', '~> 3.0'
gem 'redis-rails'
gem 'redis-namespace'

# Authentication with devise
gem 'devise'
# Autorisation with CanCanCan. aka user roles
# https://github.com/CanCanCommunity/cancancan
gem 'cancancan', '~> 2.0'

gem 'friendly_id', '~> 5.1.0'

gem 'rack-attack'

gem 'resque', require: 'resque/server'

gem 'browser'

# Image uploader
gem 'mini_magick'
gem 'carrierwave'
gem 'fog'
gem 'unf' # Dependency for fog

group :development, :test do
  gem 'rubocop', '~>0.42.0', require: false
  gem 'rubocop-checkstyle_formatter', require: false
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'simplecov'
  gem 'simplecov-rcov'
  gem 'brakeman', require: false
  gem 'launchy' # Debugging capybara
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  # gem 'web-console', '>= 3.3.0'
  gem 'better_errors'     # better errors
  gem 'binding_of_caller' # necessary for interactive console on error-pages
  gem 'guard'
  gem 'guard-minitest'
  gem 'ruby-prof'
  gem 'foreman'
  gem 'rails-erd', require: false
end


group :test do
  gem 'minitest'
  gem 'minitest-reporters'
  gem 'minitest-rails-capybara'
  gem 'resque_unit'
  gem 'database_cleaner'
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

ruby '2.4.2'
