import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setClicks] = useState([good, neutral, bad])
  //button for good, bad, neutral
  //statistics that displays values
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text={"good"}></Button>
      <Button handleClick={() => setNeutral(neutral+1)} text={"neutral"}></Button>
      <Button handleClick={() => setBad(bad+1)} text={"bad"}></Button>

      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>

    </div>
  )
}

export default App