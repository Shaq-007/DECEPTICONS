import React, { Component } from "react"

export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src="https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3"></source>
        </audio>
      </div>
    )
  }
}