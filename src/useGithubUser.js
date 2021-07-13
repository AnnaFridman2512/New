import {useState, useEffect} from 'react';

export default function useGithubUser(userName){
    const [user, setUser] = useState(null);
//check if userName exists
useEffect(()=>{
    if(localStorage.getItem(userName)) {//if the userName already exist in localstorage (localStorage.getItem is a built in function)
        setUser(userName);
    }else{

       setUser(null);
    }
}, [userName]);//Track changes on "userName" and render this every time "userName" changes
   
    return user;
}


