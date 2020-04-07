import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';

function Hi({firstname,lastname}) {
  return (
    <div>
      <h2> Example of a header </h2>
      
      <strong>Hello {firstname} {lastname}</strong>
    </div>
  )
}

function MediaCard({title,body,imageUrl}){
  return(
   <div>
      <h2> {title}</h2>
      <p> {body} </p>
      <img src={imageUrl}/>
    </div>
  )
}

ReactDOM.render(<Hi firstname="Steve" lastname="Danby"/>, document.querySelector('#root'));
ReactDOM.render(<MediaCard title="Steve" body="Danby" imageUrl=/>, document.querySelector('#root'));