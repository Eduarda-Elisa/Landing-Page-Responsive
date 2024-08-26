
let controlAnimtetrnsit = false
let controlTransitionOpacity = false
let controlMarginTop = false

let windowWidth = window.innerWidth

window.addEventListener("scroll", () => {

    if(windowWidth >= 1280 && windowWidth <= 1920){
        if(this.scrollY >= 300 && this.scrollY <= 1200 && controlAnimtetrnsit == false){
            animateRightToLeft()
        }
    
        if(this.scrollY >= 1200 && this.scrollY <= 1800 && controlTransitionOpacity == false){
            gradientOpacity (true, false, false)
        }
    
        if(this.scrollY >= 2100 && this.scrollY <= 2200 && controlMarginTop == false){
            transitionMarginTop(true, false, false)
        }
    }


    if(windowWidth >= 760 &&  windowWidth <= 1280){
        if(this.scrollY >= 300 && this.scrollY <= 1200 && controlAnimtetrnsit == false){
            animateRightToLeft()
        }
        
        if(this.scrollY >=500 && this.scrollY <= 600 && controlTransitionOpacity == false){
            gradientOpacity (false, true, false)
        }
    
        if(this.scrollY >= 1300 && this.scrollY <= 1700 && controlMarginTop == false){
            transitionMarginTop(false, true, false)
        }
    }
    
    if(windowWidth < 760){
        if(this.scrollY >= 300 && this.scrollY <= 1200 && controlAnimtetrnsit == false){
            animateRightToLeft()
        }

        if(this.scrollY >= 950 && this.scrollY <= 1600 && controlTransitionOpacity == false){
   
            gradientOpacity (false, false, true)
        }
    
        if(this.scrollY >= 1300 && this.scrollY <= 1600 && controlMarginTop == false){
            transitionMarginTop(false, false, true)
        }
    }

})

function animateRightToLeft () {
    const div = document.querySelector(".products__transit__blocks")

    setTimeout(() => {
        div.style.animation  = "transitRightToLeft forwards ease 1s" 
    }, 100);
    
    controlAnimtetrnsit = true
}

function gradientOpacity (notbook, tablet, celular){
    const imagem = document.querySelector(".image")

    if(notbook == true){
        setTimeout(() =>{
        imagem.style.animation = " transparencia forwards ease 1s"
        }, 100);

        controlTransitionOpacity = true
    }

    if(tablet == true){
        setTimeout(() =>{
        imagem.style.animation = "transparencia forwards ease 1s"
        }, 100);
        
        controlTransitionOpacity = true
    }

    if(celular == true){
       
        setTimeout(() =>{
            imagem.style.animation = "transparenciaMobile forwards ease 1s"
        }, 100);
        
        controlTransitionOpacity = true
    }
}


function transitionMarginTop (notbook, tablet, celular){
    const blocos = document.querySelector(".upload__numb")

    if(notbook == true){
        setTimeout(() =>{
            blocos.style.animation = "transitionBottonTop forwards ease-out 1s"
        }, 100);
    
        controlMarginTop = true 
    }

    if(tablet == true){
        setTimeout(() =>{
            blocos.style.animation = "transitionBottonTop forwards ease-out 1s"
        }, 100);
    
        controlMarginTop = true 
    }

    if(celular == true){
        setTimeout(() =>{
            blocos.style.animation = "transitionBottonTop forwards ease-out 1s"
        }, 100);
    
        controlMarginTop = true 
    }
    
    
}

function expandAir (){
    const air = document.querySelector(".products__right__air")
    const text = document.querySelector(".products__right__expand")

    

    if (getComputedStyle(air).display === 'none'){
        air.style.display = 'flex'
        text.style.display = 'none'
    }

    else{
        air.style.display = 'none'
        text.style.display = 'flex'
    }
}

function expandProgamation (){
    const destiny = document.querySelector(".products__right__details")
    const calender = document.querySelector(".products__right__prog")
   

    if(getComputedStyle(calender).display === 'none'){
        calender.style.display = 'flex'
        destiny.style.display = 'none'
    }

    else{
        calender.style.display = 'none'
        destiny.style.display = 'flex'
    }
}

function expandCard (){

    const card = document.querySelector(".nav__mobile")

    if(getComputedStyle(card).display === 'none'){
        card.style.display = 'flex'
    }

    else{
        card.style.display = 'none'
    }


}

window.addEventListener('resize', function(){
    windowWidth = window.innerWidth
})
