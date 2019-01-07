import React from 'react';
import './Post.css';

const post = (props) => (
  <article className="Post" onClick={props.clicked}>
      <h2>{props.title}</h2>
      <p className="Author">{props.author}</p>
  </article>
)

export default post;
