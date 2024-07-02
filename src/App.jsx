import { createContext,useState,useEffect } from "react"
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import data from './data'


export const ecomContext = createContext(null);

function App() {


  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([]);

  console.log(cart);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);

    // console.log(data);

    // const calling = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    //         params: {
    //             query: 'Phone',
    //             page: '1',
    //             country: 'US',
    //             sort_by: 'RELEVANCE',
    //             product_condition: 'ALL'
    //         },
    //         headers: {
    //             'x-rapidapi-key': 'cf2c7f000emsh3d1cd56c1ea499fp12a826jsn1503042f16aa',
    //             'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }


    // }
    //   useEffect(()=>{
    //     calling();
    //   },[]);

    //   if (loading) return <p>Loading...</p>;
    //   if (error) return <p>Error: {error.message}</p>;

    useEffect(() => {
        // Access the products array from the imported data
        if (data && data.data && data.data.products) {
            setProducts(data.data.products);
        }
    }, []);


    function handleAddtoCart(e,product){
      e.preventDefault()
      setCart([...cart , product])
    }

  return (
    <>
      <BrowserRouter>
  const [cart , setCart] = useState([]);
        <ecomContext.Provider value={{products , handleAddtoCart , cart , setCart }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </ecomContext.Provider>
      </BrowserRouter>


    </>
  )
}

export default App
