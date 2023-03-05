


async function postQuery(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: 'no-cache',
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrer:'no-referrer',
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

async function fetchRandomImg() {
  const url = "http://localhost:4000/generateRandomImages";
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function GetImages(query?: string) {

  let imageData;

  const promise = new Promise((resolve, reject) => {
    if (query) {
      postQuery("http://localhost:4000/searchImages", {
        query: query,
      })
        .then((json) => {
          imageData = JSON.parse(json.data);
          resolve(imageData);
        })
        .catch((err) => {
          console.log(err);
          reject(Error("API calls with query didn't work"));
        });
    } else {
      fetchRandomImg()
        .then((json) => {
          imageData = JSON.parse(json.data);
          resolve(imageData);
        })
        .catch((err) => {
          console.log(err);
          reject(Error("API calls for random Images didn't work"));
        });
    }
  });

  return promise;
}
