import './App.css'
import Proposal from './components/Proposal'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YesPage from './pages/YesPage'
import NoPage from './pages/NoPage'

function App() {

  return (
    <>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Proposal />} />
            <Route path="/yes" element={<YesPage />} />
            <Route path="/no" element={<NoPage />} />
          </Routes>
          <MusicPlayer />
          <Footer />

        </div>
      </Router>


    </>
  )
}

export default App
