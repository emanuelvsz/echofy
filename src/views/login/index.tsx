import React from 'react';
import './styles.css';
import Header from '../../components/header/header';

function LoginPage() {
  const handleSpotifyLogin = () => {
    const spotifyAuthUrl = 'https://accounts.spotify.com/authorize?client_id=SEU_CLIENT_ID&redirect_uri=SEU_REDIRECT_URI&scope=user-read-private&response_type=token&state=SEU_ESTADO';
    
    window.location.href = spotifyAuthUrl;
  };

  return (
    <body className="body">
      <Header />
      <div className="card">
        <h1 className="title">Try Echofy for free</h1>
        <button className="button" onClick={handleSpotifyLogin}>
          <p>Login with Spotify</p>
        </button>
      </div>
    </body>
  );
}

export default LoginPage;
