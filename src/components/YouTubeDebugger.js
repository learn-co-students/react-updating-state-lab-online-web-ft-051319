// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    };
  }

  bitrateClick = () => {
      this.setState({
          settings: {
              ...this.state.settings,
              bitrate: 12
          }
      })
  }

  resClick = () => {
      this.setState({
          settings: {
              ...this.state.settings,
              video: {
                  resolution: '720p'
              }
          }
      })
  }

  render() {
    return (
        <div>
        <button className="bitrate" onClick={this.bitrateClick}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.resClick}>{this.state.settings.video.resolution}</button>
        </div>
    );
  }
}

export default YouTubeDebugger;
