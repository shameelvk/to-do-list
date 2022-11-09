let input=document.getElementById("in");
let button=document.getElementById("btn");
let lists=document.getElementById("list");



function add(){
    let inputData=input.value;
    let li=document.createElement("li");
    li.textContent=inputData;
    li.classList.add("list");
    li.style.cssText='color:red';
    lists.appendChild(li);
    input.value="";
    input.focus();
    let del=document.createElement("button");
    del.classList.add("delet");
    del.innerText="delete";
    li.appendChild(del);

}

function delet(event){
    if(event.target.classList[0]=="delet"){
        let iteam=event.target.parentElement;
        console.log(iteam);
        iteam.remove();
    }
   
    
}

lists.addEventListener("click",delet)

button.addEventListener("click",add);




