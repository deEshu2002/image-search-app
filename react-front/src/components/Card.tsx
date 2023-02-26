import { Dispatch, SetStateAction } from "react";
import HandleDigits from "../hooks/HandleDigits";
import { useColorMode } from "../hooks/UseColorMode";

export interface ImageData {
  id: number;
  downloads: number;
  downloadImage: string;
  imageLink: string;
  info?: string;
  info_alt?: string;
  instagramTag?: string;
  likes: number;
  twitterTag?: string;
  user: string;
  userName: string;
  userProfilePhoto: string;
}

export interface CardProps extends ImageData {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

function Card({
  id,
  downloads,
  imageLink,
  downloadImage,
  info,
  info_alt,
  instagramTag,
  likes,
  user,
  userName,
  userProfilePhoto,
  twitterTag,
  modal,
  setModal,
}: CardProps) {
  const mode = useColorMode((state) => state.mode);

  return (
    <div
      className={`flex flex-col h-fit flex-grow-0 flex-shrink max-w-[24rem] ${
        mode ? "bg-slate-800 " : "bg-white"
      } border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}
      onClick={() => setModal(true)}
    >
      <a href="#">
        <img
          className="rounded-t-lg w-full aspect-auto max-h-[34rem] object-cover object-center"
          src={`${imageLink}`}
          alt=""
        />
      </a>
      <div className="p-5 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src={`${userProfilePhoto}`}
              alt="Profile image"
            />
          </div>
          <div
            className={`${
              mode ? "text-white" : "text-gray-900"
            } flex-1 min-w-0`}
          >
            <p className="text-sm font-medium truncate dark:text-white">
              {user}
            </p>
            <p
              className={`${
                mode ? "text-slate-400" : "text-gray-500"
              } text-sm truncate dark:text-gray-400 italic`}
            >
              @{userName}
            </p>
          </div>
          <div
            className={`${
              mode ? "text-white" : "text-gray-900"
            } inline-flex gap-1 items-center text-sm  dark:text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <p className="font-bold">{HandleDigits(likes)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
