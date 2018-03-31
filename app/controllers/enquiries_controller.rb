class EnquiriesController < ApplicationController
  # POST /enquiries
  def create
    sleep 1 # Simulate slow server
    @enquiry = Enquiry.new(enquiry_params)
    @enquiry.save
    # Set Content-Type here to avoid unnessesary HTML parsing by Rails UJS
    render :_new, layout: false, content_type: 'text/plain'
  end

  private
    def enquiry_params
      params.require(:enquiry).permit(:name, :message)
    end
end
