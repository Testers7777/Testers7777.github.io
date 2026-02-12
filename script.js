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

const styles = [".lemonade", ".dark-blue", ".blue-white", ".ronflex"];
const buttons = document.querySelectorAll(styles.join(", "));

const input = document.querySelector(".cmds");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const data = button.dataset.box.split("/");

    document.documentElement.style.setProperty("--bg", data[0]);
    document.documentElement.style.setProperty("--text", data[1]);
  });
});

const cursor = document.querySelector(".cursor");

let typingTimeout;

input.addEventListener("input", () => {
  cursor.classList.add("typing");

  clearTimeout(typingTimeout);

  typingTimeout = setTimeout(() => {
    cursor.classList.remove("typing");
  }, 600);
});

document.addEventListener("keydown", (e) => {
  if (!e.target.classList.contains("cmds")) return;

  const terminalA = {
    contact: `[Discord] 
      <a href="https://discord.com/users/737355664682123313">testers.corp</a>
      <br> [GitHub] 
      <a href="https://github.com/Testers7777">Testers7777</a>
      <br>[Telegram] 
      <a href="https://t.me/cpaskrtapeur">https://t.me/cpaskrtapeur</a>`,
    about: `French.<br>
Front-end developer aiming to become full-stack.<br>
Passionate about running and coding.<br>
I tend to lose interest quickly — except when it truly matters.`,
  };

  if (e.key === "Enter") {
    const unValue = e.target.value.toLowerCase();
    if (terminalA[unValue]) {
      const base = document.querySelector(".base");

      let newTerminalPR = document.createElement("span");
      let inputLine = document.createElement("div");
      let cd = document.createElement("span");
      let cursor = document.createElement("span");
      let cmds = document.createElement("input");

      const oldCursor = document.querySelector(".cursor");
      const oldCd = document.querySelector(".cd");

      e.target.disabled = true;
      oldCursor.remove();

      inputLine.className = "input-line";
      cd.className = "cd";
      cursor.className = "cursor";
      cmds.className = "cmds";
      newTerminalPR.className = "answer";

      newTerminalPR.innerHTML = terminalA[unValue];
      cd.textContent = oldCd.textContent;

      base.append(newTerminalPR);
      base.append(inputLine);
      inputLine.append(cd);
      inputLine.append(cursor);
      inputLine.append(cmds);

      cmds.focus();
    }
  }
});
