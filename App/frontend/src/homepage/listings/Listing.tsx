import React from 'react';
import { ListingCard, PlaceholderImage, Price, Address, Description, StatusContainer } from './list-components';

interface ListingProps {
    location: string;
    price: number;
    status: string;
    description?: string;
    userId?: string;
    _id?: string;
}

const Listing: React.FC<ListingProps> = ({
    location,
    price,
    status,
    description
}) => {

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
 
            <StatusContainer style={{border: `3px solid ${fontColors.get(status)}`, color: fontColors.get(status)}}>
                Status: {status}
            </StatusContainer>

        </ListingCard>
    );
};

export default Listing;