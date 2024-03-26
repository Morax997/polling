import "./PollUnit.css";
import {useState} from "react";

const PollUnit = (props) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const clearOption = () => {
    setSelectedOptionId(null);
  }

  return <div className="pollUnit">
    <div className="pollHeader">
      Vote Below!
    </div>
    <div className="pollContainer">
      <div className="pollTitle">
        {props.pollData.title}
      </div>
      <div className="pollBars">
        {
          props.pollData.options.map(option => {
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
    <div className="buttonsContainer">
    <button onClick={() => {alert("You Voted " + selectedOptionId)}} className="voteButton">Vote!</button>
    <button onClick={clearOption} className="clearButton">Clear Selection.</button>
    </div>
  </div>
}

export {
  PollUnit,
}