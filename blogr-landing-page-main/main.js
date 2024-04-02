// Select navigation bar elements
let product = document.querySelector(".product");
let connect = document.querySelector(".connect");
let company = document.querySelector(".company");

//Select droplist
let productDroplist = document.querySelector(".product-droplist");
let companyDroplist = document.querySelector(".company-droplist");
let connectDroplist = document.querySelector(".connect-droplist");

//Show drop list when element click
product.addEventListener("click",() =>{
    productDroplist.classList.toggle("active");
    productDroplist.classList.toggle("inactive");
    connectDroplist.classList.add("inactive");
    companyDroplist.classList.add("inactive");
})
connect.addEventListener("click",() =>{
    connectDroplist.classList.toggle("active");
    connectDroplist.classList.toggle("inactive");
    productDroplist.classList.add("inactive");
    companyDroplist.classList.add("inactive");
})
company.addEventListener("click",() =>{
    companyDroplist.classList.toggle("active");
    companyDroplist.classList.toggle("inactive");
    connectDroplist.classList.add("inactive");
    productDroplist.classList.add("inactive");
})

