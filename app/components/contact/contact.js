import ButtonFill from "../button/btnFill";
import SectionHeading from "../sectionHeading/sectionHeading";
import Styles from "./contact.module.css";
import StylesBtn from "../button/button.module.css"
export default function Contact() {
  return (
    <section id="contact-section" className={`${Styles.contact} defaultSection`}>
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
          <form>
            <div>
              <label>Full name</label>
              <input
                className={Styles.inputField}
                type="text"
                name="name"
                placeholder="Full name"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className={Styles.inputField}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                className={`${Styles.inputField} ${Styles.msg}`}
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                className={`${StylesBtn.btnBorder} ${Styles.btn}`}
                type="submit">Send message </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
