import { motion } from "framer-motion";
import { useColorMode } from "../../hooks/UseColorMode";

type ImageEmbeddedButtonsProps = {
  downloadImage: string;
};

export default function ImageEmbeddedButtons({
  downloadImage,
}: ImageEmbeddedButtonsProps) {
  const isDarkMode = useColorMode((state) => state.mode);

  return (
    <motion.div
      id="image-buttons"
      className={`absolute w-[98%] flex justify-between bottom-4 left-6`}
    >
      <motion.div className="flex">
        <motion.button
          className={` ${
            isDarkMode
              ? "text-black border-black hover:text-gray-100 border hover:border-gray-400 hover:bg-gray-600"
              : "text-gray-600 border-gray-600 hover:text-black border hover:border-black hover:bg-gray-100"
          } flex gap-2  focus:ring-4 focus:outline-none font-base rounded-lg text-sm pl-3 pr-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          <motion.p>Share</motion.p>
        </motion.button>
        <motion.button
          className={`${
            isDarkMode
              ? "text-black border-black hover:text-gray-100 border hover:border-gray-400 hover:bg-gray-600"
              : "text-gray-600 border-gray-600 hover:text-black border hover:border-black hover:bg-gray-100"
          } flex gap-2  focus:ring-4 focus:outline-none font-base rounded-lg text-sm pl-3 pr-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <motion.p>Info</motion.p>
        </motion.button>
      </motion.div>
      <motion.a
        type="button"
        target={"_blank"}
        href={downloadImage}
        className={`relative right-2 bottom-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      >
        Download Image
      </motion.a>
    </motion.div>
  );
}
