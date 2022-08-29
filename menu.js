let menu = document.getElementById('btn');
let logo = document.querySelector('.logo_name');                                                                                   
let account = document.querySelector('.account');                                                                                   
let sidebar = document.querySelector('.sidebar');                                                                                   
let nav_text = document.querySelectorAll('.navlist');                                                                                   
let subsiLogo = document.querySelector('.subsiLogo');         
let stocks = document.querySelector('.stocks');         
let main = document.getElementById('main');         
console.log(logo)  
console.log(subsiLogo)  

menu.onclick = function(){
    sidebar.classList.toggle("active");
    subsiLogo.classList.toggle("active");
    main.classList.toggle('active');
    stocks.classList.toggle('active');
    account.classList.toggle('active');
    // logo.classList.toggle("active");
    // main.classList.toggle('active');

}
if (logo.style.display=='none'){
    console.log('hii')
}
