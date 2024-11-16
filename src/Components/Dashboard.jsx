import React from "react";
import Header from "./ui/Header";
import {useTypewriter,Cursor} from 'react-simple-typewriter';

function Dashboard() {
  const [text] = useTypewriter({
    words:['Task Hive','Promising','Unique'],
    loop:{}
  })
  return (
    <div>
      <Header />

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative px-4">
        
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-[rgba(0,128,0,0.5)] via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none"></div>

       
        <main className="flex flex-col items-center text-center mt-20 sm:mt-28 px-4 z-10">
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wide font-['Test_Founders_Grotesk_X-Condensed']">
            We Are <span>{text}</span>
            <Cursor/>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
            Where productivity buzzes—track, manage, and conquer tasks effortlessly.
          </p>

         
          <div className="mt-12 sm:mt-16 text-sm flex flex-col sm:flex-row sm:space-x-8">
            <a
              href="#"
              className="underline hover:no-underline text-gray-400 transition-all duration-200"
            >
              Empowering Innovation with Cutting-Edge Tools
            </a>
            <a
              href="#"
              className="underline hover:no-underline text-gray-400 transition-all duration-200"
            >
              Standing out UI/UX design
            </a>
          </div>

         
          <div className="mt-12 flex items-center bg-zinc-100 px-4 py-2 rounded-full">
            <div className="flex items-center -space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="User 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="User 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="User 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=4"
                alt="User 4"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            
            <span className="ml-4 text-black font-medium">300+ Happy users so far</span>
          </div>
        </main>


<footer className="w-full bg-black py-8 text-gray-400">
  <div className="container mx-auto px-6 sm:px-12 lg:px-20">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      <div className="flex flex-col items-center sm:items-start">
        <div className="mb-4">
          <img
            src="https://play-lh.googleusercontent.com/jxAnQ89NDEh9RZxRmsdAcYGzRpVE6j6mdJYo5gA8F1DBuIH_PKfT_bUvfVRKnuNepRA"
            alt="Logo"
            className="w-10 h-10"
          />
        </div>
        <p className="text-center sm:text-left">Let's connect with our socials</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-discord"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>


      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Support</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="text-white font-semibold mb-4">Community</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white">Inertia</a></li>
          <li><a href="#" className="hover:text-white">Discord</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
        <ul className="space-y-2">
          <li>+91 8109161752</li>
          <li>+91 9691778470</li>
          <li><a href="mailto:hello@sheryians.com" className="hover:text-white">Taskhive@gmail.com</a></li>
          <li>23-B, Indrapuri Sector C, Bhopal (MP), 462021</li>
        </ul>
      </div>
    </div>

  
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
      <p>© {new Date().getFullYear()}  Pvt. Ltd. All Rights Reserved.</p>
    </div>
  </div>
</footer>



      </div>
    </div>
  );
}

export default Dashboard;
