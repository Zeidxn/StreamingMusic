import './App.css'
import Navbar from './components/NavBar/NavBar'
import SideBar from "./components/SideBar/SideBar";

function App() {

  return (
    <div className="App">
        <div className={"navigation"}>
          <SideBar />
          <Navbar />
        </div>
    </div>
  )
}

export default App
