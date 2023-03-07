import { info } from "console";
import { motion } from "framer-motion";

type ImageContends = {
    id: string,
    info?: string,
    info_alt?: string
}

export default function ImageContents({id,info,info_alt}: ImageContends){
    return (
          <motion.div id="image-contents" className="w-[98%] flex flex-col items-start ml-8 mt-6">
              <motion.h6 className="font-extralight text-xs">{id}</motion.h6>
              {info && <motion.h1 className="font-bold text-3xl">{info}</motion.h1>}
              {info_alt && <motion.h3 className="">{info_alt}</motion.h3>}
            </motion.div>
          )
}