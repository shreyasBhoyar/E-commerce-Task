
import { CardsContainer } from "./Components/CardContainer.js";
import { Cart } from "./Components/Cart.js";
import { Header } from "./Components/Header.js";
import {data} from "./data/data.js";

const url = "https://fakestoreapi.com/products";
const root = document.getElementById("root");
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    const HeaderComponent = new Header();
    HeaderComponent.mount(root)
    const cc = new CardsContainer(data);
    cc.mount(root)
    
    const cart = new Cart(data);
    cart.mount(root);
})


