import React, {useState, useEffect} from 'react';

export const GithubUserContext = React.createContext({
    repositories: [],
    setRepositories: () => {},
    githubUser: '',
    setGithubUser: () => {}
});

export default function UseGithubUserProvider({children}){
    const [repositories,setRepositories] = useState([]);
    const [githubUser, setGithubUser] = useState("");
   

    useEffect(()=>{//check if userName exists
       // if(localStorage.getItem(githubUser)) {//if the githubUser already exist in localstorage (localStorage.getItem is a built in function)
       //setGithubUser(githubUser);
      if(githubUser)  fetch(`https://api.github.com/users/${githubUser}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data));
       console.log(repositories);
    //}else{
    //    localStorage.setItemItem(githubUser)
//}
}, [githubUser]);

    return (
        <GithubUserContext.Provider value={{
            repositories,
            setRepositories,
            githubUser,
            setGithubUser
        }}>
            {children}
        </GithubUserContext.Provider>
    );
}

    


    


