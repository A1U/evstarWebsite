const activepage = window.location.pathname;

const navlink = document.querySelectorAll('header nav a').

forEach(link =>{
if(link.href.includes(`${activepage}`)){
    console.log(`${activepage}`);
    link.classList.add('active');
}
})