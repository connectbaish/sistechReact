// import React, { useEffect, useState } from 'react'
// const App = () => {

//        let [data,SetData]=  useState([])
//        let [count,SetCount]=useState(0)

//        let [city,SetCity]=useState('delhi')


//        useEffect(()=>{
//         fetch('https://dummyjson.com/products').then((res)=>{
//           return res.json()
      
//         }).then((a)=>{
//           console.log(a,"hshshsshj");
//           SetData(a.products)
      
//         })

//        },[count])


//     //  let [count,SetCount] =     useState(0)
//     //  let [city,SetCity]=useState('bhopal')
//   function fun1(){
//     SetCount(count+1)
//   }
//   // const fun2=()=>{
//   //   SetCount(count-1)
//   // }

//   // const fun3=()=>{
//   //   SetCity('shimlaaaa')
//   // }


//   function fun5(){
//     SetCity('shimlaaaa')
//   }
//   return (
//     <div>
// {/* {
//   data.map((a)=>{
//     return(<>
//     <p> {a.id}</p>
//     <h3> {a.brand}</h3>
//     <h5>{a.title}</h5>
//     </>)
//   })
// } */}

// <button   onClick={fun1}>   click</button>
// <p>  {count}</p>
// <h5>  {city}</h5>
// <button  onClick={fun5}>   changeee</button>
//   {/* <button   onClick={fun1}> addd</button> */}
//   {/* <button   onClick={fun2}> minus</button> */}
//   {/* <button    onClick={fun3}> shimla</button> */}

//   {/* <p>  {count}</p> */}
//   {/* <h4>   {city}</h4> */}
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState('')
//   function fun1(e){
//     console.log(e.target.value);

//   }
//   return (
//     <div>
//       <input    name='sistech' onChange={fun1}  type='text'/>


//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { Route,Routes } from 'react-router-dom'
import About from './About'
const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route   path='/'   element={<Home/>}/>
        <Route   path='/about'   element={<About/>}/>

      </Routes>

    </div>
  )
}

export default App




