import React from "react";
import Music from "../assets/SpeakerIcon.jpg";
import SpeakerOn from "../assets/SoundOn.jpg";
import SpeakerOff from "../assets/SoundOff.jpg";

class PlaySound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false
    };

    this.url = "https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3";
    this.audio = new Audio(this.url);
    this.audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const wasPlaying = this.state.play;
    this.setState({
      play: !wasPlaying
    });

    if (wasPlaying) {
      this.audio.pause();
    } else {
      this.audio.play()
    }
  }

  render() {
    return (
     <div>
        <button
          id="audioBtn"
          onClick={this.togglePlay}><img src={Music} style={{width:"50px", hight:"70px"}}/></button> 
          {this.state.play ? <img src={SpeakerOn} style={{width:"40px", hight:"70px"}}/> : <img src={SpeakerOff} style={{width:"30px", hight:"30px"}}/>}

          </div>   
        
      );
    }
  }

  // ReactDOM.render(<PlaySound />, document.getElementById("root"));

  export default PlaySound;

