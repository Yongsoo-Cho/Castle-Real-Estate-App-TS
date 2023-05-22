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
export const ListEntry = styled.li`{
    padding: 1rem;
    margin-bottom: 0.2rem;
    list-style: none;
    
    background: #FDFDFD;
    border-radius: 1rem;
    border: 2px solid #0c0f0a;
    
}`;
export const ListHeader = styled.div`{
    display: flex;
    align-items: center;
    margin-top: -0.9rem;
}`;
export const Location = styled.h1`{
    margin-right: 1rem;
    font-family: 'Jost', sans-serif;
}`;
export const Price = styled.h1`{
    margin-right: 1rem;
    font-family: 'Jost', sans-serif;
    text-align: center;
    color: #0c0f0a;
}`;
export const StatusButton = styled.button`{
    margin-right: 1rem;
    background: #0c0f0a;
    color: #fdfdfd;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-family: 'Jost', sans-serif;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 0 1px #0c0f0a;
        background: #fdfdfd;
        color: #0c0f0a;
    }
}`;
export const Description = styled.div`{
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #909090;
    font-family: 'Jost', sans-serif;
}`;
export const Delete = styled.button`{
    margin-left: auto;
    background: #ff0033;
    font-family: 'Jost', sans-serif;
    color: #fdfdfd;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    

    &:hover {
        box-shadow: 0 0 0 1px #ff0033;
        background: #fdfdfd;
        color: #ff0033;
    }
}`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
export const Name = styled.h1`
    font-size: 2.5rem;
    font-family: 'Jost', sans-serif;
    color: #2d3436;
`;
export const Email = styled.h2`
    font-size: 1.5rem;
    font-family: 'Jost', sans-serif;
    color: #636e72;
`;
export const Status = styled.h2`
    font-size: 1.0rem;
    text-align: center;
    font-family: 'Jost', sans-serif;
    max-width: 20%;
    padding: 0.5rem;
    border-radius: 0.5rem;
`;