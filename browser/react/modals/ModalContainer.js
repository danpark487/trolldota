import React from 'react';
import { connect } from 'react-redux';

/** Modal Components */
import LoginModal from './LoginModal';

const MODAL_COMPONENTS = {
    'Login': LoginModal
};

const ModalContainer = ({modalType}) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];

    return <SpecificModal />;
};

export default connect(state => state.modal)(ModalContainer);
