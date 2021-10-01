import './Contact.css'
import { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

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
            console.log('Done');
        })
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

                        <label htmlFor="name">
                            Name*
                            <input type="text" name="name" id="name" placeholder="Your name..." required onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </label>

                        <label htmlFor="email">
                            Email*
                            <input type="email" name="email" id="email" placeholder="Your email..." required onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </label>
                        <label htmlFor="msg">
                            <textarea name="msg" id="msg" placeholder="Your message here..." required onChange={(e) => {
                                setMsg(e.target.value)
                            }}></textarea>
                        </label>
                        <button className="send">Say Hi!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;