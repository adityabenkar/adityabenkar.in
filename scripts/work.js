/** @format */

const workData = [
  {
    imgsrc: "./images/curcon.PNG",
    imgalt: "currencyConvertor",
    href: "https://adityabenkar.github.io/currencyConvertor-github.io/",
  },
  {
    imgsrc: "./images/weaAp.PNG",
    imgalt: "weatherApp",
    href: "https://adityabenkar.github.io/weatherApp.github.io/",
  },
  {
    imgsrc: "./images/tictactoe.PNG",
    imgalt: "tictactoeGame",
    href: "https://adityabenkar.github.io/tictactoeGame.github.io/",
  },
];

export const boxContainer = document.querySelector("#Work .box-container");
workData.forEach((element) => {
  const box = document.createElement("div");
  box.className = "box";
  box.id = "box";
  box.innerHTML = `
    <div class="modal">
        <img src="${element.imgsrc}" alt="${element.imgalt}" />
        <a
        href="${element.href}"
        target="_blank"
        >View</a
        >
    </div>
    `;
  boxContainer.appendChild(box);
});
