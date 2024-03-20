import Navbar from "./components/Navbar"
import SearchBar from "./components/Search"
import Product from "./components/Product"
import About from "./components/About"
import Footer from "./components/Footer"

function App()
{
    return(
        <>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </>
    )
}

export default App