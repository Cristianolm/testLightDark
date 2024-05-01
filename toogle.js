const LIGHTMODE = "light";
const DARKMODE = "dark";

if (
  localStorage.theme === LIGHTMODE ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: light)").matches)
) {
  document.documentElement.classList.remove(DARKMODE);
}

window.onload = () => {
  const checkbox = document.querySelector("#themeCheckbox");

  if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    checkbox.checked = true;
  }

  checkbox?.addEventListener("change", function (e) {
    if (e.target instanceof HTMLInputElement && e.target.checked) {
      document.documentElement.classList.remove(DARKMODE);
      localStorage.theme = LIGHTMODE;
    } else {
      document.documentElement.classList.add(DARKMODE);
      localStorage.theme = DARKMODE;
    }
  });
};
