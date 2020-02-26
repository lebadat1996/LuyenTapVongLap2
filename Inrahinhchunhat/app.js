function result() {
    let m = parseInt(document.getElementById("number").value);
    let n = parseInt(document.getElementById("number1").value);
    for(let i = 0;i<m;i++){
        for(let j=0;j<n;j++){
            if (i === 0 || i === m-1 || j===0||j===n-1 ){
                document.write(" * ");
            }else {
                document.write("&nbsp;&nbsp");
            }
        }
        document.write("<br>");
    }
}