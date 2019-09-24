import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
    constructor(){
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

    clickBitRateHandler = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
    }

    clickResolutionHandler = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
        })
    }

    render(){
        return(
            <div>
                <label>{this.state.settings.bitrate}</label>
                <button className="bitrate" onClick={this.clickBitRateHandler}>Change bitrate</button>
                <label>{this.state.settings.video.resolution}</label>
                <button className="resolution" onClick={this.clickResolutionHandler}>Change resolution</button>
            </div>
        )
    }
}
