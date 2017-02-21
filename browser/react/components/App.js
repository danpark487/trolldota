import React from 'react';
import NavBarContainer from '../containers/NavBarContainer';

export default function App ({ children }) {
    return (
        <div id="main">
            <NavBarContainer />
            {children}
        </div>
    );
}
