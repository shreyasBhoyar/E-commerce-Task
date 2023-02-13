import { Counter } from "./Counter.js";

class Card{
    constructor(prodDetails){
        this.prodDetails = prodDetails;
        this.id = this.prodDetails.id;
        this.counter = new Counter(this.id,this.prodDetails);  
    }

    render(){
        //creating elements
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardImageDiv = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardTitle = document.createElement('h3');
        const cardContentDiv = document.createElement('div');
        const cardContent = document.createElement('p');
        const price = document.createElement('p')
        const counterDiv = document.createElement('div');


        //assigning classes and IDs
        card.classList.add("card");
        card.classList.add("singleLine");
        card.id = "card"+"-"+this.id;
        cardHeader.classList.add("card-header");
        cardImageDiv.classList.add("card-img");
        cardContentDiv.classList.add("card-content");
        
        price.classList.add("price")

        //setting initial values
       
        price.innerText = `INR: ${this.prodDetails.price}`
        cardContent.innerText = this.prodDetails.title;
        cardImage.src = this.prodDetails.image;

        //mounting counter to card
        this.counter.mount(counterDiv)

        //appending elements to main div
        card.appendChild(cardHeader);
        card.appendChild(cardImageDiv);
        cardImageDiv.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardContentDiv);
        cardContentDiv.appendChild(cardContent);
        card.appendChild(price)
        card.appendChild(counterDiv);


        //returing the main div from a render function
        return card;

    }

    mount(parent){
        if(parent){
            parent.appendChild(this.render())
            return;
        }
        document.body.appendChild(this.render())
    
    }


}

export {Card};