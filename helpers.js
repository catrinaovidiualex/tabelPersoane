

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

    let numeModificat=prompt("Introduceti numele studentului pentru care doriti sa modificati adresa de email:");
    let emailModificat=prompt("Introduceti noua adresa de email:")
    for(let i=0;i<data.length;i++){

        if(data[i].nume==numeModificat){

            data[i].email=emailModificat;
            
           }
           else{
               console.log("Studentul nu exista in baza de date!");
           }
    }


    setTable();

}