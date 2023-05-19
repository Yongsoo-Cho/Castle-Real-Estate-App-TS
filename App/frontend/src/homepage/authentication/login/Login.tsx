import React, {useState} from 'react';
import { LoginContainer, LoginForm, InputContainer, Submit, Error } from './login-componenets';
import { login } from './login-operations';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        const data = await login(user);

        if(data.error){
          setError(data.error);
        } else {
          window.location.reload()
        };

    };
    return(
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit}>
  
            <InputContainer 
              type="text"
              placeholder="Email..." 
              value={email} 
              onChange={e=> setEmail(e.target.value)}
              required
            />

            <InputContainer 
              type="password" 
              placeholder="Password..." 
              value={password} 
              onChange={e=> setPassword(e.target.value)}
              required
            />

            <Submit> 
              <h1>Login</h1>
            </Submit>
            {error && <Error>Couldn't find your account.</Error>}
          </LoginForm>

        </LoginContainer>
    );
}

export default Login;