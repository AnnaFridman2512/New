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
   

    useEffect(()=>{
      if(githubUser) fetch(`https://api.github.com/users/${githubUser}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data));
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

    


    


