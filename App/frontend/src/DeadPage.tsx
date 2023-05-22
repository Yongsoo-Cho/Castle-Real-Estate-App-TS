import styled from 'styled-components';

const DeadPageContainer = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100svh;
}`;

const Label = styled.h1`{
    font-size: 3rem;
    color: #fdfdfd;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    text-align: center;
}`;

const DeadPage = () => {
    return (
        <DeadPageContainer>
            <Label>404 Page not Found</Label>
        </DeadPageContainer>
    );
};

export default DeadPage;