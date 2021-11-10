setTable();


let btnAdd=document.querySelector(".add");
btnAdd.addEventListener("click", ()=>{
    addStudent();
})

let btnUpdate=document.querySelector(".updateSt");
btnUpdate.addEventListener("click", ()=>{
    updateStudentEmail();
})

let btnDelete=document.querySelector(".deleteSt");
btnDelete.addEventListener("click",()=>{
    deleteStudent();
})

let btnRead=document.querySelector(".readSt");
btnRead.addEventListener("click",()=>{
    readStudenti();
    })

