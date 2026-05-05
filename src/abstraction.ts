// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("Playing music...");
//     }
//     pause(): void {
//         console.log("Pausing music...");
//     }
//     stop(): void {
//         console.log("Stopping music...");
//     }
// }

// const myMusicPlayer = new MusicPlayer();
// myMusicPlayer.play();
// myMusicPlayer.pause();
// myMusicPlayer.stop();

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log("Playing music...");
    }
    pause(): void {
        console.log("Pausing music...");
    }
    stop(): void {
        console.log("Stopping music...");
    }
}

const myMusicPlayer = new MusicPlayer();
myMusicPlayer.play();
myMusicPlayer.pause();
myMusicPlayer.stop();