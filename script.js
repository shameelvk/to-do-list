let input=document.getElementById("in");
let button1=document.getElementById("btn");
let button2=document.getElementById("btn2");
let lists=document.getElementById("list");

let inputData;
let inputArray=[];
function setiteams(){
    localStorage.setItem("input",JSON.stringify(inputArray)); 
}
function getiteams(){
    if(inputData= localStorage.getItem("input")){
        inputArray=JSON.parse(localStorage.getItem("input"))
        buildUi();

    }
}


function buildUi(){
    lists.textContent=''; 
    inputArray.forEach(iteam=>{
    let li=document.createElement("li");
    let span=document.createElement("span");
    li.appendChild(span);
    span.innerText=iteam;
    li.classList.add("list");
    lists.appendChild(li);
    input.value="";
    input.focus();


    // trsh
    let del=document.createElement("i");
    // console.log(del);
    del.classList.add("fas","fa-trash");
    li.appendChild(del);

    // edit button1
    let edit=document.createElement("i");
    // console.log(edit);
    edit.classList.add("fas","fa-edit");
    li.appendChild(edit);

    })
    

}

function add(){
    inputData=input.value;
    if(inputData!=''){
    inputArray.push(inputData);
    setiteams();
    getiteams();
    }
}

function delet(event){
    if(event.target.classList[1]=="fa-trash"){
        let iteam=event.target.parentElement;
        deliteam=event.target.parentElement.childNodes[0].childNodes[0].textContent;
        input.focus();
        const index = inputArray.indexOf(`${deliteam}`);
        if (index !== -1) {
        inputArray.splice(index, 1);
        localStorage.setItem("input", JSON.stringify(inputArray));
}
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
function clearbtn(){
    localStorage.clear();
    inputArray=[];
 
   buildUi();
}






lists.addEventListener("click",edit);
lists.addEventListener("click",delet);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      add();
    }
});
button2.addEventListener("click",clearbtn)
button1.addEventListener("click",add);
getiteams();




