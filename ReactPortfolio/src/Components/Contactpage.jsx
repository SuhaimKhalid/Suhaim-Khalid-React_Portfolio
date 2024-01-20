import React, { useState } from 'react';



function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle the form submission, like sending data to a server
        console.log('Form Data', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='container col-lg-6 col-12 contact_form' >
    
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-label' htmlFor="name">Name:</label>
                    <input
                        className='form-control'
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='form-label' htmlFor="email">Email:</label>
                    <input
                        className='form-control'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='form-label' htmlFor="message">Message:</label>
                    <textarea
                       className='form-control'
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className=' submit_btn'>Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;