function showLoginTab() {

    document.querySelector(".modal-bg").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
}
document.querySelector("#closeBtn").addEventListener("click", closepopup());

function closepopup() {
    document.querySelector(".modal-bg").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}
function changeModal() {

    if (document.querySelector(".box").style.display != "none") {

        document.querySelector(".box").style.display = "none";
        document.querySelector(".box-3").style.display = "block";
    }
    else {
        document.querySelector(".box").style.display = "block";
        document.querySelector(".box-3").style.display = "none";
    }
}

var signupData = JSON.parse(localStorage.getItem("signUpList")) || [];


function getDetails() {
    var NAME = document.getElementById("name").value
    var EMAIL = document.getElementById("signup-email").value
    var NUMBER = document.getElementById("number").value
    var PASSWORD = document.getElementById("signup-password").value

    var signupObj = {
        name: NAME,
        email: EMAIL,
        number: NUMBER,
        password: PASSWORD
    }
    if (NAME == "" || EMAIL == "" || NUMBER == "" || PASSWORD == "") {
        var alertDiv = document.createElement("div");
        var popupText = document.createElement("p");
        popupText.style.padding = "2px";
        popupText.style.backgroundColor = "red";
        popupText.style.color = "white";
        popupText.style.fontSize = "12px"
        popupText.innerText = "Please Fill All Details"
        alertDiv.append(popupText);
        alertDiv.style.position = "absolute";
        alertDiv.style.top = "83%";
        alertDiv.style.left = "35%";

        document.querySelector(".box").append(alertDiv);
        setTimeout(function closeAlert() {
            alertDiv.remove();
        }, 3000)

        return;
    }
    var flag = true;
    signupData.map(function (elem) {
        if (elem.email == EMAIL || elem.number == NUMBER) {
            var alertDiv = document.createElement("div");
            var popupText = document.createElement("p");
            popupText.style.padding = "2px";
            popupText.style.backgroundColor = "red";
            popupText.style.color = "white";
            popupText.style.fontSize = "12px"
            popupText.innerText = "User Already Exists"
            alertDiv.append(popupText);
            alertDiv.style.position = "absolute";
            alertDiv.style.top = "83%";
            alertDiv.style.left = "35%";

            document.querySelector(".box").append(alertDiv);
            setTimeout(function closeAlert() {
                alertDiv.remove();
            }, 3000)

            flag = false;
            return;

        }

    })
    if (flag == true) {
        signupData.push(signupObj);
        localStorage.setItem("signUpList", JSON.stringify(signupData));
        document.getElementById("name").value = "";
        document.getElementById("signup-email").value = ""
        NUMBER = document.getElementById("number").value = ""
        PASSWORD = document.getElementById("signup-password").value = ""
        var alertDiv = document.createElement("div");
        var popupText = document.createElement("p");
        popupText.style.padding = "2px";
        popupText.style.backgroundColor = "green";
        popupText.style.color = "white";
        popupText.style.fontSize = "12px"
        popupText.innerText = "Account Created"
        alertDiv.append(popupText);
        alertDiv.style.position = "absolute";
        alertDiv.style.top = "83%";
        alertDiv.style.left = "37%";

        document.querySelector(".box").append(alertDiv);
        setTimeout(function closeAlert() {
            alertDiv.remove();
        }, 3000)

    }
}
function checkDetails() {
    var EMAIL = document.getElementById("login-email").value;
    var PASSWORD = document.getElementById("login-password").value;
    signupData.map(function (elem) {
        if (elem.email == EMAIL && elem.password == PASSWORD) {

            closepopup();
            document.querySelector("#navbar_login").innerText = elem.name;
            return;
        }
    })
    var alertDiv = document.createElement("div");
    var popupText = document.createElement("p");
    popupText.style.padding = "2px";
    popupText.style.backgroundColor = "red";
    popupText.style.color = "white";
    popupText.style.fontSize = "12px"
    popupText.innerText = "Wrong Credentials"
    alertDiv.append(popupText);
    alertDiv.style.position = "absolute";
    alertDiv.style.top = "85%";
    alertDiv.style.left = "35%";

    document.querySelector(".box-3").append(alertDiv);
    setTimeout(function closeAlert() {
        alertDiv.remove();
    }, 3000)

    return;
}
//    document.querySelector("#closeBtn").addEventListener("click",(event)=>{
//         var parent = event.target.parentNode.parentNode
//         console.log(parent)
//         parent.style.animationName = "modalclose"
//         parent.style.animationDuration = ".5s"

//     })
