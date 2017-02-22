import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    return (
            <section className="player-matches">
                <div className="recent-match-header">
                    <h4>> Recent Matches</h4>
                </div>
                <table>
                    <thead>
                        <th>Hero</th>
                        <th>Match ID</th>
                        <th>Result</th>
                        <th>Duration</th>
                        <th>Kills</th>
                        <th>Deaths</th>
                        <th>Assists</th>
                    </thead>
                    <tbody>
                        <td>Magnus</td>
                        <td>12339342</td>
                        <td>Win</td>
                        <td>53:40</td>
                        <td>10</td>
                        <td>3</td>
                        <td>12</td>
                    </tbody>
                </table>
            </section>

    );
};
