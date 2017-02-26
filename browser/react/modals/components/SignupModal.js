import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../action-creators/modal';
import { signup } from '../../action-creators/currentuser';
import Modal from '../Modal';

class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.signupSubmit = this.signupSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    signupSubmit(evt) {
        evt.preventDefault();
        const credentials = {
            username: evt.target.username.value,
            email: evt.target.email.value,
            password: evt.target.password.value,
            steamID: evt.target.steamID.value
        };
        this.props.signup(credentials);
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="login">
                    <h1>Sign In</h1>
                    <form method="post" onSubmit={this.signupSubmit}>
                        <input type="text" name="username" placeholder="Username" required="required" />
                        <input type="text" name="email" placeholder="Email" required="required" />
                        <input type="password" name="password" placeholder="Password" required="required" />
                        <input type="text" name="steamID" placeholder="Steam ID" required="required" />
                        <button type="submit" className="bktn btn-primary btn-block btn-large">Sign Up.</button>
                    </form>
                    <br />
                </div>
            </Modal>
        );
    }
}

const mapDispatchToProps = {
    hideModal: () => hideModal(),
    signup: (credentials) => signup(credentials)
};

export default connect(null, mapDispatchToProps)(SignupModal);
