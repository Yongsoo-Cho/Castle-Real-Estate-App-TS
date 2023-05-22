import React, {useState, useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import ListingsList from './listings/list-listing/ListingsList';
import styled from 'styled-components';
import Profile from './profile/Profile';
import CreateListing from './listings/create-listing/CreateListing';
import Listing from './listings/Listing';

import {listListings} from './listings/list-listing/listing-operations';

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
interface ListingProps {
    location: string;
    price: number;
    status: string;
    description: string;
}

const Homepage: React.FC<HomepageProps> = ({authentication}) => {
    const [prefix, setPrefix] = useState('');
    const [offlineListings, setOfflineListings] = useState<ListingProps[]>([]);

    const fetchListings = async () => {
        const listingsResponse = await listListings({prefix: prefix});
        setOfflineListings(listingsResponse.reverse());
    };

    useEffect(() => {
        fetchListings();
    }, [prefix]);

    useEffect(() => {
        fetchListings();
    }, [offlineListings]);


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
            {authentication && <CreateListing 
                offlineListings={offlineListings} 
                formOfflineListings={(listing: ListingProps)=>{
                    setPrefix('');
                    setOfflineListings([...offlineListings, listing]);
                }}
            />}
            
            <div style={{display: "flex", height:"100svh"}}>
                <ListingsList prefix={prefix} offlineListings={offlineListings}/>
                <Navbar auth={authentication}/>
            </div>
        </div>
    );
}

export default Homepage;