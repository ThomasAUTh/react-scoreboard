import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'

const players = [
  {
    id: 1,
    name: 'Makis',
    score: 4
  },
  {
    id: 2,
    name: 'Demi',
    score: 5
  },
  {
    id: 3,
    name: 'Tasos',
    score: 3
  }
]

export default class Scoreboard extends Component {
  renderPlayer(player) {
    return <Player key={player.id}
      name={player.name}
      score={player.score}
    />
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
      </div>
    )
  }
}