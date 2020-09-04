import React from 'react';

function ContactForm(props) {
    return (
        <form className="form-control-sm" onSubmit={props.sendEmail}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">Phone</label>
        <div className="col-sm-9">
          <input type="number" className="form-control form-control-md ml-3" 
          name="contact_number" required />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">Name</label>
        <div className="col-sm-9">
          <input type="text" className="form-control form-control-md ml-3" 
          name="user_name" required />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">Email</label>
        <div className="col-sm-9">
          <input type="email" className="form-control form-control-md ml-3" 
          name="user_email" required />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">Message</label>
        <div className="col-sm-9">
          <textarea className="form-control form-control-md ml-3" name="message" required />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit"  value="send" className="btn btn-primary mb-5 mt-3 float-right">
            Sign in
          </button>
        </div>
      </div> 
    </form>
    )
}

export default ContactForm;
