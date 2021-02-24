import React from 'react'
import Avatar from '../assets/images/avatar.jpg'

const Navbar = ({nav}) => {
  return (
    <nav className={` ${nav.navOpen ? 'navOpen' : 'navHide'} z-50 w-40 h-screen bg-gray-900 text-white fixed flex items-center justify-center`}> 
        <div onClick={() => nav.setNavOpen((is) => !is)} className="text-xl text-white font-bold absolute top-2 right-3 cursor-pointer ">&times;</div>
        <ul> 
          <div className="flex mb-10 justify-between items-center">
            <img src={Avatar} alt="avatar" className="rounded-full w-10" />
            <span className="text-gray-300 font-semibold text-xs">Mr. Sagar</span>
          </div>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" ><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" className="heroicon-ui"></path></svg>
              <span className="ml-3">Search</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" className="primary"></path><path d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z" className="secondary"></path></svg>
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" className="secondary"></path></svg>
              <span className="ml-3">WatchList</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
              <span className="ml-3">Movies</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
            <svg fill="currentColor" width="24" height="24"><path d="M21 6h-8.586l2.293-2.293-1.414-1.414L10 5.586 6.707 2.293 5.293 3.707 7.586 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 3v2h-2V9h2zm-2 4h2v2h-2v-2zM4 8h11v10H4V8z"></path></svg>
              <span className="ml-3">Series</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
              <span className="ml-3">Originals</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="flex items-center justify-start">
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" className="icon-cog"><path d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" className="primary"></path><circle cx="12" cy="12" r="2" className="secondary"></circle></svg>
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
