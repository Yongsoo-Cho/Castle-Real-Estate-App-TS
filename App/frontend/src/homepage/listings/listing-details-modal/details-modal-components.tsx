import styled from 'styled-components';

export const modalStyles = {
    overlay: {
        background: '#41EAD425',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter:'blur(5.5px)'
    },
    content: {
        top: '15%', bottom: '15%', left: '15%', right: '15%',
        width: '70%', height: '70%',
        borderRadius: '1rem',
        padding: '1rem',
        border: 'none',
    }
};

export const ModalContainer = styled.div`{
    display: auto;
}`;
export const Location = styled.h1`{
    font-family: 'Jost', sans-serif;

    margin-bottom: 1rem;

    text-align: center;
}`;
export const StatusContainer = styled.div`
    color: #fdfdfd;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
    font-family: 'Jost', sans-serif;
    border-radius: 1rem;
    padding: 0.5rem;

    text-align: center;
    min-width: 120px;
`;
export const Price = styled.h3`
    font-family: 'Jost', sans-serif;
    color: #0c0f0a;
    font-size: 2.0rem;

    background: -webkit-linear-gradient(45deg, #FF206E, #FFFB12);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
`;
export const PlaceholderImage = styled.div`
    min-height: 300px;
    max-height: 300px;
    background: #33333350;
    border-radius: 1rem;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DescContainer = styled.div`
    font-family: 'Jost', sans-serif;
    color: #0c0f0a;
    font-size: 1.2rem;

    margin-top: 1rem;
    margin-bottom: 0;
`;
