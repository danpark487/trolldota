import React from 'react';

export default function (props) {
    return (
            <section className="player-info">
                {props.playerinfo.profile &&
                    <div>
                        <img id="profile-picture" src={`${props.playerinfo.profile.avatarfull}`} />
                        <h2>{props.playerinfo.profile.personaname}</h2>
                    </div>
                }
                <div className="player-info-block">
                    <div className="wrap" />
                    <div className="wl-block wrap">
                        <h4 id="win-loss">W: {props.winloss.win}</h4>
                        <h4 id="win-loss">L: {props.winloss.lose}</h4>
                    </div>
                    <div className="mmr-block wrap">
                        <h4 id="mmr">Solo MMR: {props.playerinfo.solo_competitive_rank}</h4>
                        <h4 id="mmr">Party MMR: {props.playerinfo.competitive_rank}</h4>
                    </div>
                </div>
            </section>
    );
};
