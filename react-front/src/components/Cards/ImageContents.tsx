import { info } from "console";
import { motion } from "framer-motion";

type ImageContends = {
    id: string,
    info?: string,
    info_alt?: string
}

export default function ImageContents({id,info,info_alt}: ImageContends){
    return (
            <motion.div id="image-contents">
              <motion.h6>{id}</motion.h6>
              {info && <motion.h1>{info}</motion.h1>}
              {info_alt && <motion.h3>{info_alt}</motion.h3>}
            </motion.div>
          )
}