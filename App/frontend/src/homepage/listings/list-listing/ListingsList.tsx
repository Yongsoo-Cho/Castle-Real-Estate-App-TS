import { useEffect, useState } from 'react';
import Listing from '../Listing';
import {MediaScroller} from './listing-list-components';
import {listListings} from './listing-operations';

interface ListingListProps {
    prefix: string;
};
interface ListingProps {
    location: string;
    price: number;
    status: string;
    description: string;
}

const ListingsList: React.FC<ListingListProps> = ({prefix}) => {
    const [listingList, setListingList] = useState<ListingProps[]>([]);
    const [listingMap, setListingMap] = useState<{[key: string]: ListingProps}>({});

    useEffect(() => {
        const fetchListings = async () => {
            const listingsResponse = await listListings({prefix: prefix});

            console.log(listingsResponse)

            setListingList(listingsResponse.reverse());
            const map: { [key: string]: ListingProps } = {};
            for (let i = 0; i < listingsResponse.length; i++) {
                const listing = listingsResponse[i];
                map[listing.id] = listing;
            };
            setListingMap(map);
            console.log(listingMap);
        };

        fetchListings();
        console.log(listingMap);
    }, [prefix, listingMap]);

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

