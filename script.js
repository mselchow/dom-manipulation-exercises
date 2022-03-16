const container = document.querySelector(".container");

// <p> with red text "Hey I'm red!"
const content1 = document.createElement("p");
content1.style.cssText = "color: red;";
content1.textContent = "Hey I'm red!";

container.appendChild(content1);

// <h3> with blue text "I'm a blue h3!"
const content2 = document.createElement("h3");
content2.style.cssText = "color: blue;";
content2.textContent = "I'm a blue h3!";

container.appendChild(content2);

// <div> with black border and pink background with
//   <h1> that says "I'm in a div"
//   <p> that says "ME TOO!"

const div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);