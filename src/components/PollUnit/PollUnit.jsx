import "./PollUnit.css";

const PollUnit = () => {
  return <div className="pollUnit">
    <div className="pollHeader">
      Vote Below
    </div>
    <div className="pollContainer">
      <div className="pollTitle">
        What is your favorite season?
      </div>
      <div className="pollBars">
        <div className="pollOption">
          <input type="radio" checked={true}/>
          Spring
        </div>
        <div className="pollOption">
          <input type="radio" checked={true}/>
          Summer
        </div>
        <div className="pollOption">
          <input type="radio" checked={true}/>
          Fall
        </div>
        <div className="pollOption">
          <input type="radio" checked={true}/>
          Winter
        </div>
      </div>
    </div>
    <button>Vote!</button>
  </div>
}

export {
  PollUnit,
}