class FrontendController < ApplicationController
    before_action :authenticate_user! # used by devise gem to ensure a user is logge in.
end
