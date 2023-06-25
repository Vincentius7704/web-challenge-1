"use client"
import Image from 'next/image'
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import cons from "../public/consulting.png"
import { useState } from 'react'


function Window() {
  const [web , setweb] = useState(false)
  const [data , setdata] = useState(false)
  const [ded , setded] = useState(false)
  
  function hand1(){
    setweb(!web)
  }
  function hand2(){
    setdata(!data)
  }
  function hand3(){
    setded(!ded)
  }
 

  return (
    <div className='grid grid-cols-3 mx-10  place-content-around  grid-flow-row-dense my-10'>

    <div className={'shadow-2xl rounded-xl my-10 grid justify-center text-center h-44 lg:w-80 place-content-around cursor-pointer ' + 
    ('')} onClick={hand1}>
      <div className=''>
        <Image src={design} width={100}></Image>
        <h1>Web Dev</h1>
      </div>
    </div>

    <div className={'h-44 shadow-2xl rounded-xl my-10 grid justify-center text-center lg:w-80 place-content-around cursor-pointer ' + ('')} onClick={hand2}>
      <div>
        <Image src={code} width={100}></Image>
        <h1>Data Science</h1>
      </div>
    </div>

    <div className={'h-44 shadow-2xl rounded-xl my-10 lg:w-80 grid justify-center text-center place-content-around cursor-pointer ' + ('')} onClick={hand3}>
      <div>
        <Image src={cons} width={100}></Image>
        <h1>Dedication</h1>
      </div>
    </div>

  </div>
  
  )
}
export default function Home() {
  return (
    <main className="bg-white px-10 ">
      <section className=' min-h-screen'>
        <nav className='mb-12 py-5 flex justify-between '>
          <h1 className='text-xl hover:font-semibold '>Vincent</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'></BsFillMoonStarsFill>
            </li>
            <li><a className=' text-white bg-gradient-to-r from-cyan-700 to bg-cyan-500 rounded-xl p-3 mx-10'
              href="#">resume</a></li>
          </ul>
        </nav>
        <div   >
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-semibold'>Vincentius Bhatara</h2>
            <h3 className='text-xl py-2'>Developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Making cool stuff on the internet , front end , back end , datascience, deep learning , i do ll of those stuff as a hobbies
            </p>
          </div>
          <div className='flex text-5xl justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle className='hover:text-7xl hover:text-blue-400 ease-in-out duration-300'></AiFillTwitterCircle >
            <AiFillLinkedin className='hover:text-7xl hover:text-blue-600 ease-in-out duration-300'></AiFillLinkedin>
            <AiFillYoutube className='hover:text-7xl hover:text-red-600 ease-in-out duration-300'></AiFillYoutube>
          </div>
          <div className=' bg-gradient-to-b from-teal-500 rounded-full pt-1 w-80 h-80 mt-20 mx-auto overflow-hidden relative hover:bg-orange-300 hover:w-96 hover:h-96 ease-in-out duration-300'>
            <Image src={deved} fill objectFit='cover' alt="failed" ></Image>
          </div>
        </div   >
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 mx-auto font-[500]'>Experience</h3>
          <p className='py-2 text-md text-gray-800 text-medium'>
            well i havent done much yet as <span className='text-teal-500 font-semibold'>25/06/2023</span> , but im planning in the future to do more cool stuff , at minimal until 21 August i should have a really great and wonderful summer holliday experience. Right now i am  trying to learn about front-end and back-end , well basicly fullstack , and with this new great expensive laptop i want also do some data science ,<span className='font-semibold text-teal-500'>well wish me luck!</span> </p>
        </div >

        <Window></Window>








        <div className='p-96'></div>





      </section>


    </main>
  )
}
