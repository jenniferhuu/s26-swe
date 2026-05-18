function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <p className="section-intro">
        Feel free to leave a message below. This form is for UI practice only
        and does not submit to a backend.
      </p>

      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="your.email@example.com" />
        </label>

        <label>
          Message
          <textarea placeholder="Write your message here"></textarea>
        </label>

        <button type="button" className="button primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;