let hasShownToast = false;

const generalEnquiryRadio = document.getElementById("generalEnquiry");
const supportRequestRadio = document.getElementById("supportRequest");

generalEnquiryRadio.addEventListener("change", updateSelectedRadioStyle);
supportRequestRadio.addEventListener("change", updateSelectedRadioStyle);

function showToast() {
  if (!hasShownToast) {
    const toast = document.getElementById("toast");
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");
    hasShownToast = true;

    setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0", "pointer-events-none");
    }, 3000);
  }
}

function updateSelectedRadioStyle(event) {
  console.log("radio");
  const selectedRadio = event.target;
  const selectedRadioParent = selectedRadio.parentElement;
  const otherRadio =
    selectedRadio.id === "generalEnquiry"
      ? supportRequestRadio
      : generalEnquiryRadio;
  const otherRadioParent = otherRadio.parentElement;

  selectedRadioParent.classList.add("bg-primary-green-lighter", "text-white");
  selectedRadioParent.classList.remove(
    "bg-transparent",
    "text-neutral-gray-medium"
  );

  otherRadioParent.classList.add("bg-transparent", "text-neutral-gray-medium");
  otherRadioParent.classList.remove("bg-primary-green-lighter", "text-white");
}

function validateForm(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById("firstName");
  const firstNameErrorElement = document.getElementById("firstNameError");
  const lastNameInput = document.getElementById("lastName");
  const lastNameErrorElement = document.getElementById("lastNameError");
  const emailInput = document.getElementById("email");
  const emailErrorElement = document.getElementById("emailError");
  const queryTypeInputs = document.querySelectorAll('input[name="queryType"]');
  const queryTypeErrorElement = document.getElementById("queryTypeError");
  const messageInput = document.getElementById("message");
  const messageErrorElement = document.getElementById("messageError");
  const consentCheckbox = document.getElementById("consent");
  const consentErrorElement = document.getElementById("consentError");
  const toast = document.getElementById("toast");

  // Validate that text fields are not empty
  if (firstNameInput.value.trim() === "") {
    firstNameErrorElement.textContent = "This field is required";
    firstNameInput.classList.remove("input");
    firstNameInput.classList.add("input-error");
  } else {
    firstNameErrorElement.textContent = "";
    firstNameInput.classList.remove("input-error");
    firstNameInput.classList.add("input");
  }

  if (lastNameInput.value.trim() === "") {
    lastNameErrorElement.textContent = "This field is required";
    lastNameInput.classList.remove("input");
    lastNameInput.classList.add("input-error");
  } else {
    lastNameErrorElement.textContent = "";
    lastNameInput.classList.remove("input-error");
    lastNameInput.classList.add("input");
  }

  if (emailInput.value.trim() === "") {
    emailErrorElement.textContent = "This field is required";
    emailInput.classList.remove("input");
    emailInput.classList.add("input-error");
  } else if (!validateEmailFormat(emailInput.value)) {
    emailErrorElement.textContent = "Please enter a valid email address";
    emailInput.classList.remove("input");
    emailInput.classList.add("input-error");
  } else {
    emailErrorElement.textContent = "";
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input");
  }

  if (!Array.from(queryTypeInputs).some((input) => input.checked)) {
    queryTypeErrorElement.textContent = "Please select a query type";
  } else {
    queryTypeErrorElement.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageErrorElement.textContent = "This field is required";
    messageInput.classList.remove("input");
    messageInput.classList.add("input-error");
  } else {
    messageErrorElement.textContent = "";
    messageInput.classList.remove("input-error");
    messageInput.classList.add("input");
  }

  if (!consentCheckbox.checked) {
    consentErrorElement.textContent =
      "To submit this form, please consent to being contacted";
  } else {
    consentErrorElement.textContent = "";
  }

  const hasErrors =
    firstNameErrorElement.textContent !== "" ||
    lastNameErrorElement.textContent !== "" ||
    emailErrorElement.textContent !== "" ||
    queryTypeErrorElement.textContent !== "" ||
    messageErrorElement.textContent !== "" ||
    consentErrorElement.textContent !== "";

  if (hasErrors) {
    return;
  }

  showToast();
}

function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
