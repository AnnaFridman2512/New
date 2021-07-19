import { useContext, useRef} from "react";
import {GithubUserContext} from './GithubUserContext.js';



export default function Submit(event){//When "submit" function is called
    let {repositories} = useContext(GithubUserContext);
    let {setGithubUser} = useContext(GithubUserContext);

    const userIdInputRef = useRef("");
     
    function onSendClick(){
        setGithubUser(userIdInputRef.current.value);//set the value with whatever we got from input
    }
  
  return (
    <>
        <input ref={userIdInputRef} type="text"/>
        <button onClick={onSendClick}>submit</button>
             <h1>Repository list:</h1>
            {repositories.map(repository => (
            <div key={repository.id}>
            <h3>{repository.url}</h3>
            </div>
  ))}
  </>
  );
}