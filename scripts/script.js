
var inpName = document.getElementById("inputName");
var realName = inpName.value;
let completeUrl = Url + "";
let 



$("#nameBtn").on("click", function (event) {
    event.preventDefault()

        function change_page(){
            if(realName = ""){
console.log("no name")
            }else{
                window.location.replace("page-two.html?" + realName);
            }
        }; 
        change_page()



    });



