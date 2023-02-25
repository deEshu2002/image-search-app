import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createApi } from "unsplash-js";
import {  Random, Stats } from "unsplash-js/dist/methods/photos/types";

dotenv.config();

const app: Express = express();
const port = process.env.EXPRESS_APP_API_KEY || 3000;

const api = createApi({ accessKey: `${process.env.UNSPLASH_API_ACCESS_KEY}` });

type randomImage = Random & Stats ;

function mapRandomSearchData(items: randomImage) {
  const id = items.id,
    likes = items.likes,
    user = items.user.name,
    userName = items.user.username,
    userProfilePhoto = items.user.profile_image.small,
    imageLink = items.urls.regular,
    downloadImage = items.links.download,
    info = items.alt_description,
    info_alt = items.description,
    twitterTag = items.user.twitter_username,
    instagramTag = items.user.instagram_username,
    download = items.downloads;

  return { id, likes, user, userName, userProfilePhoto, imageLink ,downloadImage, info, info_alt, twitterTag,instagramTag, download};
}



const getRandomPhotos = async (query?:string) => {
  try {
    await api.photos.getRandom({count:20, query} ).then((response) => {
      if (response.type === "success") {
        const responseArray = response.response as randomImage[];
        const reportArray = responseArray.map((items) => mapRandomSearchData(items));
        console.log(reportArray);
    }else{
          throw new Error("failed getting dat from api");
      }
    });
  } catch (err) {
    console.log("Error setting up Unsplash API:" + err);
  }
};

const query = 'hello'

app.get("/generateRandomImages", (req: Request, res: Response) => {
    getRandomPhotos();
});

app.post("/searchImages", (req: Request, res: Response) => {
    getRandomPhotos(
        query
    );
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

