const productos = [
    {
      nombre: "Rodamiento de Levas ProMax",
      descripcion: "Alta resistencia y durabilidad",
      imagen: "img/4.png",
      precio: 18000
    },
    {
      nombre: "Rodamiento de Levas ProMax",
      descripcion: "Ideal para maquinaria pesada",
      imagen: "img/12.png",
      precio: 22500
    },
    {
      nombre: "Rodamiento Oscilante FlexPower",
      descripcion: "Máxima eficiencia energética",
      imagen: "img/13.png",
      precio: 30000
    },
    {
      nombre: "Rodamiento de Bolas SuperGlide",
      descripcion: "Desempeño suave y silencioso",
      imagen: "img/7.png",
      precio: 25000
    }
  ];
  
  const contenedorProductos = document.getElementById("contenedorProductos");
  
  let productosHTML = productos
    .map(producto => `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <h4>Precio: ${producto.precio}</h4>
        <input class="btn-comprar" type="button" value="Agregar al carrito">
      </div>
    `)
    .join("");
  
  contenedorProductos.innerHTML = productosHTML;
  
  const btnAgregar = document.querySelectorAll(".btn-comprar");
  const listaCarrito = document.querySelector("#carrito ul");
  const totalCarrito = document.querySelector("#carrito p");
  const mensajePagarCarrito = document.getElementById("mensajeCarrito");
  
  let totalAPagar = 0;
  
  for (let indice = 0; indice < btnAgregar.length; indice++) {
    function agregarElemCarrito() {
      const elementoLi = document.createElement("li");
      elementoLi.innerText = `Producto ${productos[indice].nombre} $${productos[indice].precio}`;
      listaCarrito.appendChild(elementoLi);
      totalAPagar += productos[indice].precio;
      totalCarrito.innerText = " Total a Pagar : $" + totalAPagar;
      mensajePagarCarrito.innerText = "";
    }
    btnAgregar[indice].addEventListener("click", agregarElemCarrito);
  }
  
  const botonBorrar = document.querySelector("#botonBorrar");
  
  function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerText = " Total a Pagar $ 0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = "";
  }
  
  botonBorrar.addEventListener("click", borrarCarrito);
  
  const botonPagar = document.querySelector("#botonPagar");
  
  function irAPagar() {
    if (listaCarrito.innerText === "") {
      mensajePagarCarrito.innerText = "No has seleccionado ningún producto";
    } else {
      window.location.href = "./pagos.html";
    }
  }
  
  botonPagar.addEventListener("click", irAPagar);
  