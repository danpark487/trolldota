import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../action-creators/modal';
import { login } from '../../action-creators/currentuser';
import Modal from '../Modal';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    loginSubmit(evt) {
        evt.preventDefault();
        const credentials = {
            username: evt.target.username.value,
            password: evt.target.password.value
        };
        this.props.login(credentials);
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="login">
                    <h1>Login</h1>
                    <form method="post" onSubmit={this.loginSubmit}>
                        <input type="text" name="username" placeholder="Username" required="required" />
                        <input type="password" name="password" placeholder="Password" required="required" />
                        <button type="submit" className="bktn btn-primary btn-block btn-large">Let me in.</button>
                    </form>
                    <br />
                </div>
            </Modal>
        );
    }
}

const mapDispatchToProps = {
    hideModal: () => hideModal(),
    login: (credentials) => login(credentials)
};

export default connect(null, mapDispatchToProps)(LoginModal);
