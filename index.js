function emptyValue (id){
    document.getElementById(id).value = '';
}
function emptyText (id) {
    document.getElementById(id).innerText = "";

}
function displayNone (id) {
    document.getElementById (id).style.display = 'none';
}
function displayBlock (id) {
    document.getElementById (id).style.display = 'block';
}
// generate random coode
function randomNumFun (id) {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('suggestCode').value = randomNumber;
    emptyValue('inputPin');
    displayNone ('match');
    displayNone ('didnotMatch');
}
    


function btnKey (id) {
    
    let prevValue = document.getElementById("inputPin").value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value =prevValue + key;
}
function clean() {
    document.getElementById("inputPin").value = " ";
    
}
function cleanlast(){ 
    var inputResult = document.getElementById("inputPin").value;
    var remove = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = remove;
}
function submitbtn (){
    var randomPin = document.getElementById("suggestCode").value;
    var typeNum = document.getElementById('inputPin').value;
    if (randomPin == typeNum) {
        displayBlock ('match');
        displayNone('didnotMatch')
    }else  {
        displayBlock ('didnotMatch') ;
        displayNone ('match');
        tryleft('tryleft');
    }

}
function tryleft(id) {

    var tryagain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML-=1;
    var last = document.getElementById(id).innerHTML;
    if (last == 0) {
        document.getElementById("submitbtn").disabled = true;
        
    }
}
