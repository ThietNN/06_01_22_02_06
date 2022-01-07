function run(){
    let q = parseInt(document.getElementById("a").value);
    let w = parseInt(document.getElementById("b").value);
    let e = parseInt(document.getElementById("c").value);
    let d = (Math.pow(w,2)) - (4*q*e);
    let k = (-w)/(2*q);
    let x1 = ((-w) + (Math.sqrt(d)))/(2*q);
    let x2 = ((-w) - (Math.sqrt(d)))/(2*q);

    if (d<0){
        alert("Phương trình vô nghiệm");
    }
    else if(d===0){
        alert("Phương trình có nghiệm kép x1 = x2 = " + k);
    }
    else{
        alert("Phương trình có 2 nghiệm phân biệt là " + x1 + x2 );
    }

}