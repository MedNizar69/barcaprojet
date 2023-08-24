let  btnRemove = Array.from(document.getElementsByClassName('fa')) 

for(let btn of btnRemove){
    btn.addEventListener('click', function(){
        btn.parentNode.remove()
        CalcultotalPrice ()
    })
}


function CalcultotalPrice (){
let PriceOfElement = Array.from(document.getElementsByClassName("priceNumber"))
let QtyOfElement = Array.from(document.getElementsByClassName('Qty'))
let TotalPrice = 0 
    for (let i=0 ; i<PriceOfElement.length ; i++) {
    TotalPrice += (PriceOfElement[i].innerHTML*QtyOfElement[i].innerHTML)
    }
return document.getElementById('tp').innerHTML = TotalPrice
}


let plus = document.getElementsByClassName('add') 
console.log (plus) ;
for(let btn of plus){
    btn.addEventListener('click', function(){
        btn.previousElementSibling.innerHTML++
        CalcultotalPrice ()

    })
}
let substract = Array.from(document.getElementsByClassName('moins'))
for(let btn of substract){
    btn.addEventListener('click', function(){
        if(btn.nextElementSibling.innerHTML>0){
            btn.nextElementSibling.innerHTML--;
            CalcultotalPrice ();
        }
    })
}



let like = Array.from(document.getElementsByClassName('material-icons'))
for (let i of like ){
    i.addEventListener("click", function(){
        i.classList.toggle('myColor')
        
    })
}