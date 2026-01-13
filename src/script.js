console.log("Connected to all your plug daddy");

const alertOverlay = document.getElementById("alert");

document.addEventListener("click", (e) => {
  const trigger = e.target.closest(".project-card");
  if (!trigger) return;

  const type = trigger.dataset.alert;

  document
    .querySelectorAll(".alert-box")
    .forEach((b) => b.classList.remove("active"));

  alertOverlay.classList.add("active");
  document
    .querySelector(`.alert-box[data-box="${type}"]`)
    .classList.add("active");
});

document.querySelectorAll(".closeAlert").forEach((btn) => {
  btn.onclick = () => {
    alertOverlay.classList.remove("active");
    document
      .querySelectorAll(".alert-box")
      .forEach((b) => b.classList.remove("active"));
  };
});
