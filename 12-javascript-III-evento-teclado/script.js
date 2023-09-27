const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

document.addEventListener("keyup",(e) =>{
  console.log(e.key)
  console.log(e.code)    
   
  if(e.code == 'Escape'){
    console.log("vc pressionou a esc!!!")
    navPerfil.style.display = ""
  }
  if(navPerfil.style.display == "block"){

    if(e.code == 'Digit1' || e.code == 'Numpad1'){
      console.log("vc pressionou a tecla 1!!!")
      linkPerfilDados.click()
    }
  } else if (e.code == "Digit1"){  
      navPerfil.style.display = "block"    
      }  
})