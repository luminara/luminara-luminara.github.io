const column = document.querySelectorAll(".column");
const limit = 10;

async function getImg() {
  let response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=" + limit,
  );
  return await response.json();
}

async function addImg() {
  for (let i = 0; i < column.length; i++) {
    let images = await getImg();
    for (let j = 0; j < limit; j++) {
      let imageLink = images[j].url;
      let img = document.createElement("img");
      img.src = imageLink;
      column[i].appendChild(img);
    }
  }
}

addImg();
