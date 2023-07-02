import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Aboutme />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
