class Header{
    render(){
        //creating elements

        const HeaderDiv = document.createElement('div')
        const Heading = document.createElement('h2')

        HeaderDiv.classList.add("headerDiv")
        Heading.classList.add("heading")

        Heading.innerText = "E-commerce Task"
        HeaderDiv.appendChild(Heading)
        
        return HeaderDiv;
    }

    mount(parent){
        
    
        if(parent){
            parent.appendChild(this.render())
            return;
        }
        document.body.appendChild(this.render())
    
    }
}

export {Header};