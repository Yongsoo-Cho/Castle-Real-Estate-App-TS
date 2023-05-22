import styled from 'styled-components';

export const ProfileContainer = styled.div`{ 
    position: absolute;
    top: 12%;
    margin-left: 20px;
    width: 30%;
    min-height: 28%;
    background: rgba( 255, 255, 255, 0.97 );
    padding: 0.5rem;
    border-radius: 1rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
    font-family: 'Jost', sans-serif;

    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}`;
export const FullName = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 3.0rem;

`;
export const Email = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.2rem;
    color: #707070;
`;

export const MyListings = styled.button`
    cursor: pointer;

    padding: 0.5rem;
    margin-top: 2rem;
    margin-inline: 10%;

    color: #fdfdfd;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    outline: none;
    background:#0c0f0a;
    border-radius: 0.7rem;

    box-shadow: #0c0f0a 0px;

    transition: 500ms;
    transition-timing-function: cubic-bezier(0.2, 0.9, 0.0, 1.0);

    &:hover{
        background: #fff0;
        color: #0c0f0a;
        box-shadow: #0c0f0a 1px;
    }
`;
