/** @format */

const collegeData = [
  {
    id: "1",
    imagesrc: "./images/bvimed.jfif",
    degree: "Bachelor of computer application",
    college: "bharati vidyapeeth deemed university | BDU",
    span: "2018-2021",
  },
  {
    id: "2",
    imagesrc: "./images/yc.jpg",
    degree: "HSC science",
    college: "yashwantrao chavan institute of science | CSMU",
    span: "2016-2018",
  },
];

const Education = document.getElementById("Education");
collegeData.forEach((element) => {
  const collegeContainer = document.createElement("div");
  collegeContainer.innerHTML = `
    <div class="college" data-aos="fade-down" id="college${element.id}">
        <div class="img-container">
        <img src="${element.imagesrc}" />
        </div>
        <div class="info">
        <h2>${element.degree}</h2>
        <p>${element.college}</p>
        <p>${element.span}</p>
        </div>
    </div>
    `;
  Education.appendChild(collegeContainer);
});
