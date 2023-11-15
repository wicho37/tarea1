import { Header } from "./componente/Header/Header"
import Detail from "./componente/Detail/Detail"
import 'tailwindcss/tailwind.css';
import MovieApi from "./ejemplo/MovieApi"
import { BrowserRouter,Routes,Route } from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <MovieApi />} />
          <Route path="/Detail/:id" element={ <Detail/>}></Route>
        </Routes>
      
      
       
      
    </BrowserRouter>
  )
}

export default App