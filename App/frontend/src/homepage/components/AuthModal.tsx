import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Login from '../authentication/login/Login';
import Registration from '../authentication/registration/Registration';

const modalStyles = {
    overlay: {
        background: '#41EAD425',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter:'blur(5.5px)'
    },
    content: {
        top: '0%', bottom: '0%', left: '69.9%',
        width: '30%', height: '100%',
        borderRadius: '0px',
        padding: '0px',
        border: 'none',
    }
};

interface AuthModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    authType: string;
    handleAuthSwitch: (authType: string) => void;
}


const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;

    background: #fdfdfd;
`;
const ButtonContainer = styled.div`
    color: #fdfdfd;
    
`;
const Authentication = styled.button`
    background: none;
    margin-top: 10px;
    margin-inline: 2.5px;

    border: 2px solid #0c0f0a;
    border-radius: 5px;
    padding: 5px;

    min-width: 100px;
    color: #0c0f0a;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    transition: 0.1s ease-in-out;
    &:hover {
        cursor: pointer;
        color: #7c7c7c;
        border: 2px solid #7c7c7c;
`;

const Color = styled.div`
    background: linear-gradient(110deg, #FF206E, #FFFB12);
    height: 20vh;
    width: 100%;
    margin-bottom: 10px;

    text-align: center;
    font-family: 'Jost', sans-serif;
    color: #fdfdfd;
    font-size: 2rem;
`;

const AuthModal: React.FC<AuthModalProps> = ({modalIsOpen, closeModal, authType, handleAuthSwitch}) => {

    return(
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                closeTimeoutMS={500}
            >

            <ModalContainer>
                <Color>
                    <h1>{authType.toUpperCase()}</h1>
                </Color>

                <ButtonContainer>
                    <Authentication 
                        onClick={()=>handleAuthSwitch('login')} 
                        style={{color: authType==='login' ? '#7c7c7c' : '#0c0f0a',
                                border: authType==='login' ? '2px solid #7c7c7c' : '2px solid #0c0f0a',
                                cursor: authType==='login' ? 'default' : 'pointer'
                            }}
                    >
                        Login
                    </Authentication>
                    <Authentication 
                        onClick={()=>handleAuthSwitch('register')}
                        style={{color: authType==='register' ? '#7c7c7c' : '#0c0f0a',
                                border: authType==='register' ? '2px solid #7c7c7c' : '2px solid #0c0f0a',
                                cursor: authType==='register' ? 'default' : 'pointer'
                            }}
                    >
                        Register
                    </Authentication>
                    
                </ButtonContainer>

                {authType === 'login' && <Login/>}
                {authType === 'register' && <Registration/>}
                
            </ModalContainer>

        </Modal>
    );
}

export default AuthModal;

