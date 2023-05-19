import React, {useState} from 'react';
import AuthModal from '../AuthModal';
import {logout} from '../../../utils/logout';
import { Header, HeaderTitle, AuthenticationDiv, Button } from './styled-components';
import '../authtab.css';


interface NavbarProps {
    auth: boolean;
}

const Navbar:React.FC<NavbarProps> = ({auth}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [authType, setAuthType] = useState('login');
    function openModal( selectedAuthType: string ) {
        setAuthType(selectedAuthType);
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function handleAuthSwitch( selectedAuthType: string) {
        setAuthType(selectedAuthType);
    }

    return(
        <Header>
            <HeaderTitle>CASTLE</HeaderTitle>

            <AuthenticationDiv>
                {auth ?
                    <Button onClick={logout}>Logout</Button>
                    :
                    <div>
                        <Button onClick={() => openModal("login")}>Login</Button>
                        <Button onClick={() => openModal("register")}>Register</Button>
                    </div>
                }
            </AuthenticationDiv>

            <AuthModal 
                modalIsOpen={modalIsOpen} 
                closeModal={closeModal} 
                authType={authType}
                handleAuthSwitch={handleAuthSwitch}
            />
            
        </Header>
    );
}

export default Navbar;