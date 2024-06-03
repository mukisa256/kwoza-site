import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contactStyle.css';

function ContactForm() {
    return (
        <div className="Form-container">
            
            <div className="container">
                <h3>Call on</h3>
                <p><FontAwesomeIcon icon={faPhone} /> 0750739558/0785225963</p>
                <p>OR Email us On</p>
                <p><FontAwesomeIcon icon={faEnvelopeOpen} />info@Kwozaindustries.com</p>
            </div>

            <form>
                <h1>Send us a message</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
