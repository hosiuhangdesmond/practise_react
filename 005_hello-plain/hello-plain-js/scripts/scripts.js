document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    // prevent default form submission
    e.preventDefault();

    // get the element to display the message
    const msg = document.querySelector("#msg");

    // retrieve and validate user input
    const name = document.querySelector("#name").value;
    if (name === "") {
      // display the error message
      msg.classList.add("error");
      msg.textContent = "Please enter a name";
    } else {
      // display the message
      msg.classList.remove("error");
      msg.textContent = `Hello, ${name}!`;
    }
  });
});
