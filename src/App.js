import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, push, remove } from 'firebase/database'
import firebase from './firebase';

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
  const [posts, setPosts] = useState([])
  const [userInput, setUserInput] = useState('')
  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase)

    // create a variable that makes reference to our database
    const dbRef = ref(database)

    // add an Event listener to that variable that will fire from that database
    onValue(dbRef, (response) => {
      const newState = []
      const data = response.val()

      for (let key in data) {
        newState.push({ id: key, name: data[key]}
        )
      }

      setPosts(newState)
      console.log(response.val());
    })

  }, [])

// Create an event handler that will fire every time there is input

const handleInputChange = (event) => {
  setUserInput(event.target.value)
  // telling react 
  
}

const userSubmit = (event) => {
  event.preventDefault();

  // always need to create a reference to firebase
  const database = getDatabase(firebase);
  const dbRef = ref(database)

  // push the value of userInput to the base
  if(userInput) {

    push( dbRef, userInput )
  
    setUserInput('');
  } else {
    alert('It can be anything but not nothing')

  }
}

const removePost = (postId) => {
  const database = getDatabase(firebase)
  // I have no idea how we got to this part
  const dbRef = ref(database, `/${postId}`)

  // firebase method remove 👇👇
  remove(dbRef)
}

  return (
    <div className="App">
      <h1>Share Board</h1>

      <form action="submit" onSubmit={(event) => { userSubmit(event)}}>
        <label htmlFor="newPost">Write whatever you feel like writing</label>
        <textarea type="text" 
        rows={10}  
        cols={50}   
        id="newPost" 
        onChange={handleInputChange}
        value={userInput}
        />
        <button onClick={userSubmit}>Post!</button>
      </form>
      
        <ul>
          {posts.map((post) => {
            
            return (
              <li key={post.id}>
                <p>{post.name} - {post.key}</p>
                <button onClick={() => removePost(post.id)}> Remove </button>
              </li>
            )
          })}
        </ul>
    </div>
      
    
  );
}

export default App;
