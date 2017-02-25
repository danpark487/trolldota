import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../action-creators/modal';
import Modal from '../Modal';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="login">
                    <h1>Login</h1>
                    <form method="post">
                        <input type="text" name="u" placeholder="Username" required="required" />
                        <input type="password" name="p" placeholder="Password" required="required" />
                        <button type="submit" className="bktn btn-primary btn-block btn-large">Let me in.</button>
                    </form>
                    <br />
                </div>
            </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => {dispatch(hideModal());}
    };
};

export default connect(null, mapDispatchToProps)(LoginModal);
