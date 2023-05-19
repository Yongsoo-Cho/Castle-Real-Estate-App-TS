import React, {useState} from 'react';
import { RegistrationContainer, RegistrationForm, InputContainer, Submit, Error } from './register-components';
import { register } from './register-operations';

const Registration = () => {
    const defaultFields = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    };
    const [formFields, setFormFields] = useState(defaultFields);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const data = await register({...formFields});

        if(data.error){
          setError(true);
        } else {
          window.location.reload();
        };
    };

    return(
        <RegistrationContainer>
          <RegistrationForm onSubmit={handleSubmit}>
  
            <InputContainer 
              type="text"
              placeholder="Email Address..." 
              value={formFields.email}
              name = 'email'
              onChange={handleChange}
              required
            />

            <InputContainer 
              type="text"
              placeholder="First Name..." 
              value={formFields.firstName}
              name = 'firstName'
              onChange={handleChange}
              required
            />

            <InputContainer 
              type="text"
              placeholder="Last Name..." 
              value={formFields.lastName}
              name = 'lastName'
              onChange={handleChange}
              required
            />

            <InputContainer 
              type="password" 
              placeholder="Password..." 
              value={formFields.password} 
              name = 'password'
              onChange={handleChange}
              required
            />

            <Submit> 
              <h1>Register</h1>
            </Submit>

            {error && <Error>Something went wrong. Please try again</Error>}
            
          </RegistrationForm>
        </RegistrationContainer>
    );
}

export default Registration;