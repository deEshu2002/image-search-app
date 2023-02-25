interface photoResponse {
  id: string;
  likes: number;
  user: string;
  userName: string;
  userProfilePhoto: string;
  imageLink: string;
  downloadImage: string;
  info: string;
  info_alt: string;
  twitterTag: string;
  instagramTag: string;
  download: number;
}

// Example POST method implementation:
async function postQuery(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function fetchRandomImg() {
  const url = "http://localhost:4000/generateRandomImages";
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
}

export default function Getimages(query?: string) {
  if (typeof query !== "undefined") {
    postQuery("http://localhost:4000/searchImages", {
      query: query,
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  } else {
    fetchRandomImg();
  }
}
