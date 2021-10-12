class Car {
  constructor(company, model, color, image, rigsterationNumber, price) {
    this.company = company;
    this.model = model;
    this.color = color;
    this.image = image;
    this.rNumber = rigsterationNumber;
    this.price = price;
  }

  showmore() {
    return (
      "Company: " +
      this.company +
      "\n   " +
      "Model: " +
      this.model +
      "\n   " +
      "Color: " +
      this.color +
      "\n   " +
      "Rigsteration Number: " +
      this.rNumber +
      "\n   " +
      "Price: " +
      this.price +
      "\n   "
    );
  }
}

let myCar1 = new Car(
  "Ford",
  2014,
  "Black",
  "https://ymimg1.b8cdn.com/resized/car_model/3609/pictures/3353188/mobile_listing_main_03.jpg",
  1121,
  100000
);
let myCar2 = new Car(
  "Toyota",
  2016,
  "red",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJsf12Ijr-rLxi-LgAB20U9vq82XFx1jcvYEmig4nqbgIZ1fEt7xMEVbt9F-igzuv85c&usqp=CAU",
  2421,
  120000
);
let myCar3 = new Car(
  "Mitsubishi",
  2012,
  "White",
  "https://carwow-uk-wp-2.imgix.net/frost-white.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750",
  3521,
  80000
);
//First Object
let clickTimes1 = 0;
document.getElementById("company").innerHTML = myCar1.company;
document.getElementById("image").src = myCar1.image;
document.getElementById("image").addEventListener("click", function () {
  if (clickTimes1 == 0) {
    document.getElementById("model").innerHTML = myCar1.showmore();
    clickTimes1 = 1;
  } else {
    document.getElementById("model").innerHTML = "";
    clickTimes1 = 0;
  }
});

//Second Object
let clickTimes2 = 0;
document.getElementById("company2").innerHTML = myCar2.company;
document.getElementById("image2").src = myCar2.image;
document.getElementById("image2").addEventListener("click", function () {
  if (clickTimes2 == 0) {
    document.getElementById("model2").innerHTML = myCar2.showmore();
    clickTimes2 = 1;
  } else {
    document.getElementById("model2").innerHTML = "";
    clickTimes2 = 0;
  }
});

//Third Object
let clickTimes3 = 0;
document.getElementById("company3").innerHTML = myCar3.company;
document.getElementById("image3").src = myCar3.image;
document.getElementById("image3").addEventListener("click", function () {
  if (clickTimes3 == 0) {
    document.getElementById("model3").innerHTML = myCar3.showmore();
    clickTimes3 = 1;
  } else {
    document.getElementById("model3").innerHTML = "";

    clickTimes3 = 0;
  }
});
//On load Display the Cheapest Price
window.addEventListener("load", function () {
  if (myCar1.price < myCar2.price && myCar1.price < myCar3.price) {
    alert("The ceheapest Car we Have is :  " + myCar1.company);
    return;
  } else if (myCar2.price < myCar1.price && myCar2.price < myCar3.price) {
    alert("The ceheapest Car we Have is :  " + myCar2.company);
    return;
  }
  alert("The ceheapest Car we Have is :  " + myCar3.company);
  return;
});
