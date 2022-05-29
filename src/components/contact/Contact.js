import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'


const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/rajneeshk7788"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/34LKFhd/github.png" alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajneesh-kushwaha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/PrZd3Cy/linkedin.png" alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/gSpf8gN/Gmail.webp" alt="Gmail Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
