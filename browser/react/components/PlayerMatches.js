import React from 'react';
import { Link } from 'react-router';
import { heroNames } from '../utilities/heronames';

const winOrLoss = function(playerSlot, radiantWin) {
    if (playerSlot > 100) {
        if (radiantWin === true) return 'Loss';
        else return 'Win';
    } else {
        if (radiantWin === true) return 'Win';
        else return 'Loss';
    }
};

function calcDuration(secs) {
    const time = secs;
    const hours   = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);
    const duration = [];
    if (hours > 0) {duration.push(hours)}
    if (minutes > 0) {duration.push(minutes)}
    if (seconds < 10) {
        duration.push('0' + seconds);
    } else {
        duration.push(seconds);
    }
    return duration.join(':');
}

export default function (props) {
    const matches = props.matches;
    return (
            <section className="player-matches">
                <div className="recent-match-header">
                    <h4>> Recent Matches</h4>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Hero</th>
                            <th>Match ID</th>
                            <th>Result</th>
                            <th>Duration</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            matches.length && matches.map(match => (
                                <tr key={match.match_id}>
                                    <td>
                                        <div>
                                            <img src={`/assets/heroes/${match.hero_id}_full.png`} className="hero-image" />
                                            {heroNames(match.hero_id)}
                                        </div>
                                    </td>
                                    <td>{match.match_id}</td>
                                    <td>{winOrLoss(+match.player_slot, match.radiant_win)}</td>
                                    <td>{calcDuration(parseInt(match.duration))}</td>
                                    <td>{match.kills}</td>
                                    <td>{match.deaths}</td>
                                    <td>{match.assists}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

    );
}
