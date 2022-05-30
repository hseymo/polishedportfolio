import React, {useState} from 'react';

function Comtact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue)
    } else if (inputType === 'email') {
      setEmail(inputValue)
    }else if (inputType === 'message') {
      setMessage(inputValue)
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you sending a message!')
    setName('');
    setEmail('');
    setMessage('');
    
  }

  return (
    <div className="Contact">
      <form className="Form" onSubmit={handleFormSubmit}>
      <h2>Contact Me</h2>
        <div>
          <label for="name">Name:</label>
          <input 
            name="name"
            type="text"
            value={name}
            onChange={handleFormChange} 
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input 
            name="email"
            type="email"
            value={email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea 
            name="message"
            type="textarea"
            rows="10"
            value={message}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comtact;
