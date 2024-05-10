import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MacbookAir from "./pages/MacbookAir"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/macbook-air" element={<MacbookAir/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
