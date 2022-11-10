let input=document.getElementById("in");
let button=document.getElementById("btn");
let lists=document.getElementById("list");



function add(){
    let inputData=input.value;
    let li=document.createElement("li");
    li.textContent=inputData;
    li.classList.add("list");
    lists.appendChild(li);
    input.value="";
    input.focus();
    let del=document.createElement("i");
    console.log(del);
    del.classList.add("fas","fa-trash");
    li.appendChild(del);

}

function delet(event){
    if(event.target.classList[0]=="fas"){
        let iteam=event.target.parentElement;
        console.log(iteam);
        iteam.remove();
    }
   
    
}

lists.addEventListener("click",delet);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      add();
    }
});

button.addEventListener("click",add);




