import { Dispatch, SetStateAction } from "react";

export interface CardData {
  id: string;
  downloads: number;
  downloadImage: string;
  imageLink: string;
  info?: string;
  info_alt?: string;
  instagramTag?: string;
  likes: number;
  twitterTag?: string;
  userName: string;
  userTag: string;
  userProfilePhoto: string;
}

export interface CardProps extends CardData {
  selectedId: string | null;
}