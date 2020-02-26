function count() {
    let a = parseInt(document.getElementById("number1").value);
    if (a<1000000){
        alert('khong cho vay');
    }
    else if (a< 5000000){
        interest = a *0.1;
        alert('so tien phai tra la: ' + interest);
    }
    else if (a < 10000000){
        interest =a*0.095;
        alert('so tien phai tra la: '+ interest);
    }
    else if (a < 50000000){
        interest =a*0.09;
        alert('so tien phia tra la ' + interest);
    }
    else if(a<100000000){
        interest = a*0.085;
        alert('so tien phai tra la: '+ interest);
    }
    else {
        interest = a*0.08;
        alert('so tien phai tra la: ' + interest);
    }

}