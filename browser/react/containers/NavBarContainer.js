import React from 'react';

import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

/** Thunk actions */
import { loadModal } from '../action-creators/modal';

export class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.showLoginMenu = this.showLoginMenu.bind(this);
    }

    showLoginMenu () {
        this.props.loadModal('Login');
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
