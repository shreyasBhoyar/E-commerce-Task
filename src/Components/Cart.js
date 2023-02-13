class Cart{

        static productsCount = 0;
        static total = 0.00;

    static incrementCart(individualData){
        console.log("Method is called")
        this.productsCount+=1
        this.total +=parseFloat(individualData.price.toFixed(2));
        console.log(this.productsCount)
        this.updateCart();
    }

    static decrementCart(individualData){
        console.log("Method is called")
        this.productsCount-=1
        this.total -=parseFloat(individualData.price.toFixed(2));
        console.log(this.productsCount)
        this.updateCart();
    }

    static updateCart(){
        //updating the item count in cart
        const totalItems = document.getElementById('totalItems');
        totalItems.innerText = `Total items in the cart : ${this.productsCount}`

        //updating the amount in cart
        const totalAmount = document.getElementById('totalAmt');
        totalAmount.innerText = `Current Total INR: ${this.total.toFixed(2)}`
    }


    render(){
        //creating elements
        const cartDiv = document.createElement('div')
        const totalItems = document.createElement('p')
        const newLine = document.createElement('br')
        const heading = document.createElement('h2')
        const totalAmount = document.createElement('p')
        const cart = document.createElement('div')

        //adding classes to the elements
        cartDiv.classList.add("cart")
        cartDiv.classList.add("singleLine")
        totalAmount.id = "totalAmt"
        totalItems.id = "totalItems"

        //setting initial values
        totalAmount.innerText = "Current Total INR: 0"
        totalItems.innerText = "Total items in the cart : 0"   

        heading.innerText = "CART"

        cartDiv.appendChild(heading)
        cartDiv.appendChild(newLine)
        cartDiv.appendChild(totalItems);
        cartDiv.appendChild(totalAmount);
        cartDiv.appendChild(cart);
        

        return cartDiv;      
    }

    mount(parent){
        if(parent){
            parent.appendChild(this.render())
            return;
        }
        document.body.appendChild(this.render())
    
    }
}

export {Cart};