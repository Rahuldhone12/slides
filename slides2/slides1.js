let panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('mouseenter',()=>{
        handleMouseEnter(panel)
    })

    panel.addEventListener('mouseout',()=>{
        handleMouseOut(panel)
    })
})

function handleMouseEnter(panel){
    removeActiveClasses()
    panel.classList.add('active')
}

function handleMouseOut(panel){
    panel.classList.remove('active')
}

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}










