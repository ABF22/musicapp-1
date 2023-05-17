import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import '../App.css'; // You can create a separate CSS file for SongList if needed

const songsData = [
  {
    name: 'Song 1',
    releaseDate: 'January 1, 2022',
    coverArt: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/qclvhrtxc9zfzsr4f0xq/brent-faiyaz-sonder-son-cover',
  },
  {
    name: 'Song 2',
    releaseDate: 'February 15, 2022',
    coverArt: 'https://cdns-images.dzcdn.net/images/cover/d34f64f4ccc174fb1964d02d701c98ae/264x264.jpg'
  },
  // Add more songs if needed
];

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
    <div className="container">
      {songsData.map((song, index) => (
        <div key={index} className="card">
          <img src={song.coverArt} alt={song.name} />
          <h2>{song.name}</h2>
          <p>{song.releaseDate}</p>
          <button onClick={() => handleLike(index)}>
            <FaHeart
              color={likedSongs.includes(index) ? 'red' : 'gray'}
              className={likedSongs.includes(index) ? 'liked' : ''}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongList;
