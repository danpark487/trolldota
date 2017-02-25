import React from 'react';

import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

/** Thunk actions */
import { loadModal } from '../action-creators/modal';

/** Modal Type Constant */
import { LOGIN_MODAL } from '../modals/modaltypes';

export class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.showLoginMenu = this.showLoginMenu.bind(this);
    }

    showLoginMenu () {
        this.props.loadModal(LOGIN_MODAL);
    }

    render () {
        return (
            <NavBar
                showLoginMenu={this.showLoginMenu}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadModal: modelType => dispatch(loadModal(modelType))
    };
};

export default connect(null, mapDispatchToProps)(NavBarContainer);
