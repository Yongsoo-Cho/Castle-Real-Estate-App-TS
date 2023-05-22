import React, {useState, useEffect} from 'react';
import { describeUser } from './profile-operations';
import decode from 'jwt-decode';
import { ProfileContainer, FullName, Email, MyListings } from './profile-components';
import ProfileModal from './ProfileModal';

interface ProfileProps {
    firstName: string;
    lastName: string;
    email: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<ProfileProps>( {firstName:'', lastName:'', email:''} );

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    let userId: string | undefined;
    if (window.localStorage.getItem('token')) {
        const token: string | null = window.localStorage.getItem('token');
        if (token) {
            const decodedToken: { user: { _id: string }, iat: number, exp: number } = decode(token);
            userId = decodedToken.user._id;
        }
    }

    useEffect(() => {
        const getProfile = async () => {
            const profileResponse = await describeUser(userId);
            setProfile(profileResponse);
        };
        getProfile();
    }, [userId]);

    return(
        <ProfileContainer>
            Signed in as:
            <FullName>{(profile as ProfileProps).firstName} {(profile as ProfileProps).lastName}</FullName> 
            <Email>{(profile as ProfileProps).email}</Email>

            <ProfileModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                info={profile}
            />
            <MyListings onClick={openModal}>My Listings</MyListings>
        </ProfileContainer>
    );
};

export default Profile;