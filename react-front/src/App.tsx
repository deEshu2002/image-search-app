import { useEffect, useState } from "react";
import { ImageData } from "./components/Card";
import Navbar from "./components/Navbar";
import GetImages from "./hooks/GetImages";
import Card from "./components/Card";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "./components/Modal";
import { useColorMode } from "./hooks/UseColorMode";
import { SkeletonCard } from "./components/Skeleton";

export interface IProps {
  setMyVar: Dispatch<SetStateAction<ImageData[]>>;
}

function App() {
  const mode = useColorMode((state) => state.mode);
  const [loading, setLoading] = useState(true);

  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    GetImages().then((data) => {
      setLoading(false);
      const newArr = data as ImageData[];
      const appendsData = [...newArr, ...imageData];
      setImageData(appendsData as ImageData[]);
    });
  }, []);

  function mapProps(elem: ImageData) {
    const id = elem.id,
      downloads = elem.downloads,
      downloadImage = elem.downloadImage,
      imageLink = elem.imageLink,
      info = elem.info,
      infoALt = elem.info_alt,
      instagramTag = elem.instagramTag,
      likes = elem.likes,
      twitterTag = elem.twitterTag,
      user = elem.user,
      userName = elem.userName,
      userProfilePhoto = elem.userProfilePhoto;

    return {
      id,
      downloads,
      downloadImage,
      imageLink,
      info,
      infoALt,
      instagramTag,
      likes,
      twitterTag,
      user,
      userName,
      userProfilePhoto,
      modal,
      setModal,
    };
  }

  function getModalProps() {
    const props = imageData.find((elem) => elem.id === selectedId) as ImageData;
    return { ...props, modal, setModal };
  }

  return (
    <>
      <div
        className={`${
          mode ? "bg-slate-800 text-white" : "bg-white"
        } flex flex-col items-center relative ${
          modal ? "-z-10 overflow-y-hidden " : "z-10"
        }`}
      >
        <Navbar setMyVar={setImageData} />
        <div className={`w-4/6 ${modal ? "h-[90vh]" : "h-auto"}`}>
          {loading ? (
            <SkeletonCard />
          ) : (
            <div
              className={`columns-3xs ${modal ? "mt-0 " : "mt-16 mb-16"} gap-4`}
            >
              {imageData.map((elem, idx) => {
                const props = mapProps(elem);
                return (
                  <motion.div
                    layoutId={elem.id.toString()}
                    onClick={() => {
                      setSelectedId(elem.id);
                      props.setModal(true);
                    }}
                    className="mb-4 break-inside-avoid"
                    key={idx}
                  >
                    <Card {...props} />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
        {modal && <Modal {...getModalProps()} />}
      </div>
    </>
  );
}

export default App;
