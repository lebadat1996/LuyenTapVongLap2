function result1() {
    let n = parseInt(document.getElementById("number").value);
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (j > i ) {
                document.write(" * ");
            }
        }
        document.write(" <br> ");
    }
}