import React from 'react';
import Modal from 'react-modal';
import {ModalContainer, Header, Msg, ButtonContainer, Cancel, Delete, modalStyles} from './confirm-modal-components';
import {deleteListing} from './confirm-modal-operations';

interface ConfirmModalProps {   
    modalIsOpen: boolean;
    closeModal: () => void;
    listingId: string;

};


const ConfirmModal: React.FC<ConfirmModalProps > = ({modalIsOpen, closeModal, listingId}) => {    
    const handleDelete = async () => {
        await deleteListing(listingId);
        window.location.reload();
        closeModal();
    }
    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            closeTimeoutMS={500}
        >
            <ModalContainer>
                <Header>Are you sure?</Header>
                <Msg>Are you sure you want to delete this listing?</Msg>
                <ButtonContainer>
                    <Cancel onClick={closeModal}>Cancel</Cancel>
                    <Delete onClick={handleDelete}>Delete</Delete>
                </ButtonContainer>
            </ModalContainer>
            
        </Modal>
    );
}

export default ConfirmModal;

