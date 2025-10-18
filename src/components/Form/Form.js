const modal = document.querySelector(".modal");
const inputName = modal.querySelector("#name");
const inputEmail = modal.querySelector("#email");
const textarea = modal.querySelector("#message");
const errorMessages = modal.querySelectorAll(".error");
const form = modal.querySelector("form");
const modalPopap = document.querySelector(".modalPopap");
const overlay = document.querySelector(".overlay");  
const overlayPopap = document.querySelector(".overlayPopap");  

const CloseModal = (modal, overlay) => {
  modal.classList.remove("modalOpened");
  overlay.classList.remove("modalOpened");
  document.body.style.overflow = "";
};

const OpenModal = (modal, overlay) => {
  modal.classList.add("modalOpened");  
  overlay.classList.add("modalOpened");
  document.body.style.overflow = "hidden";
};

const formValidate = (id, index) => {
  if (id.value.trim() === "") {
    errorMessages[index].style.display = "block";
    return false;
  } else {
    errorMessages[index].style.display = "none";
    return true;
  }
};

async function sendFormData(data) {
  fetch(
    "https://24.javascript.pages.academy", {
      method: "POST",
      data,
    }
  ).then((response) => {
    if (response.ok) {
      return { success: true };
    }

    throw new Error();
  }).catch((error) => error);
  return { success: true };
}
    

async function handleSubmit(e) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const response = await sendFormData(data);
  if (response.success) {
    CloseModal(modal, overlay);
    modalPopap.innerHTML = `<p>Форма успешно отправлена</p>`;
    OpenModal(modalPopap, overlayPopap);
                
  } else {
    CloseModal(modal, overlay);
    modalPopap.innerHTML = `<p>Оштбка сервера</p>`;
    OpenModal(modalPopap, overlayPopap);
  }
}


const validateHandler = (evt) => {
  evt.preventDefault();
  let isValide = true;
  if (!formValidate(inputName, 0)){
    isValide = false;
  }
  if (!formValidate(inputEmail, 1)){
    isValide = false;
  }
  if (!formValidate(textarea, 2)){
    isValide = false;
  }


  if (isValide) {
    handleSubmit();
  }
};
overlayPopap.addEventListener("click", () => {
  CloseModal(modalPopap, overlayPopap);
});

export { CloseModal, OpenModal, validateHandler };