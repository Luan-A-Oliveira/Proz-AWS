const link = document.getElementById('link')

document.addEventListener("keyup",(e) =>{
    console.log(e.key)
    console.log(e.code)
    if(e.code == 'Backspace'){
        console.log("vc pressionou a esc!!!")
        link.click()
    }
})