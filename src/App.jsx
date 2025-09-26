import MovieContent from "./components/MovieContent"
import Navbar from "./components/Navbar"


function App() {


  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <MovieContent/>
        </main>
      </div>
    </>
  )
}

export default App
