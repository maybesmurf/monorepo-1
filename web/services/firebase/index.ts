import firebase, { initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator } from "firebase/auth"

export const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY || "demo-development",
	authDomain: process.env.FIREBASE_AUTH_DOMAIN || "demo-development",
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "demo-development",
	projectId: process.env.FIREBASE_PROJECT_ID || "demo-development",
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "demo-development",
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "demo-development",
	appId: process.env.FIREBASE_APP_ID || "demo-development",
	measurementId: process.env.FIREBASE_MEASUREMENT_ID || "demo-development"
}

const app = () => {
	if (!firebase?.getApp()) {
		return initializeApp(firebaseConfig)
	}
}

app()

export const auth = getAuth()
if (process.env.NEXT_APP_ENVIRONMENT !== "production") {
	connectAuthEmulator(auth, "firebase-emulators:4001")
}

export default app
