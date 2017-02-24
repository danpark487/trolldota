import React from 'react';
import NavBarContainer from '../containers/NavBarContainer';
import ModalContainer from '../modals/ModalContainer';

export default function App ({ children }) {
    return (
        <div id="main">
            <NavBarContainer />
            {children}
            <ModalContainer />
        </div>
    );
}
