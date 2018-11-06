import Recorder from 'Recorder';
/**
 * Ayuda a la grabación de audio y obtención de una blob url
 */
export default class AudioRecorder {
    /**
     * 
     * @param {Callback} timerCallback 
     */
    constructor(timerCallback, confirmMediaAccess) {
        this.time = 0;
        this.recording = true;
        this.timerCallback = timerCallback;
        this.confirmMediaAccess = confirmMediaAccess;
        this.audioElement = document.createElement('audio');
        this.audioElement.onloadedmetadata = () => {
            this.audioElement.muted = true;
            this.audioElement.play();
        }
    }

    /**
     * @param {Callback} return Blob Url
     * @param {boolean} execute the callback or not
     */
    stop = (callback, save) => {
        this.recording = false;
        if (this.stream) {
            this.stream.getAudioTracks().forEach(track => {
                console.log('__BEFORE__',track);
                track.stop();
                track.enabled = false;
                console.log('__AFTER__',track);
            });
            this.stream.getVideoTracks().forEach(tracks => {
                tracks.stop();
            })
            this.rec.stop();
            (save) ? this.rec.exportWAV((blob) => {
                this.rec.clear();
                callback(URL.createObjectURL(blob));
            }) : this.rec.clear();
        }
    }

    pause = () => {
        if (this.stream) {
            this.audioElement.pause();
            this.rec.stop();
        }
    }

    resume = () => {
        if (this.stream) {
            this.audioElement.play();
            this.rec.record();
        }
    }

    /**
     * @param {Object} stream
     */
    record = stream => {
        (this.confirmMediaAccess) && this.confirmMediaAccess();
        this.stream = stream;
        var context = new (window.AudioContext || window.webkitAudioContext)();
        var source = context.createMediaStreamSource(this.stream);
        this.rec = new Recorder(source, {
            numChannels: 1,
        });
        this.rec.record();
        this.audioElement.srcObject = stream;
        (this.timerCallback) && this.recTime();
    }

    recTime() {
        setTimeout(() => {
            this.timerCallback(new Date(this.audioElement.currentTime*1000).toISOString().substr(14, 5));
            (this.recording) && this.recTime();
        }, 950);
    }

    twoDigitsFormat(date) {
        let minutes = date.getMinutes(), seconds = date.getSeconds();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return `${minutes}:${seconds}`
    }
}