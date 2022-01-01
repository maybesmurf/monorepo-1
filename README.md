# Welcome to Doggo Sports

## Currently working:

- Web HMR works
- API Server Nodemon works
- Front-end talks to backend talks to database!

## Active Task

## Need to:

- A db seed with Prisma
- npm scripts to make life so easy
- docs aren't dockerized...Do I want to?
- Figure out how different environments work for dev/testing/stage/prod
- Figure out k8s

# How to Use

## Create a new image

### Only use -d if you arent worried about the logs

docker compose up --build -d

## Use the existing image

### Only use -d if you arent worried about the logs

docker compose up -d

### To do mobile development (non-docker, just expo):

Mobile is not dockerized - nor does it need to be. These will be built into their binaries and served that way.
Make sure that you set a `LOCAL_NETWORK_IP` in `.env` for your local development.

This app does not run using docker. Follow the Expo docs.

#### For iOS:

To put the app in a hot-reload environment on your iPhone, cd into `mobile`, then `npm run start`. Take out your iOS device and download the Expo Go app. Once it is done, open the CAMERA APP, and point it at the QR code in the terminal. Tap the "open Expo" thing that shows up. If it gives you some prompts the first time and doesn't open the app. Close Expo Go and scan the QR code again.

#### For Android:

https://docs.expo.dev/workflow/android-studio-emulator/

Follow this page until the `Multiple abd versions` header to get setup.

Once you've got Android Studio installed, make sure that you have an emulator device running. Open Android Studio, click the three dots in the top right, and create a virtual device if you don't have one. Start your virtual device. Come back to the terminal, `npm run start`, then type `a`. Magic.

## Ports

Web front-end: 80
API: 5000
Postgres: 5432
pgAdmin: 5050

Firebase:

- UI: 4000
- Auth: 4001
- Storage: 4002
