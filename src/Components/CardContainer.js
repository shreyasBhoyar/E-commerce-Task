import { Card } from "./Card.js";

class CardsContainer{
    constructor(allprodData){
        this.allprodData=allprodData;
        this.isMounted=false;
    }

    render(){
        //creating elements
        const cards=document.createElement("div")
        const cardsContainer=document.createElement("div");
        const Heading=document.createElement("div");
        
        //assigning classes to elements
        cards.classList.add("cards")
        cardsContainer.classList.add("container");

        //creating single card for each data entry
        cardsContainer.appendChild(cards);
        this.allprodData.forEach(element => {
            const c1 = new Card(element);
            c1.mount(cards);
        });

        return cardsContainer;
    }
    
    mount(el){
        if (this.isMounted) return
        if(el){
            el.appendChild(this.render());
            this.isMounted = true;
            return;
        }
        document.body.appendChild(this.render());
        this.isMounted = true;
        return;
    }
    
}


export {CardsContainer}