document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);

function loadEmployee() {
     // Create the object
     const xhr = new XMLHttpRequest();

     //OPen the connection
     xhr.open('GET', 'employee.json', true);

     // Execute the function
     xhr.onload = function () {
          if(this.status === 200) {
               // Get response as an oject
               const employee =  JSON.parse(this.responseText);

               const output = `
                    <ul>
                         <li>ID: ${employee.id}</li>
                         <li>ID: ${employee.name}</li>
                         <li>ID: ${employee.company}</li>
                         <li>ID: ${employee.job}</li>

                    </ul>
               `;

               document.getElementById('employee').innerHTML = output;

          }
     }

     // Sed the requesty
     xhr.send();
}


function loadEmployees() {
     // Create the object
     const xhr = new XMLHttpRequest();

     //OPen the connection
     xhr.open('GET', 'employees.json', true);

     // Execute the function
     xhr.onload = function () {
          if(this.status === 200) {
               // Get response as an oject
               const employees =  JSON.parse(this.responseText);

               let output = '';
               employees.forEach(function(employee) {
                    output += `
                    <ul>
                         <li>ID: ${employee.id}</li>
                         <li>ID: ${employee.name}</li>
                         <li>ID: ${employee.company}</li>
                         <li>ID: ${employee.job}</li>

                    </ul>
               `;

               document.getElementById('employees').innerHTML = output;

               });
          }
     }

     // Send the requesty
     xhr.send();
}