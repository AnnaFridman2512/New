
import './App.css';
import UseGithubUserProvider  from './GithubUserContext';
import GithubUser from './GithubUser';

function App() {

  return (
    <div className="App">
      <UseGithubUserProvider>
        <GithubUser/>
      </UseGithubUserProvider>
    </div>
    );
  }

export default App;

