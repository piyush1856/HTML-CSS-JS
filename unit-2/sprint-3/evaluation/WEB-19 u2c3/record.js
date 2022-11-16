// fill in javascript code here
document.querySelector("form").addEventListener("submit",functionSubmit);
function functionSubmit(event){
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let empid = document.querySelector("#employeeID").value;
    let dept = document.querySelector("#department").value;
    let exp = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mbl").value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name;
    let td2 = document.createElement("td");
    td2.innerText = empid;
    let td3 = document.createElement("td");
    td3.innerText = dept;
    let td4 = document.createElement("td");
    td4.innerText = exp;
    let td5 = document.createElement("td");
    td5.innerText = email
    let td6 = document.createElement("td");
    td6.innerText = mobile;
    let td7 = document.createElement("td");
    if(exp>5){
        td7.innerText = "Senior";
    }else if(exp>=2 && exp<=5){
        td7.innerText = "junior";
    }else if(exp<=1){
        td7.innerText = "Fresher";
    }
    let td8 = document.createElement("td");
    td8.innerText = "DELETE";
    td8.addEventListener("click",deleteFunction);
    td8.style.backgroundColor = "red";
    td8.style.color = "white";

    
    
    tr.append(td1, td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr)
    

}
function deleteFunction(event){
    event.target.parentNode.remove();
}