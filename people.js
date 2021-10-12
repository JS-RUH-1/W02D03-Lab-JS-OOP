class Person {
    constructor(name, age, gender, interests, image) { 
        this.name =  name;
        this.age = age;  
        this.gender = gender;
        this.image = image;
        this.interests = interests;
    }
    showMore() {
        let modal = document.createElement("div");
        modal.innerHTML = `
        <div id="open-modal" class="modal">
  <div>
    <a href="#" title="Close" class="modal-close" onclick="closeModal(this);">Close</a>
    <h1>${this.name} </h1>
    <div>age: ${this.age}</div>
    <div>gender: ${this.gender}</div>
    <div>interests: ${this.interests.join(',')}</div>
    </div>
    `;
    document.body.appendChild(modal);
        return JSON.parse(JSON.stringify(this));
    }
}

const people = [
    new Person(
        "Will Smith",
        53,
        "male",
        ["Playing Chess","Music"],
        "https://www.randomlists.com/img/people/will_smith.webp"
        ),
    new Person(
        "Theodore Roosevelt",
        60,
        "male",
        ["exercise","swimming"],
        "https://www.randomlists.com/img/people/theodore_roosevelt.webp"
        ),
    new Person(
        "Oprah Winfrey",
        67,
        "female",
        ["Drawing","Painting"],
        "https://www.randomlists.com/img/people/oprah_winfrey.webp"
        ),
    
];

const closeModal = (e) => {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
};

window.onload = () => {
    
    people.forEach(person => {
        var node = document.createElement("div");
        node.innerHTML = `<img height="250px" width="250px" src="${person.image}" />`;
        node.addEventListener("click", () => {
            person.showMore();
        })
        document.getElementById("grid").appendChild(node);  
    });


}