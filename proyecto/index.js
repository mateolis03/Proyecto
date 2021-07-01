var firebaseConfig = {
    apiKey: "AIzaSyBM1BhByq9fPLWUXfCbx6kGcyYYkO9tFhQ",
    authDomain: "proyecto-9c3d0.firebaseapp.com",
    projectId: "proyecto-9c3d0",
    storageBucket: "proyecto-9c3d0.appspot.com",
    messagingSenderId: "253954373236",
    appId: "1:253954373236:web:f0a82e0e0bc7f6fd92c321"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function writeData() {
    firebase.database().ref("User").push({
        user: document.getElementById("username").value,
        password: document.getElementById("password").value,
    })

}