import { Header } from "./componente/Header/Header"
import Contacto from "./componente/Contacto/Contacto"
import 'tailwindcss/tailwind.css';
import MoviesList from "./ejemplo/MovieList"




function App() {


  return (
    <>
       <Header />
      {/*  <Contacto /> */}
       <MoviesList /> 
    </>
  )
}

export default App