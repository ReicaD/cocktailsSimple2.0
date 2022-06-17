import React from "react";

const Navbar = () => {
  return (
<div class="bg-gray-100 h-screen">
  <nav class="bg-white px-6 relative shadow-md">
    <div class="flex flex-row justify-between items-center py-2">
      <h3 class="font-semibold text-3xl text-gray-500">Webapp</h3>
      <div class="group flex flex-col items-center">
        <button class="p-2 rounded-lg md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-10 fill-current" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
        </button>
        <div class="hidden group-hover:block md:block absolute md:static bg-white inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600">
          <div class="flex flex-row justify-center items-center text-center font-semibold text-gray-500">
            <a class="px-6 py-1 flex flex-col md:flex-row md:items-center" href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-current h-10 md:h-5 px-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg>
              Home 
            </a>
            <a class="px-6 py-1 flex flex-col md:flex-row md:items-center" href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-current h-10 md:h-5 px-2" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
              Account 
            </a>
            <a class="px-6 py-1 flex flex-col md:flex-row md:items-center" href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-current h-10 md:h-5 px-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg>
              Logout 
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
    
  );
};

export default Navbar;
