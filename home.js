const bill = document.querySelector("#bill");
const option = document.querySelector("#option");
const people = document.querySelector("#people");
const btn = document.querySelector(".modal-close");
const modalBody = document.querySelector(".modal-body1");
const result = document.querySelector("#result");

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  let total = parseInt(bill.value);
  let nopeople = parseInt(people.value);
  let pricePerPerson = total / nopeople;

  let tip;

  if (option.value == "Excellent") {
    tip = Math.ceil(pricePerPerson / 2);
  } else if (option.value == "Average") {
    tip = Math.ceil(pricePerPerson / 3);
  } else {
    tip = Math.ceil(pricePerPerson / 4);
  }

  const totalTip = tip * parseInt(nopeople);
  result.append(`Total Tip: ${totalTip}`);

  bill.value = "";
  people.value = "";

  $(".modal").on("hidden.bs.modal", function () {
    //   $(".modal-body1").html("");
    location.reload();
  });
});
