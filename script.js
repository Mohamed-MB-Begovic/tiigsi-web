/// scrolling 
// 
 // 1. add event to the parent element
 // 2. match 
 const parent= document.querySelector('.nav__links')
 parent.addEventListener('click',function(e){
   // console.log(e.target) // e.target will show you the cl   icked element
e.preventDefault()
// marching
if(e.target.classList.contains('nav-link')){
   const id=e.target.getAttribute('href')
   // console.log(id)
   // document.querySelector(id).scrollIntoView({behavior: 'smooth'})
   document.querySelector(id).scrollIntoView({behavior: 'smooth'})
}
 })
// 
// // scrolling an specific element  like only home
//  const target=document.querySelector('.section-4')
//  const active=document.querySelector('.active')
//  active.addEventListener('click',function(e){
//    e.preventDefault()
//    target.scrollIntoView({behavior: 'smooth'})
//  })
const btncontact=document.querySelector('.btn-contact')
const btnclose=document.querySelector('.btn-close2')
const login=document.querySelector('.login-model')
const overlay=document.querySelector('.overlay')
const close=document.querySelector('.btn-close')
const target=document.querySelector('.subscribe-model')
const btn=document.querySelector('.btn--subscribe')
const nav=document.querySelector('nav')
// nav.style.backgroundColor='red'
const section=document.querySelector('.section-2')
btn.addEventListener('click',function(){
target.style.visibility='visible';
overlay.style.visibility='visible'
})

close.addEventListener('click',function(){
   target.style.visibility='hidden';
overlay.style.visibility='hidden'
})
btnclose.addEventListener('click',function(){
   login.style.visibility='hidden';
overlay.style.visibility='hidden'
})
btncontact.addEventListener('click',function(){
   login.style.visibility='visible';
overlay.style.visibility='visible'
})



/// sticky navigation

// // target = the target section && nav
// const navSticky=(enties =>{
//    const [entries]=enties;
//    // console.log(entries)
//    if(!entries.isIntersecting)nav.classList.add('sticky')
//    else{
//        nav.classList.remove('sticky')
//    }
// })
// 
// const navOpserver=new IntersectionObserver(navSticky,{
// root:null,
// threshold:0
// })
// navOpserver.observe(nav)
