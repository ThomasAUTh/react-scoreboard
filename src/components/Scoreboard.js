import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'
import AddPlayer from './AddPlayer';

export default class Scoreboard extends Component {
    state = {
        players: [
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
    }

    updatePlayerScore = (id, score) => {
        const updatedPlayers = this.state.players.map(
          player => {
            if (player.id === id) {
              return {
                ...player,
                score
              }
            }
            else {
              return player
            }
          }
        )
        this.setState({ players: updatedPlayers })
      }

    renderPlayer = (player) => {
    return (
        <Player
          id={player.id}
          key={player.id}
          name={player.name}
          score={player.score}
          updatePlayerScore={this.updatePlayerScore}
        />
    )
    } 

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
        <AddPlayer />
      </div>
    )
  }
}