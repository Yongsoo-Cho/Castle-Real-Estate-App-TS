import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    
    width: 96%;
    position: absolute;

    top: 2%;
    left: 2%;
    right: 2%;

`;
export const HeaderTitle = styled.h1`
    display: inline-block;
    font-family: 'Jost', sans-serif;
    color: #fdfdfd;
    vertical-align: middle;
    align-self: center;
`;
export const AuthenticationDiv = styled.div`
    align-self: center;
    margin-left: auto;
`;
export const Button = styled.button`
    border: 2px solid #fdfdfd;
    border-radius: 5px;
    background: none;
    padding: 5px;
    margin-left: 5px;

    min-width: 100px;
    color: #fdfdfd;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #41EAD425;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.5px);
        -webkit-backdrop-filter: blur(5.6px);
    }
`;