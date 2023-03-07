import { motion } from "framer-motion";
import HandleDigits from "../../hooks/HandleDigits";
import { useColorMode } from "../../hooks/UseColorMode";

type DownloadButtonProps = {
    downloads: number,
}

export default function ({downloads}:DownloadButtonProps ) {

    const isDarkMode = useColorMode(state => state.mode)

    return (
              <motion.div className={`${isDarkMode?"text-gray-100":"text-slate-800"} inline-flex gap-2 items-center mt-1.5 text-sm dark:text-white cursor-pointer`}>
                <motion.p className="font-bold text-base ">{HandleDigits(downloads)}</motion.p>
                <motion.p className="font-bold text-base ">Downloads</motion.p>
              </motion.div>
            )
}