import React, { Component } from 'react';

class YouTubeDebugger extends Component {
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

    handleBitrateClick = () => {
        this.setState({
            ...this.state,
            settings: {
                bitrate: 12,
                video: {
                    ...this.state.settings.video
                }
            }
        });
    }

    handleResClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        });
    }

    render() {
        return(
            <div className="youtube-debugger">
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResClick}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger