import React from 'react';
import Sound from 'react-sound';

class MyComponentWithSound extends React.Component {
    render() {
        return (
          <Sound
            url="https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
      }
}

export default MyComponentWithSound