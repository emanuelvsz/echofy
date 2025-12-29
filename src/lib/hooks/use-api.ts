const API_URL = "http://localhost:3001";

export const fetchTopArtist = async () => {
  const res = await fetch(`${API_URL}/artist/top-artist`);
  return res.json();
};

export const fetchTopHits = async () => {
  const res = await fetch(`${API_URL}/track/top-tracks`);
  return res.json();
};
