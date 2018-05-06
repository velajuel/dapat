var learnMoreButton = document.getElementById("learnMore")
var emailInput = document.getElementById("emailInput")
var contactForm = document.getElementById("contactForm")

function saveEmail() {
  event.preventDefault()

  var data = {
    email: emailInput.value
  }

  fetch("/users", {
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
      "x-csrf-token": document.getElementsByName("csrf-token")[0].content
    },
    method: "POST",
    mode: "cors"
  })
  .then(function(resp) {
    console.log(resp)
    alert("Check your email regularly for updates!")
  })

}

function sendContactEmail() {
  event.preventDefault()
  var data = {"information": {}}
  var inputsArray = Array.from(contactForm.elements)
  var mappedInputsArray = inputsArray.map(function(input) {
    return [input.id, input.value]
  })

  mappedInputsArray.forEach(function([key, value]) {
    return data.information[key] = value
  })

  fetch("/users/ask", {
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
      "x-csrf-token": document.getElementsByName("csrf-token") [0].content
    },
    method: "POST",
    mode: "cors"
  })
  .then(function(resp) {
    alert("Thank you for your enquiry! Expect a response from us soon.")
  })
}

learnMoreButton.addEventListener("click", saveEmail)
contactForm.addEventListener("submit", sendContactEmail)