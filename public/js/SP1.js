
//------------------------------------Menu-SLIDEBAR-CARTEGORY-------------------

                        
                        
const baoquan = document.querySelector(".baoquan")

if(baoquan){
  baoquan.addEventListener("click", function(){
    
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
  })
}

const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
  butTon.addEventListener("click", function(){
    document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
  })
}