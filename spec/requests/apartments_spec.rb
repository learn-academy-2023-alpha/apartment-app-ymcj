require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let (:user) {User.create email: 'test@testing.com', password: 'test123', password_confirmation: 'test123'}
  describe "GET /index" do

