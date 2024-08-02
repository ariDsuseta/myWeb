// feather-icons
feather.replace({ class: "icons-feather" });

// PROGRESS
const progresBar = document.querySelectorAll(".progress .container-progress");
let nilaiAwal = 0;
progresBar.forEach(function (el) {
  const bar = el.lastElementChild.lastElementChild.lastElementChild; // parent element
  const persen = bar.getAttribute("per");
  const span = el.firstElementChild.lastElementChild.querySelector("span");

  const anim = setInterval(() => {
    if (span != null) span.innerHTML = Math.floor((nilaiAwal += 0.6)) + "%";
    if (nilaiAwal >= persen) clearInterval(anim);
    bar.style.width = nilaiAwal + "%";
  }, 10);
});
