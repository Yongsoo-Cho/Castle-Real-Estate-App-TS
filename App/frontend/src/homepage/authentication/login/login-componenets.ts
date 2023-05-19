import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100vh;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 25%;
`;

export const InputContainer = styled.input`
    padding: 8px;
    margin-bottom: 10px;

    width: 15em;

    color: #0c0f0a;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    border: 2px solid #0c0f0a;
    border-radius: 0.7rem;
    outline: none;
    background: none;
`;

export const Submit = styled.button`
    width: 10rem;

    color: #0c0f0a;
    font-family: 'Jost', sans-serif;
    font-size: 0.6rem;

    border: 2px solid #0c0f0a;
    border-radius: 0.7rem;
    outline: none;
    background: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #0c0f0a;
        color: #fff;
    }

`;

export const Error = styled.h1`
    color #aa1212;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;
`;