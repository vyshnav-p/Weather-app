import Head from 'next/head'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import axios from "axios"
import {BsSearch}from "react-icons/bs"
import { use, useState } from 'react'
import Weather from '@/components/Weather'
import Loading from '@/components/Loading'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const[city,setCity]=useState()
  const[weather,setWeather]=useState()
  const[loading,setLoading]=useState(false)

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e416220c004b4370fa84f99481a2ae4a`
  
const clicked=(e)=>{

  e.preventDefault()

  setLoading(true)

  axios.get(url).then((responce)=>{

    setWeather(responce.data)
   
  })

 setLoading(false)
 setCity("")
  

  

 
}
  if(loading){
    return<Loading/>
  }else{
  
  return (

    <>
    <Head>
      <title>weather-next-app</title>
    </Head>



    <div className=' absolute top-0 left-0 bottom-0 right-0 bg-black/60 z-[1]'/>


    <Image
   src="https://images.unsplash.com/photo-1495442358998-961b69f45703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    layout="fill"
    className='object-cover'
   />
{/*------------search-------------*/}
   <div className='relative flex justify-between max-w-[350px] items-center md:max-w-[500px] w-full  m-auto pt-4 text-white z-10 '>
    <form onSubmit={clicked} className='flex justify-between items-center w-full  m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl '>
      <div>
        <input onChange={(e)=>{
          setCity(e.target.value)
        }} className='bg-transparent border-none text-white  focus:outline-none text-xl' type="text" placeholder='Search city' name="" id="" />
      </div>
      <button onClick={clicked}><BsSearch size={18} /></button>
    </form>
   </div>

   {/*------------weather-------------*/}
    

    {weather &&  <Weather data={weather}/> }

    





    </>
   
  )
}

}