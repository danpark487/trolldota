import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modal';
import Modal from './Modal';

const LoginModal = ({ hideModal }) => {
    return (
        <Modal>
            <div className="login">
                <h1>Login</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
                <br />
            </div>
        </Modal>
    );
};

export default connect(null, { hideModal })(LoginModal);
