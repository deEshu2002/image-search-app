import { Dispatch, SetStateAction } from "react";

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
