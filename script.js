let input=document.getElementById("in");
let button=document.getElementById("btn");
let lists=document.getElementById("list");



function add(){
    let inputData=input.value;
    let li=document.createElement("li");
    let span=document.createElement("span");
    li.appendChild(span);
    span.innerText=inputData;
    li.classList.add("list");
    lists.appendChild(li);
    input.value="";
    input.focus();


    // trsh
    let del=document.createElement("i");
    console.log(del);
    del.classList.add("fas","fa-trash");
    li.appendChild(del);

    // edit button
    let edit=document.createElement("i");
    console.log(edit);
    edit.classList.add("fas","fa-edit");
    li.appendChild(edit);

}

function delet(event){
    if(event.target.classList[1]=="fa-trash"){
        let iteam=event.target.parentElement;
        input.focus();
        iteam.remove();
    }
   
    
}
function edit(event){
    if(event.target.classList[1]=="fa-edit"){
        let iteam=event.target.parentElement;
        let spane=iteam.querySelector("span");
        input.value=spane.innerText;
        input.focus();
        function del()
        { 
            let iteam=event.target.parentElement;
            iteam.remove();
        }
        del();
       
    }  
}






lists.addEventListener("click",edit);
lists.addEventListener("click",delet);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      add();
    }
});

button.addEventListener("click",add);




