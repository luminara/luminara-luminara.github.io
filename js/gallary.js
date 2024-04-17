const column = document.querySelectorAll(".column");
const limit = 10;

addImg();

async function addImg() {
  let width = 300;
  for (let i = 0; i < column.length; i++) {
    for (let j = 1; j < limit; j++) {
      let height = Math.round(80 + Math.random() * 500);
      let color = generateRandomHexColor();
      console.log(color);
      let imageLink = `https://placehold.co/${width}x${height}/${color}/${color}`;
      let img = document.createElement("img");
      img.src = imageLink;
      column[i].appendChild(img);
    }
  }
}

function generateRandomHexColor() {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
}
