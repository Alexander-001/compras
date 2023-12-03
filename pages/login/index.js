const btnIniciar = document.querySelector("#btnIniciar");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

btnIniciar.addEventListener("click", () => {
  const valueEmail = email.value;
  const { isError, errorMessage } = isValidEmail(valueEmail);
  if (isError) {
    alert(errorMessage);
  }
  window.location.assign("/pages/home");
});

const isValidEmail = (email) => {
  const returnData = { errorMessage: "", isError: false };
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(email)) {
    returnData.errorMessage = "El correo no es valido";
    returnData.isError = true;
  }
  return returnData;
};
