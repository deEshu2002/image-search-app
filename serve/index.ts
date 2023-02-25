import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createApi } from "unsplash-js";
import { Random, Stats } from "unsplash-js/dist/methods/photos/types";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.EXPRESS_APP_API_KEY || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

var urlencodedParser = bodyParser.urlencoded({ extended: true });

const api = createApi({ accessKey: `${process.env.UNSPLASH_API_ACCESS_KEY}` });

type randomImage = Random & Stats;

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

  return {
    id,
    likes,
    user,
    userName,
    userProfilePhoto,
    imageLink,
    downloadImage,
    info,
    info_alt,
    twitterTag,
    instagramTag,
    download,
  };
}

const getRandomPhotos = async (query?: string) => {
  let reportArray;
  try {
    await api.photos.getRandom({ count: 20, query: query }).then((response) => {
      if (response.type === "success") {
        const responseArray = response.response as randomImage[];
        reportArray = JSON.stringify(
          responseArray.map((items) => mapRandomSearchData(items))
        );
      } else {
        throw new Error("failed getting dat from api");
      }
    });
  } catch (err) {
    console.log("Error setting up Unsplash API:" + err);
  }
  return reportArray;
};

app.get("/generateRandomImages", (req: Request, res: Response) => {
  getRandomPhotos().then((array) => {
    res.json({ data: array });
    console.log({ data: array });
  });
});

app.post(
  "/searchImages",
  urlencodedParser,
  bodyParser.json(),
  (req: Request, res: Response) => {
    const query = req.body.query;
    getRandomPhotos(query).then((array) => {
      res.json({ data: array });
      console.log({data: array});
    });
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
