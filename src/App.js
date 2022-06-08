import './App.css';
import Body from './components/content';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Body/>
    </div>
  );
}

export default App;
