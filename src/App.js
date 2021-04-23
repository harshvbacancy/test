import './App.css';
import React, { useState } from 'react';

function App() {
  const initial_like = 100
  const initial_dislike = 25
  const [like, setLike] = useState(initial_like)
  const [dislike, setDisLike] = useState(initial_dislike)
  const [liked, setliked] = useState(true)
  const [disliked, setdisLiked] = useState(true)

  const likes_counter = () => {
    setLike(like + 1)
    setliked(!liked)
  }

  const dislikes_counter = () => {
    setDisLike(dislike - 1)
    setdisLiked(!disliked)
  }

  return (
    <div className="App">
      <div>

        <button className={ liked ? "like-button": "like-button liked" } onClick={(e) => likes_counter(e)}>like</button> :
        <span>{like}</span>

      <button className={ disliked ? "dislike-button":"dislike-button disliked" } onClick={(e) => dislikes_counter(e)}>dislike</button>:


      <span>{dislike}</span>

      </div>
    </div>
  );
}

export default App;
