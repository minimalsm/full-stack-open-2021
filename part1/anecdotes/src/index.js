import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostPopularAnecdote = ({ votes }) => {
  const mostVotedIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <Anecdote
      selected={mostVotedIndex}
        votes={votes}
      />
    </div>
  )
}

const Anecdote = ({ selected, votes }) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.from(Array(anecdotes.length).fill(0)))

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const getRandomAnecdoteIndex = () => {
    const numberOfAnecdotes = anecdotes.length
    const randomIndex = Math.floor(Math.random() * numberOfAnecdotes)
    return randomIndex
  }

  return (
    <div>
    <h1>Anecdote of the day</h1>
    <Anecdote selected={selected} votes={votes} />
    
    <button onClick={handleVote}>vote</button>
    <button onClick={() => {
      setSelected(getRandomAnecdoteIndex)
    }}>next anecdore</button>
    
    <MostPopularAnecdote votes={votes}/>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)