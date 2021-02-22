// import React from "react";

// import { Component } from "react";

// class Music extends React.Component {
//   state = {
//     play: false
//   }
//   audio = new Audio(this.props.url)

//   componentDidMount() {
//     audio.addEventListener('ended', () => this.setState({ play: false }));
//   }

//   componentWillUnmount() {
//     audio.removeEventListener('ended', () => this.setState({ play: false }));  
//   }

//   togglePlay = () => {
//     this.setState({ play: !this.state.play }, () => {
//       this.state.play ? this.audio.play() : this.audio.pause();
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
//       </div>
//     );
//   }
// }

// export default Music;

//************************************************************************************* */

import React, { useState, useEffect } from "react";

// const url = "https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3"
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;


// *********************************************************************************************8
// *********************************************************************************************

// import React from "react";
// import { Component } from "react";

// import ReactDOM from "react-dom";


// class PlaySound extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       play: false
//     };

//     this.url = "https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3";
//     this.audio = new Audio(this.url);
//     this.audio.addEventListener('ended', function () {
//       this.currentTime = 0;
//       this.play();
//     }, false);
//     this.togglePlay = this.togglePlay.bind(this);
//   }

//   togglePlay() {
//     const wasPlaying = this.state.play;
//     this.setState({
//       play: !wasPlaying
//     });

//     if (wasPlaying) {
//       this.audio.pause();
//     } else {
//       this.audio.play()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button
//           id="audioBtn"
//           onClick={this.togglePlay}> {this.state.play ? "Pause" : "Play"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<PlaySound />, document.getElementById("root"));

// export default Component