class Person {
  constructor(name, age, gender, image, intrest) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.image = image;
    this.intrest = intrest;
  }

  showmore() {
    return (
      "\n   " +
      "Name: " +
      this.name +
      "\n   " +
      "Age: " +
      this.age +
      "\n   " +
      "Gender: " +
      this.gender +
      "\n   " +
      "Intrests: " +
      this.intrest[0] +
      "," +
      this.intrest[1]
    );
  }
}
let person1 = new Person(
  "Ahmed",
  20,
  "Male",
  "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
  ["Football", "Video Game", "Skydiving"]
);
let person2 = new Person(
  "Mohammed",
  25,
  "Male",
  "https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg",
  ["Swimming", " Skydiving", "Video"]
);
let person3 = new Person(
  "Nada",
  28,
  "Female",
  "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
  ["Skydiving", "Video Game", "Skydiving"]
);
//First Object

document.getElementById("name").innerHTML = person1.name;
document.getElementById("image").src = person1.image;
document.getElementById("image").addEventListener("click", function () {
  alert(person1.showmore());
});

//Second Object

document.getElementById("name2").innerHTML = person2.name;
document.getElementById("image2").src = person2.image;
document.getElementById("image2").addEventListener("click", function () {
  alert(person2.showmore());
});

//Third Object
let clickTimes3 = 0;
document.getElementById("name3").innerHTML = person3.name;
document.getElementById("image3").src = person3.image;
document.getElementById("image3").addEventListener("click", function () {
  alert(person3.showmore());
});
