// All the Code for All Students Page Goes Here

let arrFromLS = JSON.parse(localStorage.getItem("admission")) || [];

document.querySelector("#filter").addEventListener("change", courseFilter);
function courseFilter(){
    let selected = document.querySelector("#filter").value;
    if(selected != "all"){
        let filtedList = arrFromLS.filter(function(elem){
            return elem.studentCourse == selected;
        })
        displayTable(filtedList);
    }else{
        displayTable(arrFromLS)
    }
    
}




let acceptArr =JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectArr = JSON.parse(localStorage.getItem("admission-rejected")) || [];
displayTable(arrFromLS)

function displayTable(arrFromLS){
    document.querySelector("tbody").innerHTML = "";

    arrFromLS.forEach(function(elem){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = elem.studentName;

        let td2 = document.createElement("td");
        td2.innerText = elem.studentEmail;

        let td3 = document.createElement("td");
        td3.innerText = elem.studentCourse;

        let td4 = document.createElement("td");
        td4.innerText = elem.studentGender;

        let td5 = document.createElement("td");
        td5.innerText = elem.studentPhone;

        let td6 = document.createElement("td");
        td6.innerText ="Accept";
        td6.style.backgroundColor = "green"
        td6.style.color = "white"
        td6.addEventListener("click", function(){
            acceptFunc(elem);
        })

        let td7 = document.createElement("td");
        td7.innerText ="Reject";
        td7.style.backgroundColor = "red"
        td7.style.color = "white"
        td7.addEventListener("click", function(){
            rejectFunc(elem);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7)
        document.querySelector("tbody").append(tr);
    })
}

function acceptFunc(elem, index){
    acceptArr.push(elem);
    localStorage.setItem("admission-accepted", JSON.stringify(acceptArr))

    arrFromLS.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(arrFromLS));

    window.location.reload();
}

function rejectFunc(elem, index){
    rejectArr.push(elem);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectArr))

    arrFromLS.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(arrFromLS));

    window.location.reload();
}