if(window.scrollY >= 0){
    const txtArea = document.querySelector('.txtAreaContainer')
    txtArea.classList.toggle('default')
}

window.addEventListener('scroll', function(){
    const scrolling = document.querySelector('#header')
    scrolling.classList.toggle('scrolling', window.scrollY > 4)
})

window.addEventListener('scroll', function(){
    const visible = document.querySelector('#txtContainer')
    visible.classList.toggle('visible', window.scrollY > 150)
})

window.addEventListener('scroll', function(){
    const visible = document.querySelector('.layoutContent')
    visible.classList.toggle('visible', window.scrollY > 600)
})