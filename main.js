let ifButton = document.getElementById('addIt');
let tableInfo = document.getElementById('content');
let boxInfo = document.getElementById('inputBox');

let h1click = document.getElementsByTagName('h1');


boxInfo.addEventListener("keydown", function(e){
    if(e.code == "Enter") {
        document.getElementById("addIt").click();
    }
    
ifButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.id = 'id_p';
    paragraph.classList.add('paraStyle')
    paragraph.innerText = boxInfo.value;
    tableInfo.appendChild(paragraph);
    boxInfo.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paraStyle-1');
    })

    paragraph.addEventListener('dblclick', function(){
        tableInfo.removeChild(paragraph);
    })
})
})



