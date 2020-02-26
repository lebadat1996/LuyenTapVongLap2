function result() {
    let n = parseInt(document.getElementById("number").value);
    let count =1;
    if (n <= 1) {
        document.write("Xin moi nhap so lon hon 1");
    } else {
        for (let i = 2; i <= n;i++) {
            count = count * i;
        }
        document.write(count);

    }
}