/*
5 Main Methods
Method	Kaam	Syntax
setItem()	Data save karna	localStorage.setItem("key", "value")
getItem()	Data lena	localStorage.getItem("key")
removeItem()	Ek item delete	localStorage.removeItem("key")
clear()	Sab delete	localStorage.clear()
length	Total items count	localStorage.length
*/


/*
Important Points to Remember ✅
LocalStorage sirf string store karta hai

Objects/Arrays ke liye JSON.stringify() and JSON.parse() use karo

Data permanently rehta hai

Tab close, browser close, computer restart → data safe

Manual delete karna padega

Size limit = 5-10 MB

Jyada data mat store karo

Synchronous hai

Code ko block karta hai (lekin normally bahut fast hai)

Same origin policy

Same website ka data hi access kar sakte ho
*/

const inputName = document.getElementById("input-name");
const button = document.getElementById("button");
const userName = document.getElementById("userName");

button.addEventListener("click", () => {
  const value = inputName.value;

  if (value == "") {
    alert("Plz Enter Name");
  }

  userName.innerText = value;
  console.log(value);

  localStorage.setItem("name", value);

  location.reload;
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  userName.innerText = value;
});



// Store Objects & Arrays (Important!) ⭐
// Problem: LocalStorage sirf string store kar sakta hai

// Solution: JSON.stringify() and JSON.parse()

const user = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

// Convert object to string and save
localStorage.setItem("user", JSON.stringify(user));