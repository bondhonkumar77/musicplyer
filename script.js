document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
    
    // Array of song titles and source links
    const songs = [
        { title: 'Song 1', src: 'https://drive.google.com/file/d/1mZbc0JZ5zWSIGeQ0oMOB6JfeLwknHPcc/view?usp=drive_link/preview' },
        { title: 'Song 2', src: 'Downtown.mp3' },
        { title: 'Song 3', src: 'https://example.com/song3.mp3' },
        { title: 'Song 4', src: 'https://example.com/song4.mp3' },
        { title: 'Song 5', src: 'https://example.com/song5.mp3' },
        { title: 'Song 6', src: 'https://example.com/song6.mp3' },
        { title: 'Song 7', src: 'https://example.com/song7.mp3' },
        { title: 'Song 8', src: 'https://example.com/song8.mp3' },
        { title: 'Song 9', src: 'https://example.com/song9.mp3' },
        { title: 'Song 10', src: 'https://example.com/song10.mp3' }
    ];

    // Populate playlist
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.addEventListener('click', () => {
            audioPlayer.src = song.src;
            audioPlayer.play();
        });
        playlist.appendChild(listItem);
    });
});
