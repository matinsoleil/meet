import Recorder from 'Recorder';
/**
 * Ayuda a la grabación de audio y obtención de una blob url
 */
export default class AudioRecorder {
    /**
     * 
     * @param {Callback} timerCallback 
     */
    constructor(timerCallback) {
        this.time = 0;
        this.recording = true;
        this.timerCallback = timerCallback;
    }

    /**
     * @param {Callback} return Blob Url
     * @param {boolean} execute the callback or not
     */
    stop = (callback, save) => {
        this.recording = false;
        if (this.stream) {
            this.stream.getAudioTracks().forEach(track => {
                track.stop();
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

    /**
     * @param {Object} stream
     */
    record = stream => {
        this.stream = stream;
        var context = new (window.AudioContext || window.webkitAudioContext)();
        (this.timerCallback) && this.recTime(() => {
            this.time = Date.now();
        });
        var source = context.createMediaStreamSource(this.stream);
        this.rec = new Recorder(source, { numChannels: 1 });
        this.rec.record();
    }

    recTime(init) {
        (init) && init();
        setTimeout(() => {
            let tempTime = Date.now();
            this.timerCallback(this.twoDigitsFormat(new Date(tempTime - this.time)));
            (this.recording) && this.recTime();
        }, 1000);
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