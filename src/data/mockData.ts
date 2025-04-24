
export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Album {
  id: string;
  title: string;
  artistId: string;
  artist: string;
  imageUrl: string;
  releaseYear: number;
  tracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  artistId: string;
  artist: string;
  albumId: string;
  album: string;
  duration: number;
  imageUrl: string;
  audioUrl: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdBy: string;
  tracks: Track[];
}

export const artists: Artist[] = [
  {
    id: "artist1",
    name: "Lunar Waves",
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format",
  },
  {
    id: "artist2",
    name: "Electric Pulse",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500&auto=format",
  },
  {
    id: "artist3",
    name: "Stellar Echo",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format",
  },
  {
    id: "artist4",
    name: "Neon Dreams",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format",
  },
  {
    id: "artist5",
    name: "Midnight Voyage",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format",
  },
];

export const albums: Album[] = [
  {
    id: "album1",
    title: "Cosmic Journey",
    artistId: "artist1",
    artist: "Lunar Waves",
    imageUrl: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&auto=format",
    releaseYear: 2023,
    tracks: [],
  },
  {
    id: "album2",
    title: "Electric Dreams",
    artistId: "artist2",
    artist: "Electric Pulse",
    imageUrl: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=500&auto=format",
    releaseYear: 2022,
    tracks: [],
  },
  {
    id: "album3",
    title: "Astral Horizons",
    artistId: "artist3",
    artist: "Stellar Echo",
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format",
    releaseYear: 2023,
    tracks: [],
  },
  {
    id: "album4",
    title: "Neon City Lights",
    artistId: "artist4",
    artist: "Neon Dreams",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format",
    releaseYear: 2022,
    tracks: [],
  },
  {
    id: "album5",
    title: "Midnight Voyage",
    artistId: "artist5",
    artist: "Midnight Voyage",
    imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=500&auto=format",
    releaseYear: 2023,
    tracks: [],
  },
];

// Create the tracks array and explicitly export it
export const tracks: Track[] = [
  // Album 1 tracks
  {
    id: "track1",
    title: "Cosmic Overture",
    artistId: "artist1",
    artist: "Lunar Waves",
    albumId: "album1",
    album: "Cosmic Journey",
    duration: 215, // 3:35
    imageUrl: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
  },
  {
    id: "track2",
    title: "Stellar Drift",
    artistId: "artist1",
    artist: "Lunar Waves",
    albumId: "album1",
    album: "Cosmic Journey",
    duration: 184, // 3:04
    imageUrl: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-621.mp3",
  },
  
  // Album 2 tracks
  {
    id: "track3",
    title: "Electric Sunset",
    artistId: "artist2",
    artist: "Electric Pulse",
    albumId: "album2",
    album: "Electric Dreams",
    duration: 247, // 4:07
    imageUrl: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3",
  },
  {
    id: "track4",
    title: "Neon Pulse",
    artistId: "artist2",
    artist: "Electric Pulse",
    albumId: "album2",
    album: "Electric Dreams",
    duration: 226, // 3:46
    imageUrl: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-c-major-movement-923.mp3",
  },
  
  // Album 3 tracks
  {
    id: "track5",
    title: "Horizon Line",
    artistId: "artist3",
    artist: "Stellar Echo",
    albumId: "album3",
    album: "Astral Horizons",
    duration: 198, // 3:18
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
  },
  {
    id: "track6",
    title: "Echo Chamber",
    artistId: "artist3",
    artist: "Stellar Echo",
    albumId: "album3",
    album: "Astral Horizons",
    duration: 234, // 3:54
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
  },
  
  // Album 4 tracks
  {
    id: "track7",
    title: "City Lights",
    artistId: "artist4",
    artist: "Neon Dreams",
    albumId: "album4",
    album: "Neon City Lights",
    duration: 217, // 3:37
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-trip-hop-vibes-149.mp3",
  },
  {
    id: "track8",
    title: "Neon Rain",
    artistId: "artist4",
    artist: "Neon Dreams",
    albumId: "album4",
    album: "Neon City Lights",
    duration: 193, // 3:13
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
  },
  
  // Album 5 tracks
  {
    id: "track9",
    title: "Midnight Journey",
    artistId: "artist5",
    artist: "Midnight Voyage",
    albumId: "album5",
    album: "Midnight Voyage",
    duration: 228, // 3:48
    imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
  },
  {
    id: "track10",
    title: "Starry Voyage",
    artistId: "artist5",
    artist: "Midnight Voyage",
    albumId: "album5",
    album: "Midnight Voyage",
    duration: 240, // 4:00
    imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=500&auto=format",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3",
  },
];

// Assign tracks to their albums
albums.forEach(album => {
  album.tracks = tracks.filter(track => track.albumId === album.id);
});

export const playlists: Playlist[] = [
  {
    id: "playlist1",
    title: "Chill Vibes",
    description: "Relaxing tunes for your downtime",
    imageUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&auto=format",
    createdBy: "SpotifyAdvance",
    tracks: [tracks[0], tracks[2], tracks[5], tracks[8]]
  },
  {
    id: "playlist2",
    title: "Workout Mix",
    description: "High energy tracks for your fitness routine",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format",
    createdBy: "SpotifyAdvance",
    tracks: [tracks[1], tracks[3], tracks[6], tracks[9]]
  },
  {
    id: "playlist3",
    title: "Focus Flow",
    description: "Concentration-enhancing instrumentals",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format",
    createdBy: "SpotifyAdvance",
    tracks: [tracks[4], tracks[7], tracks[0], tracks[5]]
  },
  {
    id: "playlist4",
    title: "Late Night Drive",
    description: "Atmospheric tracks for night-time journeys",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format",
    createdBy: "SpotifyAdvance",
    tracks: [tracks[8], tracks[9], tracks[2], tracks[7]]
  }
];

// Featured content
export const featuredContent = {
  playlists: [playlists[0], playlists[3]],
  albums: [albums[0], albums[2], albums[4]],
  artists: [artists[0], artists[2], artists[4]],
};

// For the "Browse All" section
export const categories = [
  { id: "cat1", name: "Hip-Hop", imageUrl: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=500&auto=format" },
  { id: "cat2", name: "Electronic", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format" },
  { id: "cat3", name: "Ambient", imageUrl: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=500&auto=format" },
  { id: "cat4", name: "Jazz", imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&auto=format" },
  { id: "cat5", name: "Rock", imageUrl: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=500&auto=format" },
  { id: "cat6", name: "Indie", imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format" },
];

// Recently played
export const recentlyPlayed = tracks.slice(0, 5);

// New releases
export const newReleases = [albums[0], albums[2], albums[4]];
