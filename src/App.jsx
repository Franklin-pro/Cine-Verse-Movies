import Footer from "./components/Footer"
import MovieContent from "./components/MovieContent"
import Navbar from "./components/Navbar"
import ScrollTop from "./components/ScrollTop"
import { MovieProvider } from "./context/MovieProvider";


function App() {


  return (
    <>
   <MovieProvider>
       <div className="min-h-screen">
        <Navbar />
        <main>
          <MovieContent/>
        </main>
        <Footer/>
        <ScrollTop/>
      </div>
   </MovieProvider>
    </>
  )
}

export default App
