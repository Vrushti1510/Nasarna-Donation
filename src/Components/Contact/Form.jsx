import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const alphabetsOnly = /^[A-Za-z\s]+$/;
    const emailFormat = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Name is required';
    } else if (!alphabetsOnly.test(formData.firstName)) {
      newErrors.firstName = 'Name should contain only alphabets';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!alphabetsOnly.test(formData.lastName)) {
      newErrors.lastName = 'Last name should contain only alphabets';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailFormat.test(formData.email)) {
      newErrors.email = 'Please enter a valid Gmail address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const alphabetsOnly = /^[A-Za-z\s]*$/;
    
    if ((name === 'firstName' || name === 'lastName') && !alphabetsOnly.test(value)) {
      return;
    }
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-30">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Form Section */}
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-center mb-10 text-[#0a2463]">Get In Touch</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <p className="text-xl text-green-600">Your message has been sent successfully!</p>
                <p className="mt-2 text-gray-600">We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full p-3 border-b ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 transition-all`}
                    />
                    {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Lastname"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full p-3 border-b ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 transition-all`}
                    />
                    {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 transition-all`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 border-b ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 transition-all`}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full p-3 border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 transition-all resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
                
                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`py-3 px-8 mr-75 cursor-pointer rounded-full bg-green-500 text-white font-semibold transition-all hover:bg-green-600 hover:shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Map Section */}
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564749296!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '650px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New York Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;