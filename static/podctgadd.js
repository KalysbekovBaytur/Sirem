// let add=document.querySelector(".add");
let crest=document.querySelector(".crest");
let crest1=document.querySelector(".crest1");
let crest2=document.querySelector(".crest2");
let create=document.querySelector(".create");
// let afood1=document.querySelector(".afood1")
// let costfood=document.querySelector(".costfood")
let topcreate=document.querySelector(".topcreate")
let addoffer=document.querySelectorAll(".addoffer")
let offerfood=document.querySelector(".offerfood")
// let afood1=document.querySelector(".afood1")
let btnallcost=document.querySelector(".btnallcost")

btnallcost.addEventListener("click", function(e){
    e.preventDefault()
    let now = new Date();
    let strtime=`${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}.`
    let obj={
        time: strtime, 
        cost:sum
    }
    SetHistory()
    async function SetHistory() {
        let jsstr=JSON.stringify(obj)
    console.log(jsstr)

        // отправляет запрос и получаем ответ
            const response = await fetch("/api/history", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }, 
                body: JSON.stringify(obj)
            });
            // если запрос прошел нормально
            if (response) {
               
              localStorage.clear()
               window.location.href = "/api/history"
             }
        }
})
let sum=0;

add.addEventListener("click",function(){
    create.classList.add("createreplace");
    create.classList.remove("create");
    crest1.classList.add("crest1replace")
    crest1.classList.remove("crest1")
    crest2.classList.remove("crest2")
    crest2.classList.add("crest2replace")
    offerfood.innerHTML=''
    sum=0;
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let item=Number(localStorage.getItem(key))
        sum+=item
        let str=`${key}: ${localStorage.getItem(key)}`;
        let div=document.createElement("div")
        div.append(str)
        offerfood.append(div)
      }
      let allcost=document.getElementById("allcost")
      allcost.value=`${sum}`
})
crest.addEventListener("click",function(){
    create.classList.remove("createreplace");
    create.classList.add("create");
    crest1.classList.remove("crest1replace")
    crest2.classList.remove("crest2replace")
})
// addoffer.addEventListener("click", function(){
//     console.log(inputnumber.value, afood1.innerHTML, costfood.innerHTML)
// })
console.log(addoffer)
addoffer.forEach(item=>
    item.addEventListener("click", function(){
        let data_number=document.querySelector(".inputnumber"+ item.getAttribute('data-number'))
            console.log(data_number.value, item.getAttribute('data-name'), item.getAttribute('data-cost'))
            localStorage.setItem(item.getAttribute('data-name')+"   "+data_number.value, data_number.value*item.getAttribute('data-cost') );
        }))