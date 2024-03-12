import "./PollUnit.css";
import {useState} from "react";

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
];

const PollUnit = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  return <div className="pollUnit">
    <div className="pollHeader">
      Vote Below
    </div>
    <div className="pollContainer">
      <div className="pollTitle">
        {data[0].title}
      </div>
      <div className="pollBars">
        {
          data[0].options.map(option => {
            return <div
              key={option.id}
              className="pollOption"
            >
              <input
                type="radio"
                checked={selectedOptionId === option.id}
                onClick={() => {setSelectedOptionId(option.id)}}
              />
              {option.label}
            </div>
          })
        }
      </div>
    </div>
    <button>Vote!</button>
  </div>
}

export {
  PollUnit,
}