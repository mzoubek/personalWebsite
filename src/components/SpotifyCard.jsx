import React, { useEffect, useState } from "react";
import SpotifyIcon from "../SVG/SpotifyIcon.jsx";

const SpotifyCard = () => {
  const [track, setTrack] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  const CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
  const REDIRECT_URI = import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_TOKEN = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const scope = "user-top-read user-read-currently-playing";

  useEffect(() => {
    const authorize = async () => {
      const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${state}`;
      window.location.href = url;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading currently playing track: {error.message}</div>;
  }

  if (!track) {
    return <div>No track currently playing.</div>;
  }

  return (
    <div className='h-20 flex gap-4 items-center bg-white/20 rounded-full md:col-span-2 lg:col-span-1 row-span-2'>
      <div className='pl-4'>
        <SpotifyIcon />
      </div>
      <div className='grid grid-cols-1 grid-rows-2'>
        <p className='font-poppins'>Most listened in a week</p>
        <p>
          {track.name} by
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SpotifyCard;
