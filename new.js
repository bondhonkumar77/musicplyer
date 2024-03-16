document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const thumbnail = document.querySelector('.thumbnail');
    const songTitle = document.querySelector('.song-title');
    const navBar = document.getElementById('navBar');
    const songList = document.getElementById('songList');

    const songs = [
         { title: 'Downtown', src: './Solstice/Downtown.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Flight', src: './Solstice/Flight.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Moirse', src: './Solstice/Moires.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Riptide', src: './Solstice/Riptide.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Satellites', src: './Solstice/Satellites.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Snowland', src: './Solstice/Snowland.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'The Woods', src: './Solstice/The Woods.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Ziva', src: './Solstice/Ziva.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Safira', src: './Solstice/Safira.mp3', thumbnail: './Solstice/Folder.jpg' },
        
        // Add more songs as needed
    ];

    // Populate the navigation bar with dots
    songs.forEach((song, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dots');
        dot.setAttribute('data-index', index);
        navBar.appendChild(dot);
    });

    // Event listener to play a song when a dot is clicked
    navBar.addEventListener('click', function(event) {
        if (event.target.classList.contains('dots')) {
            const index = event.target.getAttribute('data-index');
            const selectedSong = songs[index];
            audioPlayer.src = selectedSong.src;
            thumbnail.style.backgroundImage = `url('${selectedSong.thumbnail}')`;
            songTitle.textContent = selectedSong.title;
            audioPlayer.play();
        }
    });

    // Event listener to show full song list when clicking the three dots
    navBar.addEventListener('click', function(event) {
        if (event.target.classList.contains('dots')) {
            songList.innerHTML = '';
            songs.forEach((song, index) => {
                const listItem = document.createElement('div');
                listItem.textContent = `${song.title} (${song.duration})`;
                songList.appendChild(listItem);
            });
            songList.classList.toggle('active');
        }
    });

    // Event listener to update song title when a song starts playing
    audioPlayer.addEventListener('play', function() {
        const currentIndex = Number(audioPlayer.getAttribute('data-current-index'));
        const currentSong = songs[currentIndex];
        songTitle.textContent = currentSong.title;
    });
});

