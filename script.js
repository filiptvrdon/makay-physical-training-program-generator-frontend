const processForm = function (e) {
  const user = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    email: document.querySelector("#email").value,
    age: document.querySelector("#age").value,
    weight: document.querySelector("#weight").value,
    height: document.querySelector("#height").value,
    bodyfat: document.querySelector("#bodyfat").value,
    activityLevel: document.querySelector("#activityLevel").value,
    trainingLevel: document.querySelector("#trainingLevel").value,
    maxSquat: document.querySelector("#maxSquat").value,
    maxDeadlift: document.querySelector("#maxDeadlift").value,
    maxOHP: document.querySelector("#maxOHP").value,
    maxPullups: document.querySelector("#maxPullups").value,
  };
  console.log(user);
};

let btnSubmit = document.querySelector("#trainigDataFormSubmitButton");

btnSubmit.addEventListener("click", processForm);
