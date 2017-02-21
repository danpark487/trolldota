import React from 'react';
import PlayersContainer from '../containers/PlayersContainer';

export default function (props) {
    return (
        <div className="container-fluid">
            <div className="row-container">
                <h3>WatchList</h3>
                <form className="form-inline">
                    <div className="right">
                        <h3>Player:</h3>
                        <input type="player" className="form-control" id="player" />
                    </div>
                    <button type="submit" className="btn btn-default">Add</button>
                </form>
            </div>
            <PlayersContainer playerList={props.playerList} />
        </div>
            );
};
