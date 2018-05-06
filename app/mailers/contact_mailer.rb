class ContactMailer < ApplicationMailer
  default from: 'dapatApp@dapat.com'

  def contact_email
    @information = params[:information]
    mail(to: "contactus@dapat.com", subject: "ContactRequest")
  end
end
