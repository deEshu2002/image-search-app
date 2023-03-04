import { IProps } from "../App";
import { useColorMode } from "../hooks/UseColorMode";
import DarkmodeToggle from "./DarkmodeToggle";
import Searchbar from "./Searchbar";

function Navbar({ setMyVar }: IProps) {
  const mode = useColorMode((state) => state.mode);

  return (
    <nav
      className={`z-50 ${
        mode ? "bg-slate-900" : "bg-white"
      }  w-full shadow sticky top-0 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900`}
    >
      <div
        className={` container flex flex-wrap items-center justify-center gap-10 mx-auto`}
      >
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Image Gallery
          </span>
        </a>

        <Searchbar setMyVar={setMyVar} />

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul
            className={`${mode ? "!bg-slate-900 !text-white" : "!bg-white"} 
             flex flex-col p-4 mt-4 border align-text-bottom border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li className="my-auto">
              <a
                href="#"
                className={` ${
                  mode ? "bg-slate-900 text-white" : "bg-white"
                } block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Explore
              </a>
            </li>
            <li className="my-auto">
              <a
                href="#"
                className={`${
                  mode ? "bg-slate-900 text-white" : "bg-white"
                } block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Collection
              </a>
            </li>
            <li className="my-auto !mr-20 ">
              <a
                href="#"
                className={`
                ${mode ? "bg-slate-900 text-white" : "bg-white"}
                block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Community
              </a>
            </li>

            <DarkmodeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
