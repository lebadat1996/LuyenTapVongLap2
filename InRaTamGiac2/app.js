function result() {
    let n = parseInt(document.getElementById("number").value);
    for(let i=n;i>0;i--){
        for(let j=1;j<=i;j++){
            document.write("*");
        }
        document.write("<br>");
    }
}