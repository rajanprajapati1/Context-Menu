const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
const menuitem = document.querySelectorAll('.menu>ul>li');
container.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    const X = e.clientX;
    const Y = e.clientY;
    menu.style.left = `${X}px`;
    menu.style.top = `${Y}px`;
    menu.style.display = 'grid';
})
document.addEventListener('click', () => {
    menu.style.display = 'none';
  })

  menu.addEventListener('click', e => {
    e.stopPropagation();
    menu.style.display = 'none';
  })

  
  menuitem.forEach((val)=>{
    const datacolor = val.getAttribute('data-color');
    val.addEventListener('click', () => {
        container.style.backgroundColor = datacolor;
        menu.style.display = 'none'; 
         });
  })