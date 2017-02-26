import React from 'react';
import PlayersContainer from '../containers/PlayersContainer';

export default function (props) {
    return (
        <div className="container-fluid">
            <div className="flex-row-container">
                <b>WatchList</b>
                <form onSubmit={props.handleSubmit} className="form-inline">
                    <b>Player: </b>
                    <input type="player" className="form-control" name="player" />
                    <button type="submit" className="btn btn-default">Add</button>
                </form>
            </div>
            <PlayersContainer playerList={props.currentUser.watchlist} />
        </div>
    );
}
