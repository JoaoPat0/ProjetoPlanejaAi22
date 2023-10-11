function abrirMenu(){
    let barraMenuAberto = document.getElementById('barra-menu')

    if(barraMenuAberto.style.width == '0px'){
        barraMenuAberto.style.width = '300px'
    }else{
        barraMenuAberto.style.width ='0px'
    }
}

window.addEventListener('scroll', function(){
    let header =document.getElementById('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})