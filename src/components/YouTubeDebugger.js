// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  clickBitrateHandler = () => {
    this.setState({settings: {
        ...this.state.settings,
        bitrate: 12}})

    }

  clickRezHandler = () => {
    this.setState({settings: {
      ...this.state.settings,
      video: { resolution: '720p'}
      }
    })
  }

  render() {
    return(<div>
          <button className='bitrate' onClick={this.clickBitrateHandler}>bitrate</button>
          <button className='resolution' onClick={this.clickRezHandler}>resolution</button>
          </div>)
  }
}
