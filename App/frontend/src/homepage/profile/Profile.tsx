import React, {useState, useEffect} from 'react';
import { describeUser } from './profile-operations';
import decode from 'jwt-decode';
import { ProfileContainer, FullName, Email } from './profile-components';

interface ProfileProps {
    firstName: string;
    lastName: string;
    email: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState( {} );

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
        </ProfileContainer>
    );
};

export default Profile;