// Replace 'YOUR_GOOGLE_DRIVE_FOLDER_LINK' with the shared link to your Google Drive folder
const folderLink = 'https://drive.google.com/drive/folders/1n2f7Fu8u3VT7clI7AlkZTnS2tyEB66CR?usp=sharing';

// Function to fetch files from Google Drive folder
async function getFilesFromFolder(folderLink) {
    const response = await fetch(folderLink);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const links = Array.from(doc.links);
    const audioFiles = links.filter(link => link.href.endsWith('.mp3'));
    return audioFiles.map(file => ({
        name: file.innerText,
        src: file.href
    }));
}

// Function to initialize the playlist
async function initPlaylist() {
    const playlist = document.getElementById('playlist');
    const files = await getFilesFromFolder(folderLink);
    
    files.forEach(file => {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        listItem.addEventListener('click', () => {
            document.getElementById('audioPlayer').src = file.src;
            document.getElementById('audioPlayer').play();
        });
        playlist.appendChild(listItem);
    });
}

// Initialize the playlist
initPlaylist();
