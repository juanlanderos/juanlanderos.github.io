function sizeUp(){
    if(document.getElementById("textarea").style.fontSize < "24pt"){
        document.getElementById("textarea").style.fontSize = "24pt";
        alert("Text size increased");
    } else {
        document.getElementById("textarea").style.fontSize = "10pt";
        alert("Text size Decreased");
    }
    
}

function makeFancy(){
    if(document.getElementById("FancyButton").checked == true){
        document.getElementById("BoringButton").checked = false;
        document.getElementById("textarea").style.fontWeight = 900;
        document.getElementById("textarea").style.color = "blue";
        document.getElementById("textarea").style.textDecorationLine = "underline";
        alert("Text made fancy");
    }
}

function makeBoring(){
    if(document.getElementById("BoringButton").checked == true){
        document.getElementById("FancyButton").checked = false;
        document.getElementById("textarea").style.fontWeight = 400;
        document.getElementById("textarea").style.color = "black";
        document.getElementById("textarea").style.textDecoration = "none";
        alert("Text returned to normal");
    }

}
//use this function when calling from the html file 
function moo(){
    var input = document.getElementById("textarea").value;
    var parts = input.split(".");
    input = parts.join(".-Moo");
    
    document.getElementById("textarea").value = input;
    document.getElementById("textarea").style.textTransform = "uppercase";
    alert("Text got mooed");    
}