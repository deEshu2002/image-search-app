import { createApi } from "unsplash-js";
import { Random, Stats } from "unsplash-js/dist/methods/photos/types";

type randomImage = Random & Stats;

const api = createApi({
  accessKey: "d5aeca2e0d9de8c9724b8ccffa6e1c7f0b9eefd73acc42ce1d64be3b421f8ad9",
});

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
    downloads = items.downloads;

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
    downloads,
  };
}

const getRandomPhotos = async (query?: string) => {
  let reportArray;
  try {
    await api.photos.getRandom({ count: 20, query: query }).then((response) => {
      if (response.type === "success") {
        const responseArray = response.response as randomImage[];

        reportArray = responseArray.map((items) => mapRandomSearchData(items));
      } else {
        throw new Error("failed getting dat from api");
      }
    });
  } catch (err) {
    console.log("Error setting up Unsplash API:" + err);
  }
  console.log(reportArray);
  return reportArray;
};

export default function HandleQuery(query?: string) {
  let imageData;

  const promise = new Promise((resolve, reject) => {
    if (query) {
      getRandomPhotos(query)
        .then((array) => {
          imageData = array;
          resolve(imageData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getRandomPhotos()
        .then((array) => {
          imageData = array;
          resolve(imageData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  console.log(imageData);

  return promise;
}
