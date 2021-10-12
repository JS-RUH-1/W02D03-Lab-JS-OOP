function creatPerson(name, age, gender, interests, img) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.img = img;
  this.bio = function () {
    let str = interests[0] + " ," + interests[1];

    return (
      "name is  " +
      name +
      "\r\n age is " +
      age +
      "\r\n gender is " +
      gender +
      "\r\n interests are " +
      str
    );
  };
}

let person1 = new creatPerson(
  "mohammed",
  18,
  "male",
  ["play", "coding", "write blogs"],
  "./image/mohammed.png"
);
let person2 = new creatPerson(
  "khaled",
  20,
  "male",
  ["read", "eat", "play"],
  "./image/khaled.jfif"
);
let person3 = new creatPerson(
  "fahad",
  25,
  "male",
  ["play video games", "watch moves", "coding"],
  "./image/fahad.jfif"
);

let img1 = document.createElement("img");
img1.setAttribute("src", person1.img);
img1.setAttribute("id", "img1");
img1.setAttribute("onclick", "print(this)");
img1.setAttribute("data-bs-toggle", "modal");
img1.setAttribute("data-bs-target", "#exampleModal");

let img2 = document.createElement("img");
img2.setAttribute("src", person2.img);
img2.setAttribute("id", "img2");
img2.setAttribute("onclick", "print(this)");
img2.setAttribute("data-bs-toggle", "modal");
img2.setAttribute("data-bs-target", "#exampleModal");

let img3 = document.createElement("img");
img3.setAttribute("src", person3.img);
img3.setAttribute("id", "img3");
img3.setAttribute("onclick", "print(this)");
img3.setAttribute("data-bs-toggle", "modal");
img3.setAttribute("data-bs-target", "#exampleModal");

// console.log(person1.img);
document.body.appendChild(img1);
document.body.appendChild(img2);
document.body.appendChild(img3);
// $("#myModal").modal(options);
function print(e) {
  let modal = document.getElementById("popUp");
  if (e.id == "img1") modal.innerText = person1.bio();
  else if (e.id == "img2") modal.innerText = person2.bio();
  else if (e.id == "img3") modal.innerText = person3.bio();
}
