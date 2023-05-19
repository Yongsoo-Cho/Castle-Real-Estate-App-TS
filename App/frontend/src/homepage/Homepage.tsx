import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import ListingsList from './listings/list-listing/ListingsList';
import styled from 'styled-components';
import Profile from './profile/Profile';
import CreateListing from './listings/create-listing/CreateListing';

const InputContainer = styled.input`{

    width: 20%;

    padding: 8px;
    margin-left: 20px;

    color: #fdfdfd;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    border: 2px solid #fdfdfd;
    border-radius: 0.7rem;
    outline: none;
    background: none;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    transition: 400ms;
    transition-timing-function: cubic-bezier(0.2, 0.9, 0.0, 1.0);

    &:focus{
        width: 30%;
    }
    ::placeholder{
        color: #fdfdfd;
        opacity: 0.95;
  }
`;

interface HomepageProps {
    authentication: boolean;
}

const Homepage: React.FC<HomepageProps> = ({authentication}) => {
    const [prefix, setPrefix] = useState('');

    return(

        <div>
            <div style={{position:"absolute", top:"45%", width: "100%"}}>
                <InputContainer
                    type="text"
                    placeholder="Search for a listing..."
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                />
            </div>

            {authentication && <Profile/>}
            {authentication && <CreateListing/>}
            
            <div style={{display: "flex", height:"100vh"}}>
                <ListingsList prefix={prefix}/>
                <Navbar auth={authentication}/>
            </div>
        </div>
    );
}

export default Homepage;