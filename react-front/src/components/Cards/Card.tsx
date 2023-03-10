import { motion, useWillChange } from "framer-motion";
import HandleDigits from "../../hooks/HandleDigits";
import { useColorMode } from "../../hooks/UseColorMode";
import { CardProps } from "../../types";
import DownloadButton from "./DownloadButton";
import ImageContents from "./ImageContents";
import ImageEmbeddedButtons from "./ImageEmbeddedButtons";
import SocialTags from "./SocialTags";

function Card({
  id,
  downloads,
  imageLink,
  downloadImage,
  info,
  info_alt,
  instagramTag,
  likes,
  userName,
  userTag,
  userProfilePhoto,
  twitterTag,
  signalVisibility = false,
}: CardProps) {
  const isDarkMode = useColorMode((state) => state.mode);
  const willChange = useWillChange();

  return (
    <motion.div className={`flex flex-col  w-full`}>
      <motion.div className={` relative`}>
        <motion.div className={`flex justify-center ${isDarkMode ? "!bg-slate-400": "!bg-slate-100"}`} style={{ willChange }}>
          <motion.img
            src={imageLink}
            className={`${
              signalVisibility
                ? ""
                : "rounded-t-lg"
            } aspect-auto object-center object-contain `}
          />
        </motion.div>

        {signalVisibility && (
          <ImageEmbeddedButtons downloadImage={downloadImage} />
        )}
      </motion.div>
      <motion.section
        className={` rounded-b-lg p-5 ${
          isDarkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <motion.div className={`${signalVisibility ? "p-5":""} flex flex-col`}>
          <motion.div className="flex flex-row justify-between ">
            <motion.div id="user-info" className={`flex space-x-4`}>
              <motion.div className={`flex gap-4`}>
                <motion.img
                  src={userProfilePhoto}
                  className={`w-8 h-8 rounded-full`}
                />
                <motion.div className={`flex-1 min-w-0`}>
                  <motion.p
                    className={`text-sm font-medium truncate ${
                      isDarkMode ? "text-slate-100" : "text-gray-900"
                    }`}
                  >
                    {userName}
                  </motion.p>
                  <motion.p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } text-sm italic`}
                  >
                    @{userTag}
                  </motion.p>
                </motion.div>
              </motion.div>
              {signalVisibility && (
                <SocialTags
                  instagramTag={instagramTag}
                  twitterTag={twitterTag}
                />
              )}
            </motion.div>
            <motion.div id="image-info" className="flex gap-6">
              {signalVisibility && <DownloadButton downloads={downloads} />}
              <motion.div
                className={`${signalVisibility ? "items-center":"items-end"} hover:text-slate-900 inline-flex gap-1 text-sm cursor-pointer text-gray-900 dark:text-white items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={`${isDarkMode ? "white": "black"}`}
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <motion.p className={`font-bold ${signalVisibility ? "text-lg":"text-sm"} ${isDarkMode ? "text-slate-100": "text-slate-900"}`}>
                  {HandleDigits(likes)}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          {signalVisibility && (
            <ImageContents id={id} info={info} info_alt={info_alt} />
          )}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Card;
