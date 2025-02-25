
#### Setup Instructions
#### Using Remix
Navigate to the contracts/ folder.
Copy the .sol files one by one into Remix.
Compile and Deploy each contract using Remix IDE.
After deployment, retrieve the updated .json files (ABI and metadata) from the Remix directory tree under artifacts/.
Replace the corresponding .json files in the contexts/ directory of your project.
#### Using Hardhat
Set Up the Environment:

Update hardhat.config.js to use the private key from the .env file:
Ensure the .env file contains your private key in this format:
makefile

PRIVATE_KEY=0x<your_private_key>
Install Hardhat (if not already installed):


npm install --save-dev hardhat
Initialize Hardhat:


npx hardhat
Compile Contracts:


npx hardhat compile
After compilation, locate the .json files for your contracts in the artifacts/ directory.

Replace the corresponding .json files in the contexts/ directory with the updated ones from artifacts/.

#### Final Steps
Install the required dependencies:


npm install
#### Run the development server:
npm run dev



Decentralized applications (Dapps), as we explore the creation and deployment process of a MERN STACK Blockchain Music Artists Social Media Dapp. In this tutorial, we'll walk you through each step, from setting up your development environment to integrating blockchain technology for secure and transparent interactions. Join us as we combine the power of MongoDB, Express.js, React, Nextjs and Node.js with blockchain to revolutionize the way music artists connect with their audience. Whether you're a beginner or an experienced developer, this guide will equip you with the knowledge and skills to bring your Dapp ideas to life. Get ready to innovate and transform the social media landscape with blockchain technology

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v21.6.2 / latest version
  NPM: 10.5.0
```

#### MONGODB DATABASE

```https://www.mongodb.com/
 GET: DATABASE_URL
 GET: DATAMASE_PASSWORD
```

#### PInata IPFS     

```https://www.pinata.cloud/
 GET: API_KEY
 GET:  SECRECT_KEY
```

## PInata IPFS IMAGE UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
            "Content-Type": "multipart/form-data",
          },
```

## PInata IPFS JSON DATA UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
             "Content-Type": "application/json",
          },
```


#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v21.6.2 / latest version
  NPM: 10.5.0
```

#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```https://faucet.polygon.technology/
  Get: Free Test Faucets
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```https://remix-project.org
  OPEN: RemixID
```

#### Polygon Amoy

```https://www.oklink.com/amoy
  OPEN: Polygon Amoy
```

#### Formspree

```https://formspree.io/
  CREATE ACCOUNT: https://formspree.io/
  const [state, handleSubmit] = useForm("YOUR_KEY");
```

#### PACKAGE.JSON

```https://www.theblockchaincoders.com/SourceCode
  {
  "name": "music-dapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": " nodemon index.js",
    "build": "next build",
    "start": "NODE_ENV=production nodemon index.js",
    "lint": "next lint",
    "server": "node index.js",
    "prod": "NODE_ENV=production nodemon index.js"
  },
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "@next/font": "14.0.3",
    "@stripe/stripe-js": "^1.54.2",
    "axios": "^1.6.8",
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "ethers": "^5.5.1",
    "express": "^4.18.2",
    "js-cookie": "^3.0.5",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3",
    "multer": "^1.4.5-lts.1",
    "next": "14.0.3",
    "nodemon": "^3.0.2",
    "path": "^0.12.7",
    "react": "18.2.0",
    "react-audio-player": "^0.17.0",
    "react-dom": "18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.12.0",
    "stripe": "^14.16.0",
    "wavesurfer.js": "^7.7.5",
    "web3modal": "^1.9.5"
  }
}
```
