import React from 'react';
import Modal from 'react-modal';
import {modalStyles, ModalContainer, HeaderContainer, Location, Price, StatusContainer, PlaceholderImage, DescContainer} from './details-modal-components';

interface InfoProps {
    location: string;
    price: number;
    status: string;
    description: string;
}
interface DetailsModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    info: InfoProps;
};

const DetailsModal: React.FC<DetailsModalProps > = ({modalIsOpen, closeModal, info}) => {

    const fontColors = new Map();
    fontColors.set('For Sale', '#63CB43');
    fontColors.set('Recently Sold', '#F7AC3D');
    fontColors.set('Foreclosure', '#EB5B55');

    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            closeTimeoutMS={500}
        >
            <ModalContainer>
                <HeaderContainer>
                    <Location>{info.location}</Location>
                    <Price>${info.price}</Price>
                    <StatusContainer style={{border: `3px solid ${fontColors.get(info.status)}`, color: fontColors.get(info.status)}}>
                        Status: {info.status}
                    </StatusContainer>
                </HeaderContainer>
                <PlaceholderImage/>

                <DescContainer>{info.description}</DescContainer>
            </ModalContainer>
            
        </Modal>
    );
}

export default DetailsModal;

