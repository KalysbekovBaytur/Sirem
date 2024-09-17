let add=document.querySelector(".add")
let crest=document.querySelector(".crest")
let crest1=document.querySelector(".crest1")
let crest2=document.querySelector(".crest2")
let create=document.querySelector(".create")
add.addEventListener("click",function(){
    create.classList.add("createreplace");
    create.classList.remove("create");
    crest1.classList.add("crest1replace")
    crest1.classList.remove("crest1")
    crest2.classList.remove("crest2")
    crest2.classList.add("crest2replace")
})
crest.addEventListener("click",function(){
    create.classList.remove("createreplace");
    create.classList.add("create");
    crest1.classList.remove("crest1replace")
    crest2.classList.remove("crest2replace")
})