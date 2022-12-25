const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

// for (let image of images) {
//   galleryList.insertAdjacentHTML(
//     "beforeend",
//     `<li class = "gallery__item"> <img src = "${image.url}" alt = "${image.alt}" width = "400"/></li>`
//   );
// }

galleryList.insertAdjacentHTML(
  "beforeend",
  images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join("")
);

const titleRef = document.createElement("h1");
galleryList.before(titleRef);

titleRef.classList.add("gallery__title");
titleRef.textContent = "Gallery";
titleRef.style.color = "grey";
titleRef.style.textAlign = "center";
titleRef.style.textTransform = "uppercase";
titleRef.style.fontSize = "66px";
