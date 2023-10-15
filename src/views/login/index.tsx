import React from 'react';
import './styles.css';
import Header from '../../components/header/header';

function LoginPage() {
  const handleSpotifyLogin = async () => {
    const response = await fetch('http://localhost:8001/api/anonymous/authenticate');
    const data = await response.json();
    const redirectUrl = data.redirect_url;
    window.location.href = redirectUrl;
  };

  return (
    <div className="body">
      <Header />
      <div className="card">
        <h1 className="title">Try Echofy for free</h1>
        <button className="button" onClick={handleSpotifyLogin}>
          <p>Login with Spotify</p>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
