async function getProduct(){

    const respons = await fetch("https://dummyjson.com/products");
    const data = await respons.json();

    console.log(data);
    const product = data.products;

const result = product.map( function(ele){

    return `
    <img src= "${ele.thumbnail}"/>
    <h3>${ele.title}</h3>
    <p>"price" >> "${ele.price}"</p>
    <p>"brand"  >> "${ele.brand}" </p>
    <p>"category" >>  "${ele.category}" </p>
    ` ;
} ).join(" ") ;
  document.querySelector(".product").innerHTML=result;
}
getProduct();


