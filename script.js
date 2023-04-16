async function api() {
  const response = await fetch("https://api.adviceslip.com/advice");

  const jsonData = await response.json();
  data = jsonData.slip;

  const heading = (document.getElementById(
    "heading"
  ).innerText = `ADVIC  #${data.id}`);

  const advice = (document.getElementById(
    "advice"
  ).innerText = `"${data.advice}"`);
}

api();
const button = document
  .getElementById("button")
  .addEventListener("click", () => {
    api();
  });
