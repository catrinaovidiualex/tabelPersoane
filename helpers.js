

let setTable=()=>{


        let  container =document.querySelector(".container");



        container.innerHTML="";


        for(let i=0;i<data.length;i++){

            container.innerHTML+=`
            <tr>
            <th scope="row">${data[i].nume}</th>
            <td>${data[i].email}</td>
            <td>${data[i].media}</td>
            </tr>    
            `
        }
    }


let addStudent=()=>{

   

    let nume=prompt("Introduceti numele si prenumele studentului");
    let email=prompt("Introduceti emailul studentului");
    let media=prompt("Introduceti media studentului");

  

    data.push({


        nume:nume,
        email:email,
        media:media


    })


    setTable();

    

}

let  updateStudentEmail=()=>{

    let numeCitit=prompt("Introduceti numele studentului pentru care doriti sa modificati adresa de email:");

 

    let emailModificat=prompt("Introduceti noua adresa de email:")
    for(let i=0;i<data.length;i++){

       
        if(data[i].nume==numeCitit){

            data[i].email=emailModificat;
            
           }
          
    }



    setTable();

}

let deleteStudent=()=>{

    let list=[];
    let studentDeSters=prompt("Introduceti numele studentului pe care doriti sa il stergeti:");
    for(let i=0;i<data.length;i++){
        if(data[i].nume!==studentDeSters){
           
            list.push(data[i]);

        }

    }


    data=[...list];//spread operator

    setTable();

}

let readStudenti=()=>{
    for(let i=0;i<data.length;i++)
    if(data[i].nume!==""){
    setTable();}
    }