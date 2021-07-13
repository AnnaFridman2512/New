
import './App.css';
import useGithubUser  from './useGithubUser';
//import Form from './Form';
import { useState,useRef, useEffect } from 'react';

export default function App() {
  const [value, setValue] = useState("");//input value
  const [repositories,setRepositories] = useState([]);
  const inputRef = useRef();
  const githubUser = useGithubUser(value);//useGithubUser checks if the user (value) is already exist in localstorage
                                      //returns the user if exists or null if doesnt

  
 useEffect(() => {  
    fetch(`https://api.github.com/users/${githubUser}/repos`)
    .then(response => response.json())
    .then(data => setRepositories(data));
}, [githubUser]);  

  function submit(event){//Twhen "submit" function is called
    event.preventDefault();//prevent submits default behavior 
    const {value} = inputRef.current; //instead taje the value from the input and dtore it in "value" variable
    setValue(value);//set the value with whatever we got from input
  }

  if(githubUser){
    return (
      <div className="App">
      <h1>Repository list:</h1>
      {repositories.map(repository => (
        <div key={repository.id}>
          <h3>{repository.url}</h3>
        </div>
      ))}
    </div>
    );
  }else{
    return (
      <form onSubmit={submit}> {/*run "submit" function, stotre value from input*/}
        <input ref={inputRef} type="text"/>
        <button type="submit">submit</button>
      </form>
    );
  }
}


