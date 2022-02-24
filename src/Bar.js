import React from "react";
import "./index.css"
import './App.css';
import { Dropdown } from "dropdown";



const Bar = () => {
    return (
        <div>
        
         <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div class="mobile-menu hidden md:hidden">

                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700 uppercase">Batman</a>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700 uppercase">superman</a>

            </div>
        </div>

    )

}

export default Bar;






