const app = document.getElementById("app");
const image = document.getElementById("image");
const input = document.getElementById("input");

const generate = () => {
  var result = input.value.toUpperCase();
  console.log(result);

  if (result === "BURUNG") {
    image.src =
      "https://png.pngtree.com/png-clipart/20190721/ourlarge/pngtree-cute-vivid-flying-bird-png-image_1564068.jpg";
  } else if (result === "HARIMAU") {
    image.src =
      "https://e7.pngegg.com/pngimages/386/627/png-clipart-tiger-tiger.png";
  } else if (result === "KUCING") {
    image.src =
      "https://png.pngtree.com/png-vector/20201229/ourmid/pngtree-a-blue-and-white-cat-sitting-png-image_2653091.jpg";
  } else {
    image.src =
      "https://e7.pngegg.com/pngimages/515/98/png-clipart-business-executive-service-chief-executive-information-business-service-people.png";
  }
};
