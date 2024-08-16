document.addEventListener('DOMContentLoaded', function() {
    const backgroundVideo = document.querySelector('.background-video');
    const newBackgroundVideo = document.querySelector('.new-background-video');
    const backgroundMusic = document.getElementById('background-music');
    const highlightAudio = document.getElementById('highlight-audio');

    // Function to handle audio playback with delay
    function playHighlightAudio() {
        if (highlightAudio) {
            setTimeout(() => {
                highlightAudio.play().catch(error => console.log('Highlight audio failed to play:', error));
            }, 200); // 200 milliseconds delay
        }
    }

    // Function to stop highlight audio
    function stopHighlightAudio() {
        if (highlightAudio) {
            highlightAudio.pause();
            highlightAudio.currentTime = 0;
        }
    }

    // Play the background video when the page loads
    if (backgroundVideo) {
        backgroundVideo.play().catch(error => console.log('Background video failed to play:', error));
    }

    // Play the highlight audio and transition to hidden content when the center button is clicked
    document.querySelector('.center-button').addEventListener('click', function() {
        const introScreen = document.querySelector('.intro-screen');
        const hiddenContent = document.querySelector('.hidden-content');

        playHighlightAudio();
        introScreen.classList.add('zoomed');

        setTimeout(() => {
            introScreen.style.display = 'none';
            hiddenContent.classList.add('show');
        }, 1000); 
    });

    document.querySelector('.shape-2s').addEventListener('click', function() {
        document.querySelector('.text').classList.add('fall-apart-1');
        document.querySelector('.red-rectangle').classList.add('fall-apart-2');
        document.querySelector('.shape-1').classList.add('fall-apart-3');
        document.querySelector('.shape-2').classList.add('fall-apart-3');
        document.querySelector('.shape-3').classList.add('fall-apart-3');
        
        if (backgroundVideo) {
            backgroundVideo.volume = 0;
        }

        stopHighlightAudio();

        setTimeout(() => {
            document.body.classList.add('blackout');
            showSadFace(); // Show the sad face after blackout
        }, 2000); 
    });

    function showSadFace() {
        const sadFace = document.querySelector('.sad-face');
        sadFace.classList.add('show');
        
        setTimeout(() => {
            sadFace.classList.add('fade-out');

            setTimeout(() => {
                sadFace.style.display = 'none';
                showWaitMessage();
            }, 1000); // Fade out duration
        }, 1500); // Display sad face for 1.5 seconds
    }

    function showWaitMessage() {
        const waitMessage = document.querySelector('.wait-message');
        waitMessage.classList.add('show');

        setTimeout(() => {
            document.body.classList.add('blackout-again');
            waitMessage.classList.add('fade-out');

            setTimeout(() => {
                waitMessage.style.display = 'none';
                playHackSequence();
            }, 1000); // Fade out duration
        }, 2000); // Display wait message for 2 seconds
    }

    function playHackSequence() {
        const hackMessage = document.querySelector('.hack-message');
        const hackVideo = document.querySelector('.hack-video');

        hackVideo.play().catch(error => console.log('Hack video failed to play:', error));
        hackMessage.classList.add('show');

        setTimeout(() => {
            transitionToNewScreen();
        }, 3000); // Display hack message for 3 seconds
    }

    function transitionToNewScreen() {
        const hiddenContent = document.querySelector('.hidden-content');
        const newScreen = document.querySelector('.new-screen');
        
        hiddenContent.classList.add('break-apart');

        setTimeout(() => {
            hiddenContent.style.display = 'none';
            newScreen.style.display = 'flex'; 
            backgroundMusic.play().catch(error => console.log('Background music failed to play:', error));
            
            if (newBackgroundVideo) {
                newBackgroundVideo.play().catch(error => console.log('New background video failed to play:', error));
                newBackgroundVideo.volume = 1;
            }

            stopHighlightAudio();
        }, 1000); 
    }

    document.querySelector('.shape-1s').addEventListener('click', function() {
        transitionToNewScreen();
    });
});
