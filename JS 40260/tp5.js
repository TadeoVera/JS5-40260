/* Es una página que busca simular un Ecommerce. Se muestra el catálogo de Computadoras con sus variados precios teniendo en cuenta el impuesto IVA y detallandolo desde el principio.
Además se tendrá un semi sistema de carrito de compras, al cual se le podrán adjuntar diversas cantidades del mismo producto y sumarlas para llegar con los diferentes productos al total de la compra */

const producto = [
    { nombre: "pc gamer 1", precioIn: 200000 }, //Lista de productos mediante un array
    { nombre: "pc gamer 2", precioIn: 210000 },
    { nombre: "pc gamer 3", precioIn: 220000 },
]

const buttonDos = document.getElementById("buttonDos"); //Boton que cambia la pagina al tema claro
buttonDos.addEventListener("click", function() {
    html.className = "lightHTML" 
    div.className = "light"
    titulo.className = "light"
    parrafo.className = "light"
    buttonDos.className = "darkHTML"
    button.className = "lightHTML"
});

const button = document.getElementById("button"); //Boton para el tema oscuro
button.addEventListener("click", function() {
    html.className = "darkHTML"
    div.className = "dark"
    titulo.className = "dark"
    parrafo.className = "dark"
   button.className = "darkHTML"
   buttonDos.className = "lightHTML"
});


iva = (n) => n * 21 / 100;  // Operacion Iva pre calculada

let html = document.getElementById("html") // Elementos varios del html para interactuar con JS

let titulo = document.getElementById("titulo")

let div = document.getElementById("contenedor")

let parrafo = document.getElementById("parrafo")

let cart = [] // Carrito array

let seleccion = prompt("¿Desea comprar una PC gamer?") // Peticion al usuario

while (seleccion != "si" && seleccion != "no") {  // Control de flujo 
    alert("por favor ingrese si o no")
    seleccion = prompt("Desea comprar una PC gamer si o no?")
}

if (seleccion == "si") {
    alert ("a continuacion nuestra lista de productos") 
    let todosLosProductos = producto.map( (producto) =>  // Mapeando/encontrando el producto segun la peticion 
    producto.nombre + ": " + "$" + producto.precioIn + " IVA: " + iva(producto.precioIn) + " Precio Final: " + (iva(producto.precioIn) + producto.precioIn) + " ");

    alert (todosLosProductos.join("// "))
} else if (seleccion == "no") {
    alert ("Gracias por venir, hasta pronto!!")
}

while(seleccion != "no") {                                                                                              
    let productoComprar = prompt ("ingrese nombre de producto para ingresarlo al carrito");
    let precio = 0;
    if(productoComprar == "pc gamer 1" || productoComprar == "pc gamer 2" || productoComprar == "pc gamer 3") {  // segun los diferentes casos va a tener su diferente precio
        switch (productoComprar) {

            case "pc gamer 1":
            precio = iva (200000) + 200000
            break;
        
       
            case "pc gamer 2":
            precio = iva (210000) + 210000
            break;
            
       
            case "pc gamer 3":
            precio = iva (220000) + 220000
            break;
        }
    let unidades = parseInt(prompt("¿cuantas unidades quiere llevar?")); 
    
    cart.push({productoComprar, unidades, precio}); 
    
    } else {
        alert ("No tenemos ese producto")
    }
    
    seleccion = prompt ("¿Desea seguir comprando?")
    
    while(seleccion === "no") {
        alert("Gracias por la compra!! Hasta pronto")
        cart.forEach((cartFinal)=>{
           alert (`Producto: ${cartFinal.productoComprar}, Unidades: ${cartFinal.unidades}, total a pagar por producto $${cartFinal.unidades * cartFinal.precio}`) 
        })                                                              // Mostrando al usuario su carrito
        for(cartFinal of cart){
            let div = document.createElement ("div");
            div.innerHTML = `
            <h2>Producto: ${cartFinal.productoComprar}</h2>
            <p>Unidades: ${cartFinal.unidades}</p>
            <b>Total a pagar por producto $${cartFinal.unidades * cartFinal.precio}</b>
            `;
            contenedor.append(div);
            }
    break;
    }
}