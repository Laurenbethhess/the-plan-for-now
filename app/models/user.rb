class User < ApplicationRecord
    has_many :todos, dependent: :destroy

    has_secure_password
end
