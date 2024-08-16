document.addEventListener('DOMContentLoaded', function() {
    const backgroundVideo = document.querySelector('.background-video');
    const newBackgroundVideo = document.querySelector('.new-background-video');
    const backgroundMusic = document.getElementById('background-music');
    const highlightAudio = document.getElementById('highlight-audio');

    function playHighlightAudio() {
        if (highlightAudio) {
            setTimeout(() => {
                highlightAudio.play().catch(error => console.log('Highlight audio failed to play:', error));
            }, 200); 
        }
    }

    function stopHighlightAudio() {
        if (highlightAudio) {
            highlightAudio.pause();
            highlightAudio.currentTime = 0;
        }
    }

    if (backgroundVideo) {
        backgroundVideo.play().catch(error => console.log('Background video failed to play:', error));
    }

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
        const textElement = document.querySelector('.text');
        const redRectangle = document.querySelector('.red-rectangle');
        const shape1 = document.querySelector('.shape-1');
        const shape2 = document.querySelector('.shape-2');
        const shape3 = document.querySelector('.shape-3');

        textElement.classList.add('fall-apart-1');
        redRectangle.classList.add('fall-apart-2');
        shape1.classList.add('fall-apart-3');
        shape2.classList.add('fall-apart-3');
        shape3.classList.add('fall-apart-3');
        
        if (backgroundVideo) {
            backgroundVideo.volume = 0;
        }

        stopHighlightAudio();

        let animationsCompleted = 0;
        function onAnimationEnd() {
            animationsCompleted++;
            if (animationsCompleted === 5) { 
                document.body.classList.add('blackout');

                setTimeout(() => {
                    // Create and style the hack message box
                    const hackBox = document.createElement('div');
                    hackBox.classList.add('hack-box');
                    hackBox.innerHTML = 'SIKEE!! answer is hacked. Answer is set to "Yes! I accept you"';

                    document.body.appendChild(hackBox);

                    // Create and play the hack video
                    const hackVideo = document.createElement('video');
                    hackVideo.src = 'hack.mp4';
                    hackVideo.autoplay = true;
                    hackVideo.muted = true;
                    hackVideo.classList.add('hack-video');
                    
                    document.body.appendChild(hackVideo);

                    hackVideo.addEventListener('ended', () => {
                        document.querySelector('.new-screen').style.display = 'flex';
                        hackVideo.remove();
                        hackBox.remove();
                    });
                }, 2000); // Delay to allow blackout effect to take place
            }
        }

        textElement.addEventListener('animationend', onAnimationEnd);
        redRectangle.addEventListener('animationend', onAnimationEnd);
        shape1.addEventListener('animationend', onAnimationEnd);
        shape2.addEventListener('animationend', onAnimationEnd);
        shape3.addEventListener('animationend', onAnimationEnd);
    });

    document.querySelector('.shape-1s').addEventListener('click', function() {
        const hiddenContent = document.querySelector('.hidden-content');
        const newScreen = document.querySelector('.new-screen');

        hiddenContent.classList.add('break-apart');

        setTimeout(() => {
            hiddenContent.style.display = 'none';
            newScreen.style.display = 'flex'; 
            backgroundMusic.play().catch(error => console.log('Background music failed to play:', error));
            
            if (backgroundVideo) {
                backgroundVideo.volume = 0;
            }
            
            if (newBackgroundVideo) {
                newBackgroundVideo.play().catch(error => console.log('New background video failed to play:', error));
                newBackgroundVideo.volume = 1;
            }

            stopHighlightAudio();
        }, 1000); 
    });
});
