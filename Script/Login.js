// Import Firebase modules only once at the top
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDE4vbeUEyM21uyOSx5N3bmN7DmMFy6PoA",
  authDomain: "brewbuzz-c2d64.firebaseapp.com",
  projectId: "brewbuzz-c2d64",
  storageBucket: "brewbuzz-c2d64.appspot.com",
  messagingSenderId: "560301469726",
  appId: "1:560301469726:web:81c17c2b91cf45e6f33e0f",
  measurementId: "G-98LXCYFNQ2"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get DOM elements
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#LoginButton");



//Add submit handler
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(" Account created!", user);
      alert(" Logged in!");
      window.location.href = "./homepage.html";

    })
    .catch((error) => {
      alert(" Error creating account check credentials");
    });
});
