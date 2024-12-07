const songs = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    year: 2017,
    image: "images/song2.png",
  },
  {
    title: "The A Team",
    artist: "Ed Sheeran",
    album: "+",
    year: 2011,
    image: "images/song5.jpg",
  },
  {
    title: "Maroon",
    artist: "Taylor Swift",
    album: "Midnights",
    year: 2022,
    image: "images/song6.png",
  },
  {
    title: "Lavender Haze",
    artist: "Taylor Swift",
    album: "Midnights",
    year: 2022,
    image: "images/song6.png",
  },
  {
    title: "Snow on the Beach",
    artist: "Taylor Swift",
    album: "Midnights",
    year: 2022,
    image: "images/song6.png",
  },
  {
    title: "Sweet Nothing",
    artist: "Taylor Swift",
    album: "Midnights",
    year: 2022,
    image: "images/song6.png",
  },
  {
    title: "Star Lost",
    artist: "Stray Kids",
    album: "NoEasy",
    year: 2021,
    image: "images/song7.jpeg",
  },
  {
    title: "Silent Cry",
    artist: "Stray Kids",
    album: "NoEasy",
    year: 2021,
    image: "images/song7.jpeg",
  },
  {
    title: "Dil Mere",
    artist: "The Local Train",
    album: "Aalas Ka Pedh",
    year: 2015,
    image: "images/song8.png",
  },
  {
    title: "Choo Lo",
    artist: "The Local Train",
    album: "Aalas Ka Pedh",
    year: 2015,
    image: "images/song8.png",
  },
  {
    title: "Ghost of You",
    artist: "5 Seconds of Summer",
    album: "Youngblood",
    year: 2018,
    image: "images/song9.jpg",
  },
  {
    title: "Lie To Me",
    artist: "5 Seconds of Summer",
    album: "Youngblood",
    year: 2018,
    image: "images/song9.jpg",
  },
  {
    title: "Valentine",
    artist: "5 Seconds of Summer",
    album: "Youngblood",
    year: 2018,
    image: "images/song9.jpg",
  },
  {
    title: "Youngblood",
    artist: "5 Seconds of Summer",
    album: "Youngblood",
    year: 2018,
    image: "images/song9.jpg",
  },
  {
    title: "Baarishein",
    artist: "Anuv Jain",
    album: "<Single>",
    year: 2018,
    image: "images/song10.jpeg",
  },
  {
    title: "Husn",
    artist: "Anuv Jain",
    album: "<Single>",
    year: 2023,
    image: "images/song11.jpeg",
  },
  {
    title: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    album: "<Single>",
    year: 2024,
    image: "images/song12.jpeg",
  },
];

function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  return songs[randomIndex];
}

function displayRandomSong() {
  const song = getRandomSong();

  const songInfo = document.createElement("div");
  songInfo.classList.add("song-info");

  const songTitle = document.createElement("p");
  songTitle.textContent = `Title: ${song.title}`;

  const songArtist = document.createElement("p");
  songArtist.textContent = `Artist: ${song.artist}`;

  const songAlbum = document.createElement("p");
  songAlbum.textContent = `Album: ${song.album}`;

  const songYear = document.createElement("p");
  songYear.textContent = `Year: ${song.year}`;

  songInfo.appendChild(songTitle);
  songInfo.appendChild(songArtist);
  songInfo.appendChild(songAlbum);
  songInfo.appendChild(songYear);

  const songImage = document.createElement("div");
  songImage.classList.add("song-image");

  const imageElement = document.createElement("img");
  imageElement.src = song.image;
  imageElement.alt = `${song.title} cover image`;

  songImage.appendChild(imageElement);

  const container = document.getElementById("song");
  container.innerHTML = "";

  container.appendChild(songImage);
  container.appendChild(songInfo);
}
