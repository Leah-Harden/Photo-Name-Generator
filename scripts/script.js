var nameButton = document.getElementById("nameBtn");
var inpName = document.getElementById("inputName");
var realName = inpName.value;
console.log(realName)
let Url = "";
let completeUrl = Url + "";




$("#nameBtn").click( function(event) {
    event.preventDefault()
    var realName = inpName.value;
        function change_page(){
            if(realName == "Type in your first name..."){
console.log("no name")

            }else{
                window.location.replace("page-two.html?" + realName);
            }
        }; 
        change_page()
    });



