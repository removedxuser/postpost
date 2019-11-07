const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {
	return admin
		.firestore()
		.collection('notifications')
		.add(notification)
		.then((doc) => console.log('notification added', doc));
};

exports.projectCreated = functions.firestore.document('projects/{projectID}').onCreate((doc) => {
	const project = doc.data();
	const notification = {
		content: `Added A New Post! (${project.title})`,
		user: `${project.authorFirstName} ${project.authorLastName}`,
		time: admin.firestore.FieldValue.serverTimestamp()
	};

	return createNotification(notification);
});

exports.newUserJoined = functions.firestore.document('users/{userId}').onCreate((doc) => {
	const newUser = doc.data();
	const notification = {
		content: 'Joined the party',
		user: `${newUser.firstName} ${newUser.lastName}`,
		time: admin.firestore.FieldValue.serverTimestamp()
	};

	return createNotification(notification);
});
