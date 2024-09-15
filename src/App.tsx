import './App.css'
import Navbar from './components/navbar/NavBar'
import SideBar from "./components/sidebar/SideBar";
import HomeView from "./components/homeview/HomeView";
import MusicBar from "./components/musicbar/MusicBar";

function App() {

  return (
    <div className="App">
        <div className={"navigation"}>
          <SideBar />
          <Navbar />
          <HomeView />
          <MusicBar />
        </div>
    </div>
  )
}

export default App
