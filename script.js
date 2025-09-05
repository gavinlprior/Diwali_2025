document.addEventListener('DOMContentLoaded', () => {
    const soundButtons = document.querySelectorAll('.sound-button');
    const langButtons = document.querySelectorAll('.lang-button');
    const headerLinks = document.querySelectorAll('header a');
    const languages = {
        'en': {
            'audio01': 'Lord Ram',
            'audio02': 'Mata Sita',
            'audio03': 'Hanumanji',
            'audio04': 'Ganeshji',
            'audio05': 'Laxmiji',
            'audio06': 'Ravana',
            'audio07': 'Garud Ji',
            'audio08': 'Harminder',
            'audio09': 'Big Diva',
            'fullStory': 'The Story of Diwali',
        },
        'hi': {
            'audio01': 'राम',
            'audio02': 'मा सीता',
            'audio03': 'हनुमानजी',
            'audio04': 'गणेशजी',
            'audio05': 'लक्ष्मीजी',
            'audio06': 'रावण',
            'audio07': 'गरुड़ जी',
            'audio08': 'हरमिंदर',
            'audio09': 'बिग दिवा',
            'fullStory': 'दीपावली की कहानी',
        },
        'guj': {
            'audio01': 'Lord Ram',
            'audio02': 'Mata Sita',
            'audio03': 'Hanumanji',
            'audio04': 'Ganeshji',
            'audio05': 'Laxmiji',
            'audio06': 'Ravana',
            'audio07': 'Garud Ji',
            'audio08': 'Harminder',
            'audio09': 'Big Diva',
            'fullStory': 'The Story of Diwali',
        },
    };

    let currentlyPlayingAudio = null;

    function stopCurrentAudio() {
        if (currentlyPlayingAudio) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.currentTime = 0;
            const playingButton = document.querySelector('.sound-button.playing');
            if (playingButton) {
                playingButton.classList.remove('playing', 'pressed', 'highlight');
            }
            currentlyPlayingAudio = null;
            document.body.classList.remove('audio-playing');
        }
    }

    // Language button click handler
    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            // Block language changes while a sound is playing
            if (!currentlyPlayingAudio) {
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const selectedLang = button.dataset.lang;
                updateLanguage(selectedLang);
            }
        });
    });

    // Handle all header links
    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            stopCurrentAudio();
        });
    });

    // Sound button click handler
    soundButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const audioId = button.dataset.audio;
            const audioElement = document.getElementById(audioId);

            // If the same audio is playing, stop it
            if (currentlyPlayingAudio === audioElement) {
                stopCurrentAudio();
            } else {
                // If another audio is playing, stop it first
                stopCurrentAudio();
                
                // Start the new audio
                currentlyPlayingAudio = audioElement;
                audioElement.play();

                // Add classes to the current button
                button.classList.add('playing', 'pressed', 'highlight');
                document.body.classList.add('audio-playing');
                
                // Event listener to reset classes when audio ends
                audioElement.addEventListener('ended', () => {
                    stopCurrentAudio();
                }, { once: true });
            }
        });
    });

    function updateLanguage(lang) {
        soundButtons.forEach(button => {
            const audioId = button.dataset.audio;

            // Update the text
            const newText = languages[lang][audioId];
            if (newText) {
                button.querySelector('span').textContent = newText;
            }

            // Update the audio source
            const audioElement = document.getElementById(audioId);
            const selectedSource = audioElement.querySelector(`source[data-lang="${lang}"]`);

            if (selectedSource) {
                audioElement.src = selectedSource.src;
                audioElement.load();
            }
        });
    }

    updateLanguage('en');
});