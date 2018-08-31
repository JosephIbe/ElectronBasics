var config = {
    apiKey: "AIzaSyDZ8OP0B9dkXKb_ifVLYA6gflAMEZz6etA",
    authDomain: "electronauth.firebaseapp.com",
    databaseURL: "https://electronauth.firebaseio.com",
    projectId: "electronauth",
    storageBucket: "electronauth.appspot.com",
    messagingSenderId: "215534539953"
};
firebase.initializeApp(config);

const btnRegister = document.getElementById('btnRegister');
const btnLogin = document.getElementById('btnLogin');

const emailField = document.getElementById('emailAddr');
const passField = document.getElementById('pwd');

btnRegister.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(emailField.value, passField.value)
        .then(() => {
            document.location.href = 'welcome.html';
            console.log('Registered');
        })
        .catch((err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
});

btnLogin.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(emailField.value, passField.value)
        .then(() => {
            document.location.href = 'welcome.html';
            console.log('Login Success');
        })
        .catch((err) => {
            if (err) {
                // console.error(err);
                return;
            }
        });
});