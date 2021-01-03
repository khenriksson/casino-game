import logo from './logo.svg'
import React, { useState } from 'react'
import useField from './hooks/useField'
import './App.css'

const App = () => {
  const [players, setPlayers] = useState([])
  const player = useField('text')
  var doubleOrNothing = 1
  var randomShot = function (attr, b, don, reset) {
    if (reset) {
      doubleOrNothing = 1
      return 'reset made'
    }
    if (b) {
      if (don) doubleOrNothing = doubleOrNothing + 1
      return 'drink ' + doubleOrNothing
    } else if (1 + ~~(Math.random() * 6) <= 3) {
      if (don) doubleOrNothing = doubleOrNothing + 1
      return 'drink ' + doubleOrNothing
    } else {
      doubleOrNothing = 1
      return "don't drink"
    }
  }
  var update = function () {
    var b = document.querySelector('#b').value
    document.querySelector('#drinkResult').innerHTML = randomShot(
      0,
      +b,
      document.querySelector('#don').checked,
      false,
    )
  }

  const addPlayer = () => {
    const newPlayer = {
      name: player.value,
      drink: 0,
    }
    console.log(players)
    setPlayers(players.concat(newPlayer))
  }

  return (
    <div className='App'>
      <h1>The Casino Game</h1>
      <label>
        Add players
        <input
          type='text'
          name=''
          min='0'
          max='6'
          id='player'
          value='testing'
          {...player}
        />
      </label>
      <button type='button' name='button' onClick={addPlayer}>
        Add player
      </button>

      <label>
        Your guess between 0 and x:
        <input type='number' name='' min='0' max='6' id='b' />
      </label>

      <h4>Double or nothing?</h4>
      <label className='switch'>
        <input type='checkbox' id='don' />
        <span class='slider round'></span>
      </label>

      <button type='button' name='button' onClick={update}>
        Roll the dice
      </button>

      <h2 id='drinkResult'>Start by pressing Roll the dice</h2>

      <div>
        <h2>Players</h2>
        {players.map((player) => (
          <>
            <h4>{player.name}</h4>
            <h4>{player.drink}</h4>
          </>
        ))}
      </div>
    </div>
  )
}

export default App
