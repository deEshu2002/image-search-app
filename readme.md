<!-- GETTING STARTED -->

## Getting Started

This is an example on how to start this image searching application which uses unsplash API to generate the images.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- pnpm
  ```sh
  sudo npm install -g pnpm
  ```

### Installation

_Below is an example of how start the react application with your API Keys._

1. Get a free API Key at [https://unsplash.com/developers](https://unsplash.com/developers)
2. Clone the repo
   ```sh
   git clone https://github.com/deEshu2002/image-search-app.git
   ```
3. Setup front end
   ```sh
   cd react-front && pnpm install
   ```
4. Install NPM packages for backend
   ```sh
   cd serve && npm install
   ```
5. Create file inside serve folder `.env` and paste your api keys as following
   ```sh
    EXPRESS_APP_API_KEY=9000;
    UNSPLASH_API_ACCESS_KEY="YOUR_API_KEY";
   ```
6. now start the server
   ```sh
   cd ..
   cd serve && ts-node-esm index.ts
   cd react-front &&  pnpm run dev
   ```