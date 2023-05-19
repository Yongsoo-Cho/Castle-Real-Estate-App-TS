import decode from 'jwt-decode';

export default function isAuthenticated() {
    const token = window.localStorage.getItem("token");

    if(token === null) {
        return false;
    };

    try {
        decode(token);
    } catch (err) {
        return false;
    };

    return true;

}