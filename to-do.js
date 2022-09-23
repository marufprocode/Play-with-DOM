let count = 0;
document.getElementById('btnAddItems').addEventListener('click', function(){
    count++;
    const toDoField = document.getElementById('text-field'); 
    const mainContainer = document.getElementById('main-container');
    const tableContainer = document.createElement('tr');
    tableContainer.setAttribute('id', 'dynamicParent')  
    tableContainer.innerHTML = `
            <td scope="row" class="th-th">${count}</td>
            <td class="des" class="th-th">${toDoField.value}</td>
            <th><button class="btn btn-success done-Btn">Done</button> 
            <button class="btn btn-danger delete-Btn">Delete</button></th>
    `
    mainContainer.appendChild(tableContainer);
    toDoField.value = '';
    const doneBtnAll = document.getElementsByClassName('done-Btn');
    for (let doneBtn of doneBtnAll){
        doneBtn.addEventListener('click', function(event){
            let element = event.target.parentNode.parentNode;
            let tds = element.getElementsByTagName('td');
            for(let td of tds){
                td.style.textDecoration = 'line-through';
            }
            

        })
    }
    const deleteBtn = document.getElementsByClassName('delete-Btn');
    for (let dltBtn of deleteBtn){
        dltBtn.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
    })