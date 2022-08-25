import ButtonFill from "../button/btnFill";
import SectionHeading from "../sectionHeading/sectionHeading";
import Styles from "./contact.module.css";
import StylesBtn from "../button/button.module.css";
import { useState, useRef } from "react";

export default function Contact() {
  const [contactFormAlert, setContactFormAlert] = useState();

  // declaring refs to capture form field
  const fullName = useRef();
  const email = useRef();
  const contactMsg = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    setContactFormAlert({
      error: "Cannot send message. Please contact via Email",
    });

    // clear the message after 3 sec
    setTimeout(() => {
      setContactFormAlert(null);
      event.target.reset();
    }, 3000);
  };

  return (
    <section
      id="contact-section"
      className={`${Styles.contact} defaultSection`}
    >
      <div className={Styles.container}>
        <SectionHeading sectionTitle="Contact" />
        <div className={Styles.contactTxt}>
          <h2>Questions? Comments? Ideas? or just to say hi...</h2>
          <h2>Let me know how I can help and I’ll get right back to you.</h2>
          <span className={Styles.helloBtn}>
            <ButtonFill
              btnCaption="Say hello"
              href="mailto:shason@shason.com"
            />
          </span>
          <h3>Or you can use the form below to message me instead</h3>
        </div>
        <div className={Styles.contactDetails}>
          <form onSubmit={submitFormHandler}>
            <div>
              <label>Full name</label>
              <input
                className={Styles.inputField}
                type="text"
                name="name"
                placeholder="Full name"
                required
                ref={fullName}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className={Styles.inputField}
                type="email"
                name="email"
                placeholder="Email"
                required
                ref={email}
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                className={`${Styles.inputField} ${Styles.msg}`}
                name="message"
                placeholder="Message"
                required
                ref={contactMsg}
              ></textarea>
            </div>
            <div>
              <button
                className={`${StylesBtn.btnBorder} ${Styles.btn}`}
                type="submit"
              >
                Send message{" "}
              </button>
            </div>
            <div className={Styles.errorSection}>
              {contactFormAlert && contactFormAlert.error ? (
                <div className={`${Styles.errorMessage} ${Styles.message}`}>
                  Error: {contactFormAlert.error}
                </div>
              ) : contactFormAlert && contactFormAlert.success ? (
                <div className={`${Styles.successMessage} ${Styles.message}`}>
                  Success: {contactFormAlert.success}
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
