import styled from "styled-components";

export const MediaScroller = styled.div`
    display:inline-block;
    align-self: flex-end;
    margin-bottom: 1rem;

    min-width: 100%;
    
    padding: 0 1rem 1rem;

    height: 45vh;
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: 18%;

    overflow-x: scroll;
    overflow-y: hidden;
    overrscroll-behaviour-inline: contain;

    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 1rem;

    ::-webkit-scrollbar {
        height: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        margin-inline: 2.5rem;

        background: #41EAD425;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.5px);
        -webkit-backdrop-filter: blur(5.6px);
    }
    ::-webkit-scrollbar-thumb {
        background: rgba( 255, 255, 255, 0.9 ); 
        border-radius: 10px;
    }
`;