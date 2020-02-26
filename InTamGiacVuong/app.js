function TamGiac() {
    let n = parseInt(document.getElementById("number").value);
    if (n<=0){
        document.write("xin moi nhap lai");
    }else{
        for (let i=1;i<=n;i++){
            for (let j=1;j<=i;j++){
                document.write(" * ")
            }
            document.write("<br>");
        }
    }
}