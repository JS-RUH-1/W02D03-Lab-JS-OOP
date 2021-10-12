function creatCar(company, model, colour, image, registration_number, price) {
  (this.company = company),
    (this.model = model),
    (this.colour = colour),
    (this.image = image),
    (this.registration_number = registration_number),
    (this.price = price),
    (this.showMore = function () {
      return (
        "copmany : " +
        this.company +
        "<br/> model: " +
        this.model +
        "<br/> colour: " +
        this.colour +
        "<br/> registration_number: " +
        this.registration_number +
        "<br/> price: " +
        this.price
      );
    });
}

const car1 = new creatCar(
  "lexus",
  "LX570",
  "white",
  "./image/lex.jfif",
  "1",
  400000
);
const car2 = new creatCar(
  "BMW",
  "i8",
  "black",
  "./image/bmw.jfif",
  "2",
  1000000
);
const car3 = new creatCar(
  "mercedes  ",
  "S500",
  "Gold",
  "./image/mar.jfif",
  "3",
  350000
);

// let allCars = document.getElementById("allCars");
// // console.log(allCars);
// allCars.innerHTML =
//   " <img onclick=" +
//   car1.showMore() +
//   " src=" +
//   car1.image +
//   "> <img onclick=" +
//   car1.showMore() +
//   " src=" +
//   car2.image +
//   "> <img onclick=" +
//   car1.showMore() +
//   " src=" +
//   car3.image +
//   ">";
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

img1.setAttribute("src", car1.image);
img2.setAttribute("src", car2.image);
img3.setAttribute("src", car3.image);
// pImg1.innerHTML = car1.showMore();
function print(e) {
  let pImg1 = document.getElementById("pImg1");
  let pImg2 = document.getElementById("pImg2");
  let pImg3 = document.getElementById("pImg3");

  let img = e.id;
  if (img == "img1") pImg1.innerHTML = car1.showMore();
  else if (img == "img2") pImg2.innerHTML = car2.showMore();
  else if (img == "img3") {
    pImg3.innerHTML = car3.showMore();
  }
}
addEventListener("load", function () {
  let arr = [car1, car2, car3];
  let arrp = arr.map((e) => e.price);
  let index = arrp.indexOf(Math.min(...arrp));
  console.log(arrp);
  console.log(Math.min(...arrp));
  this.document.getElementById("chep").innerHTML =
    "<b> The cheapest  car is: </b><br/>" + arr[index].showMore();
});
