import styled from 'styled-components';

export const modalStyles = {
    content: {
        top: '30%',
        bottom: '30%',
        left: '30%',
        right: '30%',
        width: '40%',
        height: '40%',
        border: 'none',
        borderRadius: '1.0rem',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
};
export const ModalContainer = styled.div`{ 
    padding-top: 6rem;
    padding-inline: 2rem;
}`;

export const ButtonContainer = styled.div`{
    display: flex;
    gap: 1rem;
    justify-content: end;
}`;
export const Cancel = styled.button`{
    width: 30%;
    background: #fdfdfd;
    font-family: 'Jost', sans-serif;
    color: #0c0f0a;
    box-shadow: 0 0 0 1px #0c0f0a;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    
    &:hover {
        color: #909090;
    }
}`;

export const Delete = styled.button`{
    width: 30%;
    background: #ff0033;
    font-family: 'Jost', sans-serif;
    color: #fdfdfd;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    
    &:hover {
        box-shadow: 0 0 0 1px #ff0033;
        background: #fdfdfd;
        color: #ff0033;
    }
}`;
export const Header = styled.h1`{
    font-family: 'Jost', sans-serif;
    font-size: 2.5rem;
    color: #0c0f0a;
}`;
export const Msg = styled.p`{
    font-family: 'Jost', sans-serif;
    font-size: 1.3rem;
    color: #0c0f0a;
}`;
