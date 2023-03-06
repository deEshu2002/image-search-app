import { motion } from "framer-motion";
import HandleDigits from "../../hooks/HandleDigits";
import { useColorMode } from "../../hooks/UseColorMode";

type DownloadButtonProps = {
    downloads: number,
}

export default function ({downloads}:DownloadButtonProps ) {

    const isDarkMode = useColorMode(state => state.mode)

    return (
              <motion.div className={`${isDarkMode?"text-gray-100":"text-slate-800"}`}>
                <motion.p>{HandleDigits(downloads)}</motion.p>
                <motion.p>Downloads</motion.p>
              </motion.div>
            )
}