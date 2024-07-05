import React, { useState } from 'react';
import './form.css'  


const Form = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!values.phone) {
            errors.phone = 'Phone number is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <div className='main'>
            <h2 className='simple'><center> Form Validation</center></h2><br/>
            {isSubmitted && <div className="success-message"><center>Form submitted successfully!</center></div>}
            <form onSubmit={handleSubmit}>
                <div className='fixing'>
                    <label>Name</label><br/>
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                </div>
                <div>
                    <label>Email</label><br/>
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div>
                    <label>Password</label><br/>
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                      
                    />
                    {formErrors.password && <span className="error">{formErrors.password}</span>}
                </div>
                <div>
                    <label>Phone</label><br/>
                    <input
                        type="tel"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                      
                    />
                    {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                </div><br/> 
                <center>
                <button type="submit">Submit</button></center>
            </form>
        </div>
    );
};

export default Form;
