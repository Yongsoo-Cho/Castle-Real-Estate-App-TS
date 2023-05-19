import styled from 'styled-components';

export const ListingCard = styled.div`
    display: grid;
    gap: 5px;

    grid-template-rows: min-content;

    padding: 1rem;

    background: rgba( 255, 255, 255, 0.9 );
    backdrop-filter: blur( 16px );
    webkit-backdrop-filter: blur( 16px );
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    border-radius: 3vh;

    scroll-snap-align: start;

    justify-content: center;
    min-width: 256px;
    max-height: 405px;
`;

export const PlaceholderImage = styled.div`
    width: 256px;
    height: 144px;
    border-radius: 1rem;
    margin-top: 0.5rem;
    background: #33333350;
`;
export const Price = styled.h3`
    font-family: 'Jost', sans-serif;
    color: #0c0f0a;
    font-size: 1.2rem;

    background: -webkit-linear-gradient(45deg, #FF206E, #FFFB12);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    margin-top: 5px;
    margin-bottom: 0;
`;
export const Address = styled.h1`
    font-family: 'Jost', sans-serif;
    color: #0c0f0a;
    font-size: 1.5rem;

    margin-top: 0;
    margin-bottom: 0;

    text-decoration: underline;
    text-underline-offset: 0.2em;
    
`;
export const Description = styled.p`
    font-family: 'Jost', sans-serif;
    color: #0c0f0a;
    font-size: 1rem;
    margin: top: 0;
    margin-bot: 0;
`;
export const StatusContainer = styled.div`
    color: #fdfdfd;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
    font-family: 'Jost', sans-serif;
    border-radius: 1rem;
    padding: 0.5rem;
    justify-self: right;
    align-self: end;

    text-align: center;
    min-width: 120px;
`;