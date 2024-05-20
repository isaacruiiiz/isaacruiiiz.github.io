const video = document.getElementById('myVideo');
        const subtitles = document.getElementById('subtitles');
        const timeIndicator = document.getElementById('time-indicator');
        const playPauseButton = document.getElementById('playPauseButton');
        const maxDuration = 85;

        function togglePlayPause() {
            if (video.paused) {
                video.play();
                playPauseButton.textContent = 'Pause';
            } else {
                video.pause();
                playPauseButton.textContent = 'Play';
            }
        }

        video.addEventListener('click', togglePlayPause);
        playPauseButton.addEventListener('click', togglePlayPause);

        function showSubtitles(text) {
            subtitles.textContent = text;
        }

        video.autoplay = true;

        video.addEventListener('timeupdate', function() {
            const currentTime = Math.floor(video.currentTime);
            timeIndicator.textContent = `${currentTime}s`;

            if (currentTime >= maxDuration) {
              video.pause();
              video.currentTime = 0; 
              playPauseButton.textContent = 'Reproducir';
            }

            switch (currentTime) {
                case 0:
                  showSubtitles('This is the main page of this project');
                  break;
                case 5:
                  showSubtitles('Here are the packages we have reserved');
                  break;
                case 10:
                  showSubtitles('And here is the action of selecting a person to deliver it to');
                  break;
                case 20:
                  showSubtitles('You can select the package you want to deliver');
                  break;
                case 25:
                  showSubtitles('And a delivery confirmation message will appear');
                  break;
                case 30:
                  showSubtitles('Now we will see how to reserve the package');
                  break;
                case 65:
                  showSubtitles('This is another page of the project');
                  break;
                case 70:
                  showSubtitles('Where you can see the people we have delivered to the most');
                  break;
                case 75:
                  showSubtitles('And finally you can see the user profile');
                  break;
                default:
                  break;
              }              
        });

        window.addEventListener('load', () => {
            playPauseButton.textContent = video.paused ? 'Play' : 'Pause';
        });