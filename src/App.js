import './App.css';
import NavBar from './NavBar.js';
// useNavigate is a function that will redirect the user to another page.
import { Outlet } from'react-router-dom';
import SearchBar from './components/SearchBar.js';

//useEffect is a function that will run a function when the component is first rendered.=> get the data from the server.
// pass data down with context property
//useOutletContext hook to access the context in the child components.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
