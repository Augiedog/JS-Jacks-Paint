function configureListeners() {
    // select img elements  | why will document.querySelectorAll('img') not work here?    
    let images = document.getElementsByTagName('img')

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById(images[i].id).addEventListener('mouseenter', addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseleave', removeOpacity)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
                price = '$14.99 / Gallon'
                colorName = 'Lime Green'
                updatePrice(colorName, price)
            break;           
        case 'pn2':
                price = '$11.14 / Gallon'
                colorName = 'Medium Brown'  
                updatePrice(colorName,price)  
            break;            
        case 'pn3':
                price = '$22.99 / Gallon'
                colorName = 'Royal Blue'
                updatePrice(colorName, price) 
            break;   
        case 'pn4':
                price = '$13.42 / Gallon'
                colorName = 'Solid Red'
                updatePrice(colorName, price)  
            break;   
        case 'pn5':
                price = '$21.98 / Gallon'
                colorName = 'Solid White'
                updatePrice(colorName, price)       
            break;   
        case 'pn6':
                price = '$4.99 / Gallon'
                colorName = 'Solid Black'
                updatePrice(colorName, price)        
            break;   
        case 'pn7':
            price = '$8.22 / Gallon'
                colorName = 'Solid Cyan'
                updatePrice(colorName, price) 
            break;   
        case 'pn8':
            price = '$11.99 / Gallon'
                colorName = 'Solid Purple'
                updatePrice(colorName, price)   
            break;   
        case 'pn9':
            price = '$14.99 / Gallon'
                colorName = 'Solid Yellow'
                updatePrice(colorName, price) 
            break;   
          default:              
    }

    function updatePrice(colorName, price) {       
        // select element with corresponding id
        // display price
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        //display color name
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}
// Augiedog