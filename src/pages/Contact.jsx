import React from "react";
import "../style/contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content-1">
        <div className="contact-content-1-container">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-content-2">
        <div className="contact-container-1">
          <div>
            <div>
              <h1 className="h1">Name</h1>
            </div>
            <div className="input">
              <input type="text" />
            </div>
          </div>

          <div className="contact-container-1-content">
            <div>
              <h1 className="h1">Email Address</h1>
            </div>
            <div className="input">
              <input type="text" />
            </div>
          </div>

          <div className="contact-container-1-content">
            <div>
              <h1 className="h1">Subject</h1>
            </div>
            <div className="input">
              <input type="text" />
            </div>
          </div>

          <div className="contact-container-1-content">
            <div>
              <h1 className="h1">Message</h1>
            </div>
            <div className="text-area">
              <textarea></textarea>
            </div>
          </div>

          <div className="button-container">
            <button className="button-content">Send Message</button>
          </div>
        </div>
        <div className="contact-container-2">
          <div>
            <h1 className="get-touch">Get In Touch</h1>
          </div>
          <div>
            <p>
              We’d love to hear from you! Whether you have a question about our
              products, need help with a custom order, or just want to say
              hello, we’re here for you.
            </p>
          </div>
          <div className="contact-container-2-content">
            <div className="contact-container-2-container">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="iconify"
                >
                  <path
                    fill="currentColor"
                    d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="h1-1">Call us</h1>
                </div>
                <div>
                  <h1 className="h1-2">+64123456789010</h1>
                </div>
              </div>
            </div>
            <div className="contact-container-2-container">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="iconify"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="h1-1">Email us</h1>
                </div>
                <div>
                  <h1 className="h1-2">scentimentsmnl@gmail.com</h1>
                </div>
              </div>
            </div>
            <div className="contact-container-2-container">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="iconify"
                >
                  <path
                    fill="currentColor"
                    d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="h1-1">Website</h1>
                </div>
                <div>
                  <h1 className="h1-2">scentimentsmnl.com</h1>
                </div>
              </div>
            </div>
            <div className="contact-container-2-container">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="iconify"
                >
                  <path
                    fill="currentColor"
                    d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="h1-1">Address</h1>
                </div>
                <div>
                  <h1 className="h1-2">General Trias, Philippines</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123705.91548096601!2d120.81559428002662!3d14.322474657042408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962acd4cf92c7d%3A0xc07937d0e7fb9b5d!2sGeneral%20Trias%2C%20Cavite!5e0!3m2!1sfil!2sph!4v1732187507264!5m2!1sfil!2sph"
          className="map"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
