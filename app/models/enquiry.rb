class Enquiry < ApplicationRecord
  validates :name, :message, presence: true
end
