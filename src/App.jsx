
import '../src/index.css'
import './App.css'
import Header from './Components/Header'
import MovieList from './Components/MovieList'
import Slider from './Components/Slider'
import StudiosLogo from './Components/StudiosLogo'

function App() {

  return (
    <>
        <div>
          <Header/>
          <Slider/>
          <StudiosLogo/>
          <MovieList/>
        </div>
    </>
  )
}

export default App
