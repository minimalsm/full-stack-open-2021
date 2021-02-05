import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const StatisticsTable = ({ children }) => {
  return (
    <table>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const positive = ((good + neutral) / total) * 100
  const average = ((good * 1) + (bad * -1)) / total;

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      
      <StatisticsTable>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='total' value={total} />
        <Statistic text='average' value={average} />
        <Statistic text='positive' value={`${positive}%`} />
      </StatisticsTable>
    </div>
  )
}

const Statistic = ({ text, value}) => (
  <tr>
    <td>{text} {value}</td>
  </tr>  
)

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));



