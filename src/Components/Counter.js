import { Cart } from "./Cart.js";
class Counter{

    constructor(id,individualData){
        this.count = 0;
        this.suffix = id;
        this.individualData = individualData
    }

    increment(){
        this.count = this.count+1;
        Cart.incrementCart(this.individualData)
        this.updateCount();
    }
    
    decrement(){
        if(this.count>0){
            
        this.count = this.count-1;
        Cart.decrementCart(this.individualData)
        this.updateCount();
        }
    }
    
    updateCount(){
        const countValue = document.getElementById(`countValue-${this.suffix}`);
        countValue.innerText = this.count
    }

    render(){
        const counterContainer = document.createElement("div");
        const controlContainer = document.createElement("div")
        const countValue = document.createElement("p");
        const incButton = document.createElement("button");
        const decButton = document.createElement("button");

        counterContainer.setAttribute("class","counterContainer")
        controlContainer.setAttribute("class","controlContainer")
        countValue.setAttribute("id",`countValue-${this.suffix}`)
        incButton.classList.add("navigator")
        countValue.classList.add("navigator")
        decButton.classList.add("navigator")
        incButton.setAttribute("id",`increment-${this.suffix}`)
        decButton.setAttribute("id",`decrement-${this.suffix}`)

        countValue.innerText = this.count
        incButton.innerText = "+"
        decButton.innerText = "-"

        incButton.addEventListener("click",this.increment.bind(this))
        decButton.addEventListener("click",this.decrement.bind(this))
    
     
    counterContainer.appendChild(incButton)
    counterContainer.appendChild(countValue)
    counterContainer.appendChild(decButton)
    
        return counterContainer;
    }
    
    mount(parent){
        
    
        if(parent){
            parent.appendChild(this.render())
            return;
        }
        document.body.appendChild(this.render())
    
    }
}

export {Counter};