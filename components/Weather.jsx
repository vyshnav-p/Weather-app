import React from 'react'
import Image from 'next/image'
const Weather = ({data}) => {
    console.log({data})
  return (
    <div className='relative flex flex-col justify-between max-w-[370px] md:max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10' >
     {/*-----top------*/}
      <div className='relative  flex justify-between pt-12'>
        <div className='flex flex-col items-center' >
            <Image width='100' height='100' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/'/>
            <p className='text-2xl'>{data.weather[0].description}</p>
        </div> 
        <p className='text-8xl  md:text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/*--------------bottom------------------*/}
    <div className='bg-black/90 relative p-8 rounded-md'>
        <p className='text-2xl text-center pb-6'>Weather in {data.name} ({data.sys.country})</p>
        <div className='flex justify-between text-center'>
            <div>
                <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                <p className='text-xl'>Feels Like</p>
            </div>

            <div>
                <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                <p className='text-xl'>Humidity</p>
            </div>
            <div>
                <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)}MPH</p>
                <p className='text-xl'>Wind</p>
            </div>
        </div>
    </div>
    </div>
    

  )
}

export default Weather