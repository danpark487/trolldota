import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    return (
        <div className="flex-container">
            {props.playerList && props.playerList.map((player, i) => {
                return (
                    <div key={i} className="flex-item">
                        <Link to={`/players/${player}`}>{player}</Link>
                    </div>
                );
            })}
        </div>
    );
};
