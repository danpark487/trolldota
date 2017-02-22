import React from 'react';

export default function (props) {
    return (
            <section className="player-info">
                <img id="profile-picture" src="http://i3.kym-cdn.com/photos/images/newsfeed/000/925/494/218.png_large" />
                <h2>Simo Hayha</h2>
                <div className="player-info-block">
                    <div className="wrap" />
                    <div className="wl-block wrap">
                        <h4 id="win-loss">W: 1600</h4>
                        <h4 id="win-loss">L: 1500</h4>
                    </div>
                    <div className="mmr-block wrap">
                        <h4 id="mmr">Solo MMR: 4800</h4>
                        <h4 id="mmr">Party MMR: 4000</h4>
                    </div>
                </div>
            </section>
    );
};
