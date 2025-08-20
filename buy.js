const element = document.getElementById('order');
const myname = document.getElementById("myname");
const add = document.getElementById("add");

element.addEventListener("click",myfunction);
function myfunction() {
    if (myname.value === "" || add.value === "") {
        alert("From is empty.");
    } else {
       alert("Order placed successfully.");
        window.location.href = "./index.html"; 
    }
}