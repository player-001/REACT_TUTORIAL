import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', feedback: '', rating: ''});
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
        rating: ${formData.rating}`
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmMessage}`)
        if (isConfirmed){
            console.log('Submitting Feedback:', formData)
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            })
            alert('Thank you for your valuable feedback')

        }
    }
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit = {handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
            type = "text"
            name = "name"
            placeholder = "Your Name"
            onChange = {handleChange}
        />
        <input
            type = "text"
            name = "email"
            placeholder = "Your Email"
            onChange = {handleChange}
        />
        <textarea
            name = "feedback"
            placeholder = "Your Feedback"
            onChange = {handleChange}
        ></textarea>
        <div>Rate Us:
            <input type = "radio" name = "rating" value = "1" onChange = {handleChange}/>
            <input type = "radio" name = "rating" value = "2" onChange = {handleChange}/>
            <input type = "radio" name = "rating" value = "3" onChange = {handleChange}/>
            <input type = "radio" name = "rating" value = "4" onChange = {handleChange}/>
            <input type = "radio" name = "rating" value = "5" onChange = {handleChange}/>
            </div>
        <button type = "submit">Submit Feedback</button>        
      </form>
    </>
  );
};

export default FeedbackForm;
