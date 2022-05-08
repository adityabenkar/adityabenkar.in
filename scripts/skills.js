/** @format */

const skillsData = [
  {
    value: "HTML",
    classname: "html",
    iconclass: "fab fa-html5",
    percent: "70%",
  },
  {
    value: "CSS",
    classname: "css",
    iconclass: "fab fa-css3-alt",
    percent: "80%",
  },
  {
    value: "JavaScript",
    classname: "js",
    iconclass: "fab fa-js-square",
    percent: "75%",
  },
  {
    value: "jQuery",
    classname: "jquery",
    iconclass: "fas fa-code",
    percent: "50%",
  },
  {
    value: "NodeJS",
    classname: "nodejs",
    iconclass: "fab fa-node-js",
    percent: "60%",
  },
  {
    value: "MySql",
    classname: "mysql",
    iconclass: "fas fa-database",
    percent: "65%",
  },
  {
    value: "java",
    classname: "java",
    iconclass: "fab fa-java",
    percent: "70%",
  },
];

const container = document.querySelector("#Skills .container");
skillsData.forEach((element) => {
  let container2 = document.createElement("div");
  container2.className = "skill-items ${element.classname}";
  container2.innerHTML = `
  
  <div class="distance">
    <h2 class="icon-text"><i class="${element.iconclass}"></i>${element.value}</h2>
    <h2 class="percent">${element.percent}</h2>
  </div>
  <div class="bar" id="${element.classname}"></div>
  
  `;
  container.appendChild(container2);
});
