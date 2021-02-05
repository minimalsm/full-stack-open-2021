import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const positive = ((good + neutral) / total) * 100
  const average = ((good * 1) + (bad * -1)) / total;

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average || 0}</p>
      <p>positive {positive || 0}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  

  return (
    <div>
      <h1>give feedback</h1>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />

      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>



    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



