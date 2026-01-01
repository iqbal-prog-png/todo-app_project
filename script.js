let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");
button.addEventListener("click", () => {
  if (input.value === " ") return;
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = input.value;
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.append(span);
  li.append(delBtn); ///mantain order
  list.append(li);
  input.value = " ";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});
