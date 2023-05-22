import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import decode from 'jwt-decode';
import { listListingByUser, updateListingStatus } from './profile-operations';
import {ListEntry, ListHeader, Location, Price, StatusButton, Description, Delete, modalStyles, Info, Name, Email, Status} from './profile-modal-components';
import ConfirmModal from './confirm-modal/ConfirmModal';

interface InfoProps {
    firstName: string;
    lastName: string;
    email: string;
};
interface DetailsModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    info: InfoProps;
};
interface ListingProps {
    _id: string;
    location: string;
    price: number;
    status: string;
    description: string;
}

const DetailsModal: React.FC<DetailsModalProps > = ({modalIsOpen, closeModal, info}) => {

    const [userListings, setUserListings] = useState<ListingProps[]>([]);
    let userId: string | undefined;
    if (window.localStorage.getItem('token')) {
        const token: string | null = window.localStorage.getItem('token');
        if (token) {
            const decodedToken: { user: { _id: string }, iat: number, exp: number } = decode(token);
            userId = decodedToken.user._id;
        }
    }

    const fetchListings = async () => {
        const listingsResponse = await listListingByUser(userId);
        setUserListings(listingsResponse.reverse());
    };

    useEffect(() => {
        fetchListings();
    }, [userId]);

    const  [_modalIsOpen, setIsOpen] = useState(false);
    const openModal = (id: string) => {
        setListingId(id);
        setIsOpen(true);
    }
    const _closeModal = () => {
        setIsOpen(false);
    }
    const [listingId, setListingId] = useState<string>('');

    const handleStatusChange = async (status: string, id: string) => {
        const updatedStatus = await updateListingStatus(status, id);
        fetchListings();
    };

    const fontColors = new Map();
    fontColors.set('For Sale', '#63CB43');
    fontColors.set('Recently Sold', '#F7AC3D');
    fontColors.set('Foreclosure', '#EB5B55');

    const individualListings = userListings.map((t)=> {
        return (
            <ListEntry>
                <Status 
                    style={{
                        color: fontColors.get(t.status), 
                        border: `3px solid ${fontColors.get(t.status)}`
                    }}
                >
                    Status: {t.status}
                </Status>
                <ListHeader>
                    <Location>{t.location}</Location>
                    <Price>${t.price}</Price>

                    <StatusButton onClick={()=>handleStatusChange(t._id, 'For Sale')}>For Sale</StatusButton>
                    <StatusButton onClick={()=>handleStatusChange(t._id, 'Recently Sold')}>Recently Sold</StatusButton>
                    <StatusButton onClick={()=>handleStatusChange(t._id, 'Foreclosure')}>Foreclosure</StatusButton>

                    <Delete onClick={()=>openModal(t._id)}>Delete</Delete>
                </ListHeader>
                <Description>{t.description}</Description>
            </ListEntry>
            
        )
    });
    
    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            closeTimeoutMS={500}
        >
            <div>
                <Info>
                    <Name>{info.firstName +  ' ' + info.lastName}</Name>
                    <Email>{info.email}</Email>
                </Info>
                
                <ul style={{padding: 0}}>
                    {individualListings}
                </ul>
            </div>

            <ConfirmModal
                    modalIsOpen={_modalIsOpen}
                    closeModal={_closeModal}
                    listingId={listingId}
            />
            
        </Modal>
    );
}

export default DetailsModal;


