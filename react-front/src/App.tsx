import { useEffect, useState } from "react";
import { ImageData } from "./types";
import Navbar from "./components/Navbar";
import GetImages from "./hooks/Getimages";
import Card from "./components/Card";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "./components/Modal";
import { useColorMode } from "./hooks/UseColorMode";

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
    const onPageLoad = () => {
      GetImages().then((data) => {
        setLoading(false);
        const newArr = data as ImageData[];
        const appendsData = [...newArr, ...imageData];
        setImageData(appendsData as ImageData[]);
      });
    };

    if (document.readyState == "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }
    return () => window.removeEventListener("load", onPageLoad);
  }, []);

  function mapProps(elem: ImageData) {
    const data = {
      id: elem.id,
      downloads: elem.downloads,
      downloadImage: elem.downloadImage,
      imageLink: elem.imageLink,
      info: elem.info,
      infoALt: elem.info_alt,
      instagramTag: elem.instagramTag,
      likes: elem.likes,
      twitterTag: elem.twitterTag,
      user: elem.user,
      userName: elem.userName,
      userProfilePhoto: elem.userProfilePhoto,
    };

    return {
      ...data,
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
        } flex flex-col items-center relative h-screen`}
      >
        <Navbar setMyVar={setImageData} />
        <div className={`w-4/6  ${modal ? "-z-10" : "z-10"}`}>
          {!loading && (
            <div
              className={`columns-3 ${modal ? "mt-0 " : "mt-12 mb-16"} gap-4`}
            >
              {imageData.map((elem, idx) => {
                const props = mapProps(elem);
                return (
                  <div
                    onClick={() => {
                      setSelectedId(elem.id);
                      props.setModal(true);
                    }}
                    className="mb-4 relative break-inside-avoid"
                    key={idx}
                  >
                    <Card {...props} />
                  </div>
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