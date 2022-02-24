import "./index.css"
import React from 'react'
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../src/image/logo.svg"
import Draggable from "react-draggable";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import seo from "./components/helper";








function Home(){
 

}


 
function App() {
  const url = "https://api2.binance.com/api/v3/ticker/24hr"
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(true);
  const [darkMode, setDarkMode] = useState(false)
  const [drawer, setDrawer] = useState(false)
 

  
 





  //for system adaption automatic dark mod

  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark')
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')

  useEffect(()=>{
    
    document.title="this is krishna"
  })


  const hideNav = () => {
    const result = !hide
    setHide(result)
  }

  useEffect(() => {
    axios.get(url).then(res => {
      const result = res.data
      setData(result)
    })
      .catch(err => {
        const result = err.message
        alert(result)
      })
  }, [])

  // const darkMode = () => {
  //   const root = window.document.documentElement

  //   root.classList.add('dark')
  // }
  // const btn = document.querySelector("button.mobile-menu-button");
  // const menu = document.querySelector(".mobile-menu");

  // btn.addEventListener("click", () => {
  //   menu.classList.toggle("true");
  // });





  return (
    <div
        class={`${darkMode && "dark"
          }`}
      >

      <div>
        <nav class=" dark:bg-slate-800 dark:text-gray-200">
          <div class=" max-2xl mx-auto px-4">
            <div class="flex justify-between">

              <div class="flex space-x-4">
                <div>
                  <a href="#" class="flex items-center py-5 px-2 text-grey-700 dark:bg-slate-800 hover:text-yellow-500 ">
                    {/* <img src={logo} alt=""></img> */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-bold uppercase black">BINANCE</span>
                  </a>
                </div>

                <div class="hidden md:flex items-center space-x-1 dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50">
                  <a href="#" class="py-5 px-3 text-grey-700  hover:text-yellow-500">Buy Crypto</a>
                  <a href="#" class="py-5 px-3 text-grey-700  hover:text-yellow-500">Markets</a>
                  <a href="#" class="py-5 px-3 text-grey-700  hover:text-yellow-500">Earn</a>

                  <div class="relative inline-block text-left ">
                    <div>
                      <button type="button" onClick={() => setDrawer(!drawer)} class="  dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50 hover:text-yellow-500 dark:hover:text-yellow-500 bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                        Feature
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                          </path>
                        </svg>
                      </button>
                    </div>
                    {
                      drawer ? (
                        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                          <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:text-yellow-500 dark:hover:text-yellow-500  hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                              <span class="flex flex-col">
                                <span>
                                  Update
                                </span>
                              </span>
                            </a>
                            <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:text-yellow-500  dark:hover:text-yellow-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                              <span class="flex flex-col">
                                <span>
                                  Binance Pool
                                </span>
                              </span>
                            </a>
                            <a href="#" class="block block px-4 py-2 text-md text-gray-700  hover:text-yellow-500 dark:hover:text-yellow-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                              <span class="flex flex-col">
                                <span>
                                  Binance Earn
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      ) : null
                    }


                  </div>

                </div>
              </div>


              <div class="hidden md:flex items-center space-x-1 dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50">
                <a href="#" class="py-5 px-3 uppercase hover:text-black hover:text-yellow-500">login</a>
                <a href="#" class="py-3 px-3 uppercase bg-yellow-500 hover:bg-yellow-600 dark:bg-gray-700 dark:hover:text-yellow-500  rounded translate duration-300">Signup</a>
                <label class="switch">
                  <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
                 
                 
                  <span class="slider round"></span>
                </label>
              </div>

              <div class="md:hidden flex items-center">
                <button class="mobile-menu-button">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>








          <div class="mobile-menu hidden md:hidden hover:text-yellow-500 dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50">
            <a href="#" class="block py-2 px-4 text-sm  hover:text-yellow-500 dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50">Buy Crypto</a>
            <a href="#" class="block py-2 px-4 text-sm hover:text-yellow-500 dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50">Markets</a>
          </div>




        </nav>



        <div class="min-screen bg-yellow-200 p-10 dark:bg-slate-700 dark:text-gray-200 hover:dark:text-slate-50">
          <div class="space-y-8 md:space-y-0 md:grid md:grid-cols-2">
            <div class="md:flex md:flex-col md:justify-center">
              <h2 class=" text-2xl md:text-4xl lg:text-6xl font-bold md-4">Buy & sell Crypto in <span class="">Minutes</span></h2><br />
              <p class="md:text-lg text-grey-900">Join the world's largest crypto exchange.... </p>

            </div>

            <div class="">
              <div class="w-full h-auto  rounded-lg shadow-2xl bg-black text-white decoration-wavy align-baseline text-justify dark:bg-gray-700">
                <div class="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                  recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="lg:grid-rows-6 space-x-5 w-auto h-auto lg:flex grid ms:grid-cols-1 md:grid-rows-2 p-6 justify-center dark:bg-gray-700">
          <div class="shadow-lg rounded-2xl space-y-2 w-64 p-4 bg-white relative overflow-hidden dark:bg-slate-600">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4 " /> */}
            <div class="w-4/6">
              <p class="text-gray-800 text-lg font-medium mb-2 dark:text-gray-200 hover:dark:text-slate-50 ">
                Avg
              </p>
              <p class="text-gray-400 text-xs dark:text-gray-200 hover:dark:text-slate-50">
                Detail is not an obsession, it is the very essence of perfection.
              </p>
              <p class="text-indigo-400 text-xl font-medium">
                $399
              </p>
            </div>

          </div>
          <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden dark:bg-slate-600">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4" /> */}
            <div class="w-4/6">
              <p class="text-gray-800 text-lg font-medium mb-2 dark:text-gray-200 hover:dark:text-slate-50">
                Avg
              </p>
              <p class="text-gray-400 text-xs dark:text-gray-200 hover:dark:text-slate-50">
                Detail is not an obsession, it is the very essence of perfection.
              </p>
              <p class="text-indigo-400 text-xl font-medium">
                $399
              </p>
            </div>
          </div>
          <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden dark:bg-slate-600">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4" /> */}
            <div class="w-4/6">
              <p class="text-gray-800 text-lg font-medium mb-2 dark:text-gray-200 hover:dark:text-slate-50">
                Avg
              </p>
              <p class="text-gray-400 text-xs dark:text-gray-200 hover:dark:text-slate-50">
                Detail is not an obsession, it is the very essence of perfection.
              </p>
              <p class="text-indigo-400 text-xl font-medium ">
                $399
              </p>
            </div>
          </div>
          <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden dark:bg-slate-600">
            {/* <img alt="moto" src="/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4" /> */}
            <div class="w-4/6">
              <p class="text-gray-800 text-lg font-medium mb-2 dark:text-gray-200 hover:dark:text-slate-50">
                Avg
              </p>
              <p class="text-gray-400 text-xs dark:text-gray-200 hover:dark:text-slate-50">
                Detail is not an obsession, it is the very essence of perfection.
              </p>
              <p class="text-indigo-400 text-xl font-medium">
                $399
              </p>
            </div>
          </div>

        </div>
        <div>
          <SkeletonTheme baseColor="#ffff" highlightColor="#444">
            <p>
              <Skeleton count={0} />
            </p>
          </SkeletonTheme>
        </div>



        <div class="dark:bg-slate-700">
          <div class="container mx-auto px-4 sm:px-8 max-w-3xl dark:bg-slate-700 ">
            <div class="py-8  dark:text-gray-200 hover:dark:text-slate-50 dark:bg-slate-700  ">
              <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full dark:bg-slate-700">
                <h2 class="text-2xl leading-tight dark:text-gray-200 hover:dark:text-slate-50 dark:bg-slate-700 ">
                  Users
                </h2>
                <div class="text-end dark:text-gray-200 hover:dark:text-slate-50 dark:bg-slate-700">
                  <form class="flex flex-col   md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center ">
                    <div class=" relative ">
                      <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                    </div>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                      Filter
                    </button>
                  </form>
                </div>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto dark:text-gray-200 hover:dark:text-slate-50 dark:bg-slate-700">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden ">
                  <table class="min-w-full leading-normal">
                    <thead class="">
                      <tr class="">
                        <th scope="col" class="px-5 py-3  dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          User
                        </th>
                        <th scope="col" class="px-5 py-3 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white  border-b dark:bg-gray-700 border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Role
                        </th>
                        <th scope="col" class="px-5 py-3 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white  border-b dark:bg-gray-700  border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Created at
                        </th>
                        <th scope="col" class="px-5 py-3 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white  border-b  dark:bg-gray-700 border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          status
                        </th>
                        <th scope="col" class="px-5 py-3 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white  border-b  dark:bg-gray-700 border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          <div class="flex items-center dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                            <div class="flex-shrink-0 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 ">
                              {/* <a href="#" class="block relative">
                              <img alt="profil" src="/images/person/8.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a> */}
                            </div>
                            <div class="ml-3   ">
                              <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 "><Skeleton count={1} />
                                Jean marc
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200  dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                            Admin
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200  dark:bg-gray-700 bg-white text-sm dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                            12/09/2020
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:bg-gray-700 bg-white text-sm dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 dark:bg-green-400 opacity-50 rounded-full dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                            </span>
                            <span class="relative"><Skeleton count={1} />
                              active
                            </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:bg-gray-700 bg-white text-sm dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          <a href="#" class="text-indigo-400 hover:text-indigo-900"><Skeleton count={1} />
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 dark:bg-gray-700  bg-white text-sm dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              {/* <a href="#" class="block relative">
                              <img alt="profil" src="/images/person/9.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a> */}
                            </div>
                            <div class="ml-3 ">
                              <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                                Marcus coco
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm"><Skeleton count={1} />
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                            Designer
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm"><Skeleton count={1} />
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                            01/10/2012
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 opacity-50 rounded-full">
                            </span>
                            <span class="relative dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                              active
                            </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <a href="#" class="text-indigo-400 hover:text-indigo-900"><Skeleton count={1} />
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              {/* <a href="#" class="block relative">
                              <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a> */}
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                                Ecric marc
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                            Developer
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                            02/10/2018
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 opacity-50 rounded-full">
                            </span>
                            <span class="relative dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                              active
                            </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <a href="#" class="text-indigo-400 hover:text-indigo-900"><Skeleton count={1} />
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              {/* <a href="#" class="block relative">
                              <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a> */}
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                                Julien Huger
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                            User
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                            23/09/2010
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 opacity-50 rounded-full">
                            </span>
                            <span class="relative dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600"><Skeleton count={1} />
                              active
                            </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-sm">
                          <a href="#" class="text-indigo-400 hover:text-indigo-900"><Skeleton count={1} />
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                    <div class="flex items-center">
                      <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white dark:text-gray-200 hover:dark:bg-gray-500 dark:bg-gray-600 hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                          </path>
                        </svg>
                      </button>
                      <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white dark:text-gray-200 hover:dark:bg-gray-500 dark:bg-gray-600 hover:bg-gray-100 ">
                        1
                      </button>
                      <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white dark:text-gray-200 hover:dark:bg-gray-500 dark:bg-gray-600 hover:bg-gray-100">
                        2
                      </button>
                      <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white dark:text-gray-200 hover:dark:bg-gray-500 dark:bg-gray-600 hover:bg-gray-100">
                        3
                      </button>
                      <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white dark:text-gray-200 hover:dark:bg-gray-500 dark:bg-gray-600 hover:bg-gray-100">
                        4
                      </button>
                      <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white dark:text-gray-200 hover:dark:bg-gray-500 dark:bg-gray-600 hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        <Popup trigger={<button> Click to open popup </button>} 
     position="right center">
      <div>GeeksforGeeks</div>
      <button>Click here</button>
    </Popup>
        </div>

        <Popup trigger={<button> Trigger</button>} position="right center">
        <div class="bg-slate-20 w-max p-4 border-2 mx-auto ms:w-4 bg-gradiant-to-t md:w-58 rounded-md dark:bg-slate-600">
            <h1 class="text-3xl font-bold  uppercase p-2">im tailwind</h1>

            <img src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350" class="rounded" alt="" />

            <h2>put me in the box</h2>
            <h2>and send me in centre</h2>
            <h2>make me responsive also</h2>
            {/* {
      data.map((ele)=>{
        return <h1>{ele.symbol} - {ele.priceChange} - {ele.count}</h1>
      })
    } */}

          </div>
  </Popup>


        {/* 

        <Draggable>

          <div class="py-32 text-center dark:bg-slate-700 dark:text-gray-200 hover:dark:text-slate-50 ">
            <h2 class="font-extrabold text-3xl"> Call Me Krishna</h2>
          </div>
        </Draggable> */}




        <div class="lg:flex grid ms:grid-cols-1 lg:grid-rows-3 p-4  dark:text-gray-200  dark:bg-gray-700 py-10">
          <div class="bg-slate-20 w-max p-4 border-2 mx-auto ms:w-4 bg-gradiant-to-t md:w-58 rounded-md dark:bg-slate-600 ">
            <h1 class="text-3xl font-bold p-2 uppercase">im tailwind</h1>

            <img src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350" class="rounded" alt="" />

            <h2>put me in the box</h2>
            <h2>and send me in centre</h2>
            <h2>make me responsive also</h2>
            {/* {
      data.map((ele)=>{
        return <h1>{ele.symbol} - {ele.priceChange} - {ele.count}</h1>
      })
    } */}

          </div>
          <div class="bg-slate-20 w-max p-4 border-2 mx-auto ms:w-4 bg-gradiant-to-t md:w-58 rounded-md dark:bg-slate-600">
            <h1 class="text-3xl font-bold  uppercase p-2">im tailwind</h1>

            <img src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350" class="rounded" alt="" />

            <h2>put me in the box</h2>
            <h2>and send me in centre</h2>
            <h2>make me responsive also</h2>
            {/* {
      data.map((ele)=>{
        return <h1>{ele.symbol} - {ele.priceChange} - {ele.count}</h1>
      })
    } */}

          </div>
          <div class="bg-slate-20 w-max p-4 border-2 mx-auto ms:w-4 bg-gradiant-to-t md:w-58 rounded-md dark:bg-slate-600">
            <h1 class="text-3xl font-bold uppercase p-2">im tailwind</h1>

            <img src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350" class="rounded" alt="" />

            <h2>put me in the box</h2>
            <h2>and send me in centre</h2>
            <h2>make me responsive also</h2>
            {/* {
      data.map((ele)=>{
        return <h1>{ele.symbol} - {ele.priceChange} - {ele.count}</h1>
      })
    } */}

          </div>




        </div>
        <div class="">
          <footer class="text-gold-500 body-font bg-gray-50 dark:bg-slate-800 dark:text-gray-200 hover:dark:text-slate-50 ">
            <div class="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a class="flex title-font font-medium items-center md:justify-start justify-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 dark:bg-white " viewBox="0 0 20 20" fill="fill ">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-3 text-xl text-black dark:text-white">Mine Crypto</span>
                </a>
                <p class="mt-2 text-sm text-black dark:text-white">Leading Miners Work Here.</p>
              </div>
              <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-bold text-black dark:text-white tracking-widest text-md mb-3">AboutUS</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">About</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">career</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Privacy</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Term</a>
                    </li>
                  </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-bold text-black dark:text-white tracking-widest text-md mb-3">Product</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Academy</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Charity</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Gift Card</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Research</a>
                    </li>
                  </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-bold text-black dark:text-white tracking-widest text-md mb-3">Service</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Buy Crypto</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Referrel</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">OTC Trading</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Affiliate</a>
                    </li>
                  </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-bold text-black dark:text-white tracking-widest text-md mb-3">Support</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Term</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Privacy</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Trading Rules</a>
                    </li>
                    <li>
                      <a class="text-black dark:text-white hover:text-yellow-500" href="#">Feedback</a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div class="bg-gray-900">
              <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-white text-sm text-center sm:text-left">© 2021 Copyright
                  <a href="https://instagram.com/its.vishkrish" rel="noopener noreferrer" class="text-gray-400 ml-1" target="_blank">@Developer</a>
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a class="text-gray-200">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-200">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-200">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-200">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </footer>






        </div>
      </div>
    </div>


  );
}

export default App;
