document.addEventListener('DOMContentLoaded', () => {
    const soundButtons = document.querySelectorAll('.sound-button');
    const langButtons = document.querySelectorAll('.lang-button');
    const languages = {
        'en': {
            'audio01': 'Lord Ram',
            'audio02': 'Mata Sita',
            'audio03': 'Hanumanji',
            'audio04': 'Jatayu',
            'audio05': 'Laxmiji',
            'audio06': 'Ravana',
            'audio07': 'Lakshmana',
            'audio08': 'Harminder',
            'audio09': 'Diya',
            'fullStory': 'The Story of Diwali',
        },
        'hi': {
            'audio01': 'राम',
            'audio02': 'मा सीता',
            'audio03': 'हनुमानजी',
            'audio04': 'जटायु',
            'audio05': 'लक्ष्मीजी',
            'audio06': 'रावण',
            'audio07': 'लक्ष्मण',
            'audio08': 'हरमिंदर',
            'audio09': 'दीया',
            'fullStory': 'दीपावली की कहानी',
        },
        'guj': {
            'audio01': 'Lord Ram',
            'audio02': 'Mata Sita',
            'audio03': 'Hanumanji',
            'audio04': 'Jatayu',
            'audio05': 'Laxmiji',
            'audio06': 'Ravana',
            'audio07': 'Lakshmana',
            'audio08': 'Harminder',
            'audio09': 'Diya',
            'fullStory': 'The Story of Diwali',
        },
    };

    let isPlaying = false;

    // Language button click handler
    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            // Block language changes while a sound is playing
            if (!isPlaying) {
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const selectedLang = button.dataset.lang;
                updateLanguage(selectedLang);
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

    // Sound button click handler
    soundButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const audioId = button.dataset.audio;
            const audioElement = document.getElementById(audioId);
            
            // Check if audio is already playing
            if (isPlaying) {
                // If this is the button currently playing, stop it
                if (button.classList.contains('playing')) {
                    audioElement.pause();
                    audioElement.currentTime = 0;
                    isPlaying = false;
                    button.classList.remove('pressed', 'highlight', 'playing');
                    document.body.classList.remove('audio-playing');
                }
            } else {
                // If no audio is playing, start this one
                isPlaying = true;
                document.body.classList.add('audio-playing');
                
                button.classList.add('pressed', 'highlight', 'playing');
                audioElement.play();

                audioElement.addEventListener('ended', () => {
                    button.classList.remove('pressed', 'highlight', 'playing');
                    isPlaying = false;
                    document.body.classList.remove('audio-playing');
                }, { once: true });
            }
        });
    });

    updateLanguage('en');
});