import React from 'react';
import { connect } from 'react-redux';

/** Modal Components */
import LoginModal from './components/LoginModal';

/** Modal Type Constants */
import { LOGIN_MODAL} from './modaltypes'; 

const MODAL_COMPONENTS = {
    LOGIN_MODAL: LoginModal
};

const ModalContainer = (props) => {
    if (!props.modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[props.modalType];

    return <SpecificModal />;
};

const mapStateToProps = state => {
    return {
        modalType: state.modal.modalType
    };
};

export default connect(mapStateToProps)(ModalContainer);
