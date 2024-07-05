import { createContext,useState,useEffect } from "react"
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import Signin from "./components/Signin"
import Cart from "./components/Cart"
import FilteredProducts from "./components/Pages/FilteredProducts"
import Registration from "./components/Registration"
import UserProfile from "./components/UserProfile"
import ProceedToCheckout from "./components/ProceedToCheckout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './data'
import  axios  from "axios"
import Footer from "./components/footer/Footer"


export const ecomContext = createContext(null);

function App() {


  const [products, setProducts] = useState([]);
  const [filteredProduct , setFilteredProduct] = useState([]);
  const [cart , setCart] = useState([]);

  console.log(filteredProduct);
  

  console.log(cart);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

    // console.log(data);

     const calling = async (val) => {
      console.log(val);
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/search',
            params: {
                query: `${val}`,
                page: '1',
                country: 'US',
                sort_by: 'RELEVANCE',
                product_condition: 'ALL'
            },
            headers: {
                'x-rapidapi-key': 'cf2c7f000emsh3d1cd56c1ea499fp12a826jsn1503042f16aa',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            const data = response.data;
            if (data && data.data && data.data.products) {
              setProducts(data.data.products);
          }

        } catch (error) {
            console.error(error);
        }


    }
      useEffect(()=>{

        calling();

       
      },[]);

      // if (loading) return <p>Loading...</p>;
      // if (error) return <p>Error: {error.message}</p>;

    // useEffect(() => {
    //     // Access the products array from the imported data
    //     if (data && data.data && data.data.products) {
    //         setProducts(data.data.products);
    //     }
    // }, []);


    function handleAddtoCart(e,product){
      e.preventDefault()
      setCart([...cart , product]);
      toast.success("Item added to cart");
    }

    function handleDeleteitem(e, product){
      e.preventDefault();
      setCart(cart.filter(item => item !== product));
      toast.success("Item removed from Cart");
    }

    function filterData (val) {
      console.log(val);
      setFilteredProduct(data.data.products[val]);
    }
  return (
    <>
      <BrowserRouter>
        <ecomContext.Provider value={{products, filteredProduct , cart , handleAddtoCart ,  setCart , handleDeleteitem ,calling , filterData , }}>
        <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/filteredproduct" element={<FilteredProducts />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/userprofile" element={<UserProfile />}></Route>
            <Route path="/proceedtocheckout" element={<ProceedToCheckout />}></Route>
          </Routes>
          <Footer/>
        </ecomContext.Provider>
      </BrowserRouter>


    </>
  )
}

export default App;
