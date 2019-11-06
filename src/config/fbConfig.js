import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBcoMm7S1ap6sxXcGCyE4vHS7zhuC0si14',
	authDomain: 'postpostmanpost.firebaseapp.com',
	databaseURL: 'https://postpostmanpost.firebaseio.com',
	projectId: 'postpostmanpost',
	storageBucket: 'postpostmanpost.appspot.com',
	messagingSenderId: '841887199433',
	appId: '1:841887199433:web:badca18e41bad8a4289d18',
	measurementId: 'G-RZDYCX02RK'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
