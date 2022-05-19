import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleClick() {
    let sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    this.props.callback(this.props.id);
  }
  handleKeyDown(event) {
    let container = document.getElementById(event.keyCode);
    let sound = container.getElementsByTagName("audio")[0];
    sound.play();
    this.props.callback(this.props.id);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  render() {
    return (
      <button
        className="drum-pad"
        onKeyDown={this.handleClick}
        onClick={this.handleClick}
        id={this.props.KeyCode}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.src}
        ></audio>
        {this.props.keyTrigger}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(msg) {
    this.setState({
      msg: msg,
    });
  }
  render() {
    return (
      <div id="drum-machine">
        {bankOne.map((el) => {
          return (
            <DrumPad
              keyTrigger={el.keyTrigger}
              src={el.url}
              id={el.id}
              KeyCode={el.keyCode}
              callback={this.handleClick}
            />
          );
        })}
        <a id="display">{this.state.msg}</a>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
