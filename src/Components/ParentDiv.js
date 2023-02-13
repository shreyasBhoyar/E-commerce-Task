import { CardsContainer } from "./Components/CardContainer.js";
import { Cart } from "./Components/Cart.js";

class ParentDiv{

    constructor(data){
        this.data = data;
    }

    render(){
        const div = document.createElement("div");

       const cc =  new CardsContainer(data);
       

    }
}