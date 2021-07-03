let ifButton = document.getElementById('addIt');
let tableInfo = document.getElementById('content');
let boxInfo = document.getElementById('inputBox');
boxInfo.addEventListener("keydown", function(e){
    if(e.code == "Enter") {
        document.getElementById("addIt").click();
    }
ifButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
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

