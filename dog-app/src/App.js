import React from 'react';
import './App.css';
import Item from './Item.jsx';
import dogSound from './dog.mp3';


class App extends React.Component {
constructor (props) {
  super(props);
  this.dogSoundRef = React.createRef();
}
  state = {
    randomIndex: 0,
    counter: 0
  }

  componentDidMount() {
    setInterval(this.setRandomIndex, 1000);
  }

  setRandomIndex = () => {
    this.setState({
      randomIndex: Math.floor(Math.random() * 9)
    })
  }

  incCounter = () => {
    this.dogSoundRef.current.currentTime = 0;
    this.dogSoundRef.current.play();
    this.setState({
      counter: this.state.counter + 1
    })
  }

  item = [0, 1, 2, 3, 4, 5, 6, 7, 8];


  render = () => {
    return (
      <div className="wrapper">
        <audio src={dogSound} ref={this.dogSoundRef}></audio>
        {this.item.map(i =>
          <Item key={i} index={i} randomIndex={this.state.randomIndex}
            onClickHandler={this.incCounter} />)}
        <div className='counter'>{this.state.counter}</div>
      </div>
    );
  }
}


export default App;
