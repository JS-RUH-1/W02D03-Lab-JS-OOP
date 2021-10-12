class Car {
    constructor(company, model, colour, image, registration, price) { 
        this.company =  company;
        this.model = model;  
        this.colour = colour;
        this.image = image;
        this.registration = registration;
        this.price = price;
    }
    showMore() {
        let modal = document.createElement("div");
        modal.innerHTML = `
        <div id="open-modal" class="modal">
  <div>
    <a href="#" title="Close" class="modal-close" onclick="closeModal(this);">Close</a>
    <h1>${this.company} ${this.model}</h1>
    <div>Company: ${this.company}</div>
    <div>Model: ${this.model}</div>
    <div>Color: ${this.colour}</div>
    <div>Price: ${this.price}</div>
    <div>Registration: ${this.registration}</div>
    </div>
    `;
    return document.body.appendChild(modal);
    }
}

const cars = [
    new Car(
        "Ferrari",
        "LaFerrari",
        "red",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1200px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg",
        "2345",
        1400000
        ),
    new Car(
        "Pagani",
        "Huayra",
        "blue",
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg",
        "1230",
        1400000
        ),
    new Car(
        "McLaren",
        "Elva",
        "blue",
        "https://mclaren.scene7.com/is/image/mclaren/Elva%201%20F3Q:crop-16x9",
        "9999",
        1700000
        ),
    new Car(
        "Bentley",
        "Bacalar",
        "gold",
        "https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/e/bentley_mulliner_bacalar_2021_0000.jpg",
        "5555",
        1900000
        ),
];

const closeModal = (e) => {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
};

window.onload = () => {
    
    cars.forEach(car => {
        var node = document.createElement("div");
        node.innerHTML = `<img height="250px" width="400px" src="${car.image}" />`;
        node.addEventListener("click", () => {
            car.showMore();
        })
        document.getElementById("grid").appendChild(node);  
    });

    // cheapest car open
    cars.sort((a,b) => a.car-b.car)[0].showMore();
    
}