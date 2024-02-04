import { nanoid } from "nanoid";
import copy from "clipboard-copy";
import "./style.css";

const newPasswordBtn = document.querySelector("#newPasswordBtn");
const copyPasswordBtn = document.querySelector("#copyBtn");
const generatedPassword = document.querySelector("#generatedPassword");

newPasswordBtn.addEventListener("click", () => {
  const password = nanoid();
  generatedPassword.innerHTML = password;
}),

copyPasswordBtn.addEventListener("click", () => {
  copy(generatedPassword.innerHTML);
  alert("Password copied to clipboard!");
});

