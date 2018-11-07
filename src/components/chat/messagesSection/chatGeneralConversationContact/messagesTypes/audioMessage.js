import React, {Component} from 'react';
import {connect} from 'react-redux';

class AudioMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: '00:00',
            playing: false,
            currentPercent: '0',
        }
    }
    onChange = (e) => {
        this.audioElement.currentTime = (e.target.value* this.maxTime)/100 ;
    }
    onPlay = (e) => {
        this.audioElement.play();
        this.setState({ playing: true });
        this.maxTime = this.audioElement.duration;
    }
    onPause = () => {
        this.audioElement.pause();
        this.setState({ playing: false });
    }
    onTimeUpdate = (e) => {
        this.setState({
            currentTime: new Date(e.target.currentTime * 1000).toISOString().substr(14, 5),
            currentPercent: (e.target.currentTime * 100) / this.maxTime
        });
        this.seek.value = (e.target.currentTime * 100) / this.maxTime ;
    }
    render() {
        return (
            <div className="audio-message">
                {(!this.state.playing)
                    ? <img onClick={this.onPlay} src={this.props.play_icon} alt="" />
                    : <img onClick={this.onPause} src={this.props.pause_icon} alt="" />
                }
                <span>{(this.state.currentTime) && this.state.currentTime}</span>
                <div className="wrapper-seek">
                    <div className="seek-section">
                        <span style={{ width: `${this.state.currentPercent}%` }}></span>
                        <input disabled={true} ref={seek => { this.seek = seek }} onChange={this.onChange} type="range" min="0" max="100" defaultValue="0" />
                    </div>
                </div>

                <audio
                    onTimeUpdate={this.onTimeUpdate}
                    onEnded={() => {
                        this.setState({ playing: false });
                        this.audioElement.currentTime = 0
                    }}
                    ref={audio => { this.audioElement = audio }}
                    src={this.props.message.src}>
                </audio>
            </div>
        )
    }
}
export default AudioMessage = connect(state => ({
    play_icon: state.customizing.Images.play_icon,
    pause_icon: state.customizing.Images.pause_icon,
}))(AudioMessage);