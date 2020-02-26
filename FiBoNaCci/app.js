function result() {
    let n = parseInt(document.getElementById("number").value);
    let n1=0;
    let n2=1;
    for(let i =1;i<=n;i++){
        n3=n2+n1;
        document.write(n3+ "<br>");
        n1=n2;
        n2=n3;
    }
}