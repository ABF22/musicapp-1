import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const songsData = [
  {
    name: 'Song 1',
    releaseDate: 'January 1, 2022',
    coverArt: 'https://example.com/cover-art1.jpg',
  },
  {
    name: 'Song 2',
    releaseDate: 'February 15, 2022',
    coverArt: 'https://example.com/cover-art2.jpg',
  },
  // if i decide to add more songs
];

const Artist = () => (
  <div>
    <h2>Artist Name</h2>
    <p>Music Type</p>
    <p>Introduction paragraph</p>
  </div>
);

const SongList = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  const handleLike = (index) => {
    if (likedSongs.includes(index)) {
      setLikedSongs(likedSongs.filter((i) => i !== index));
    } else {
      setLikedSongs([...likedSongs, index]);
    }
  };

  return (
    <div>
      {songsData.map((song, index) => (
        <div key={index}>
          <img src={song.coverArt} alt={song.name} />
          <p>{song.name}</p>
          <p>{song.releaseDate}</p>
          <button onClick={() => handleLike(index)}>
            <FaHeart color={likedSongs.includes(index) ? 'red' : 'gray'} />
          </button>
        </div>
      ))}
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data
    setFormData({ name: '', email: '' }); // Clear form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => (
  <div>
    <Artist />
    <SongList />
    <Form />
  </div>
);

export default App;
