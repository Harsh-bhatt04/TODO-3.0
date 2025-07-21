// // import React from 'react'
// import {Link} from 'react-router-dom'

// function Navigation() {
//   return (
//     <header>
//       <div className='logo'>TODO 3.O</div>
//       <nav>
//           <ul>
//           <li>
//               <Link className="nav_link" to="/">
//                 Wallet
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" to="/view-all-tasks">
//                 View All Tasks
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" to="/create-task">
//                 Create Task
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" to="/view-task">
//                 View Task
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" to="/update-task">
//                 Update Task
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" to="/delete-task">
//                 Delete Task
//               </Link>
//             </li>
//           </ul>
//         </nav>
//     </header>
//   )
// }

// export default Navigation

// import React from 'react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="logo text-2xl font-bold tracking-wide">TODO 3.O</div>
        <div className="flex-1 flex justify-end items-center">
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <nav className="hidden md:block ml-6">
            <ul className="flex flex-row gap-6">
              <li>
                <Link
                  className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
                  to="/"
                >
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
                  to="/view-all-tasks"
                >
                  View All Tasks
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
                  to="/create-task"
                >
                  Create Task
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
                  to="/view-task"
                >
                  View Task
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
                  to="/update-task"
                >
                  Update Task
                </Link>
              </li>
              <li>
                <Link
                  className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
                  to="/delete-task"
                >
                  Delete Task
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Mobile menu */}
      <nav
        className={`md:hidden absolute top-full right-0 w-full bg-gray-900 transition-all duration-300 z-40 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-2 px-4 py-3">
          <li>
            <Link
              className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link
              className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
              to="/view-all-tasks"
              onClick={() => setMenuOpen(false)}
            >
              View All Tasks
            </Link>
          </li>
          <li>
            <Link
              className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
              to="/create-task"
              onClick={() => setMenuOpen(false)}
            >
              Create Task
            </Link>
          </li>
          <li>
            <Link
              className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
              to="/view-task"
              onClick={() => setMenuOpen(false)}
            >
              View Task
            </Link>
          </li>
          <li>
            <Link
              className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
              to="/update-task"
              onClick={() => setMenuOpen(false)}
            >
              Update Task
            </Link>
          </li>
          <li>
            <Link
              className="nav_link px-3 py-2 rounded hover:bg-gray-800 transition block"
              to="/delete-task"
              onClick={() => setMenuOpen(false)}
            >
              Delete Task
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
