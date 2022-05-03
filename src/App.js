import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, push, remove } from 'firebase/database'
import firebase from './firebase';
import Post from './Components/Post';


// Connect Firebase
// Import axios library
// Create at least two components

// useEffect 
  // call to API endpoint to get current time
  // API is called once user submits a post it

// Display post it on screen with comment and time in their own p tags
// Each post will be stored on firebase as an object inside of an array

// Create click and drag function so user will be able to move post it around
  // post its will have to be absolute and z-index will have to be played with
  // perhaps hover will change z index to display selected post it over all others
  // move absolutely positioned post it notes onMouseMove Event




function App() {
  return (
    <div className="wrapper">

    {/* <h1>hey</h1>

    <Post /> */}

    </div>
  )
}

export default App;
