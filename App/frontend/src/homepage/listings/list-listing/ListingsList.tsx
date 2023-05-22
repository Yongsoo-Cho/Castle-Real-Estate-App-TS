import { useEffect, useState } from 'react';
import Listing from '../Listing';
import {MediaScroller} from './listing-list-components';
import {listListings} from './listing-operations';

interface ListingListProps {
    prefix: string;
    offlineListings: ListingProps[];
};
interface ListingProps {
    location: string;
    price: number;
    status: string;
    description: string;
}

const ListingsList: React.FC<ListingListProps> = ({prefix, offlineListings}) => {
    const [listingList, setListingList] = useState<ListingProps[]>([]);

    useEffect(() => {
        const fetchListings = async () => {
            console.log('fetched listings')
            const listingsResponse = await listListings({prefix: prefix});
            setListingList(listingsResponse.reverse());
        };

        fetchListings();
    }, [prefix]);

    useEffect(() => {
        setListingList(offlineListings);
    }, [offlineListings]);

    const listingComponenets = listingList.map(t => {
        return (
            <Listing 
                location={t.location} 
                price={t.price}
                status={t.status} 
                description={t.description}
            />
        )
    })
    return(
        <MediaScroller>
            {listingComponenets}
        </MediaScroller>
    );
}

export default ListingsList;

