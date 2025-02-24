document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("h1-title").innerText = "Ahh DOM Paisi";
});

/* <h2>Get the value from an input field</h2> */

// 1. set eventHandler to a button
document.getElementById("btn-update").addEventListener("click", function () {
  //   console.log("bur");
  // 2. get the value from input field
  const nameInput = document.getElementById("name-input");
  let value = nameInput.value;
  console.log(Boolean(value));
  // condition for blank space
  if (!Boolean(value)) {
    document.getElementById("name").innerText = "Input field empty";
  } else {
    //   3. set the value to the desired element
    document.getElementById("name").innerText = value;
    nameInput.value = ""; //Clearing the field
  }
});
