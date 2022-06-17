import React, {useState} from 'react';
import './index.css';
import API from "../../utils/API.js";

function Comtact() {
  const [message, setMessage] = useState({
    name: '',
    email: '', 
    message: ''
  })

  // const handleInputBlur = (e) => {
  //   const {target} = e;
  //   const inputValue = target.value;
  //   if (!inputValue.trim()) {
  //     alert("This field is required.")
  //   }
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if (!message.name.trim() || !message.email.trim() || !message.message.trim()) {
      alert('Please fill in all fields before sending your message.')
      return
    } else if (!message.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      alert('Invalid email address - please try again!')
      return
    } else {

      API.postMessage(message)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    alert('Thank you sending a message!')
    setMessage({
      name: '',
      email: '', 
      message: ''
    })
    }
  }

  return (
    <div className="Contact">
      <form className="Form"
        onSubmit={handleFormSubmit}>
      <h2>Contact Me</h2>
      {/* <h2>Please email me at:</h2> 
      <h2 className='email'>haleycseymour@comcast.net</h2> */}
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            name="name"
            type="text"
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            // onBlur={handleInputBlur} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            name="email"
            type="email"
            value={message.email}
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
            // onBlur={handleInputBlur} 
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            name="message"
            type="textarea"
            rows="10"
            value={message.message}
            onChange={(e) => setMessage({ ...message, message: e.target.value })}
            // onBlur={handleInputBlur} 
          />
        </div>
        <p className='privacy'>Please note that messages are sent to an API that is not private. If this is not your intention, please email me at haleycseymour@comcast.net or message me on LinkedIn. Thanks and have a great day!</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comtact;
