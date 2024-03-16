document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const thumbnail = document.querySelector('.thumbnail');
    const playlist = document.getElementById('playlist');

    // Define an array of songs with their titles and source paths
    const songs = [
        { title: 'Downtown', src: './Solstice/Downtown.mp3', thumbnail: './Solstice/Folder.jpg' },
        { title: 'Song 2', src: 'path_to_song2.mp3', thumbnail: 'thumbnail2.jpg' },
              { title: 'Flight.', src: './Solstice/Flight.mp3', thumbnail: './Solstice/Folder.jpg' },
              { title: 'Downtown', src: './Solstice/Downtown.mp3', thumbnail: './Solstice/Folder.jpg' },
              { title: 'Downtown', src: './Solstice/Downtown.mp3', thumbnail: './Solstice/Folder.jpg' },
        // Add more songs as needed
    ];

    // Populate the playlist
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.setAttribute('data-src', song.src);
        listItem.setAttribute('data-thumbnail', song.thumbnail);
        playlist.appendChild(listItem);
    });

    // Add event listener to each playlist item
    playlist.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const src = event.target.getAttribute('data-src');
            const thumbnailSrc = event.target.getAttribute('data-thumbnail');
            audioPlayer.src = src;
            thumbnail.style.backgroundImage = `url('${thumbnailSrc}')`;
            audioPlayer.play();
        }
    });
});
