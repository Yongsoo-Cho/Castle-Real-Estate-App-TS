import React, {useState} from 'react';
import { ListingCard, PlaceholderImage, Price, Address, Description, StatusContainer, Button } from './list-components';
import DetailsModal from './listing-details-modal/DetailsModal';

interface ListingProps {
    location: string;
    price: number;
    status: string;
    description: string;
    userId?: string;
    _id?: string;
}

const Listing: React.FC<ListingProps> = ({
    location,
    price,
    status,
    description
}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    //change to interface later or make descriptiona arg take in enum
    const fontColors = new Map();
    fontColors.set('For Sale', '#63CB43');
    fontColors.set('Recently Sold', '#F7AC3D');
    fontColors.set('Foreclosure', '#EB5B55');

    return(
        <ListingCard>
            <PlaceholderImage/>

            <div>
                <Price>${price.toLocaleString()}</Price>
                <Address>{location}</Address>
                {description ? <Description>{description}</Description> : null}
            </div>

            <div style={{alignSelf:'end'}}>
                <div style={{display: 'flex', flex: '1', maxHeight: '50%', gap: '10%'}}>
                    <Button onClick={openModal}>See more...</Button>
                    <StatusContainer style={{border: `3px solid ${fontColors.get(status)}`, color: fontColors.get(status)}}>
                        Status: {status}
                    </StatusContainer>

                </div>
            </div>

            <DetailsModal 
                modalIsOpen={modalIsOpen} 
                closeModal={closeModal}
                info={{location, price, status, description}}
            />
        </ListingCard>
    );
};

export default Listing;