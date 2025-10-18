import "./style.css";
import { validateHandler, CloseModal, OpenModal } from "./components/Form/Form";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const button = document.querySelector(".buttonModal");
const buttonSubmit = document.querySelector(".buttonSubmit");


button.addEventListener("click", () => {
  OpenModal(modal, overlay);
});

overlay.addEventListener("click", () => {
  CloseModal(modal, overlay);
});
const closeButton = document.querySelector(".closeButton");
closeButton?.addEventListener("click", () => {
  CloseModal(modal, overlay);
});


buttonSubmit.addEventListener("click", validateHandler);
