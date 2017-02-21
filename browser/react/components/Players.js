import React from 'react';

export default function (props) {
    console.log(props.playerList)
    return (
        <div className="flex-container">
            {props.playerList && props.playerList.map((player, i) => {
                return (
                    <div key={i} className="flex-item">
                        <ul>{player}</ul>
                    </div>
                );
            })}
        </div>
    );
};
