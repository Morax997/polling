import { useState } from 'react'
import './App.css'
import { PollUnit } from "./components/PollUnit/PollUnit.jsx";

const data = [
  {
    id: 1,
    title: "What is your favorite season?",
    options: [
      {
        id: 1,
        label: "Spring",
      },
      {
        id: 2,
        label: "Summer",
      },
      {
        id: 3,
        label: "Fall",
      },
      {
        id: 4,
        label: "Winter",
      },
    ],
  },
  {
    id: 2,
    title: "What is your favorite weather?",
    options: [
      {
        id: 1,
        label: "Sunny",
      },
      {
        id: 2,
        label: "Windy",
      },
      {
        id: 3,
        label: "Rainy",
      },
      {
        id: 4,
        label: "Snowy",
      },
      {
        id: 5,
        label: "Cloudy",
      },
    ],
  },
];

const App = () => {
  return (
    <div className="app">
      <PollUnit pollData={data[1]}/>
    </div>
  )
}

export default App
