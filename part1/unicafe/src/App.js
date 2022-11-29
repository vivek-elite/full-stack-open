import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  if(props.good==0 && props.neutral==0 && props.bad==0) {
    return (
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good+neutral+bad} />
          <StatisticLine text="average" value={((good*1) + (neutral*0) + (bad*(-1))) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={(good*1) / (good + neutral + bad) * 100 + " %"}  />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1);
  }
  const handleNeutral = () => {
    setNeutral(neutral+1);
  }
  const handleBad = () => {
    setBad(bad+1);
  }
  return (
    <div>
      <h2>give feeback</h2>
      <div>
        <button onClick={handleGood}>good</button> 
        <button onClick={handleNeutral}>neutral</button> 
        <button onClick={handleBad}>bad</button> 
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;