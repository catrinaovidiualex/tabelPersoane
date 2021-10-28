

let setTable=()=>{


        let  container =document.querySelector(".container");




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