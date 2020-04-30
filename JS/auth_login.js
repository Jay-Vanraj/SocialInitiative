auth.onAuthStateChanged(user => {
    if (user) {
    console.log("User logged in : ",user);
    }
    else {
        console.log("user logged out!!!")
    }
});

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login_btn = document.querySelector("#login_btn");
login_btn.addEventListener("click", (e) => {
    const em = email.value;
    const pass = password.value;
    console.log(em,pass);
    auth.signInWithEmailAndPassword(em,pass).then(cred => {
        console.log(cred.user);
        window.location.href = "dashboard.html";
    })
})