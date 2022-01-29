import React from 'react';
import './Contact.css'
import { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const [msgSent, setMsgSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/sendMail', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userName: name,
                userEmail: email,
                userMsg: msg
            })
        })
            .then(() => {
                //setting the message sent to true to display the block
                setMsgSent(true)

                //resetting the form
                e.target.reset()
            })
            .catch(err => console.error(err))

        //doing this to hide the success-blk after 4 seconds of sending the message
        setTimeout(() => {
            setMsgSent(false)
        }, 4000)
    }

    return (
        <div className="contact-container">
            <div className="contact-sub-container">
                <div className="heading">
                    <div className="contact-blk"></div>
                    <h2 className="contact-head">Let's talk</h2>
                </div>
                <div className="position-section">
                    <form action="" className="form" onSubmit={handleSubmit}>

                        <div className="details-container">
                            <label htmlFor="name" className="label-input">
                                Name*
                                <input type="text" name="name" id="name" required onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            </label>

                            <label htmlFor="email" className="label-input">
                                Email*
                                <input type="email" name="email" id="email" required onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </label>
                        </div>

                        <label htmlFor="msg" className="label-textarea">
                            Your Message*
                            <textarea name="msg" id="msg" required onChange={(e) => {
                                setMsg(e.target.value)
                            }}></textarea>
                        </label>

                        <button className="send" type="submit">Say Hi!</button>
                    </form>
                </div>

                <div className={`success-blk ${msgSent ? '' : 'display-none'}`}>
                    Your message has been sent!
                </div>

            </div>
        </div>
    );
}

export default Contact;