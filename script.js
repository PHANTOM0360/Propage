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
            }, 200); // 500 milliseconds delay
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

        // Play highlight audio with delay when the center button is clicked
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
        
        // Mute the background video during blackout
        if (backgroundVideo) {
            backgroundVideo.volume = 0;
        }

        // Stop highlight audio
        stopHighlightAudio();

        setTimeout(() => {
            document.body.classList.add('blackout');
        }, 2000); 
    });

    document.querySelector('.shape-1s').addEventListener('click', function() {
        const hiddenContent = document.querySelector('.hidden-content');
        const newScreen = document.querySelector('.new-screen');

        hiddenContent.classList.add('break-apart');

        setTimeout(() => {
            hiddenContent.style.display = 'none';
            newScreen.style.display = 'flex'; 
            backgroundMusic.play().catch(error => console.log('Background music failed to play:', error));
            
            // Ensure the previous background video is muted
            if (backgroundVideo) {
                backgroundVideo.volume = 0;
            }
            
            // Ensure the new background video is not muted
            if (newBackgroundVideo) {
                newBackgroundVideo.play().catch(error => console.log('New background video failed to play:', error));
                newBackgroundVideo.volume = 1;
            }

            // Stop highlight audio
            stopHighlightAudio();
        }, 1000); 
    });
});
