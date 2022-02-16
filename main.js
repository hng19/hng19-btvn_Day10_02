//Bài 1

function so(a){
    if (a%3==0 && a%5==0){
        console.log("FizzBuzz")
    } else if( a%3 ) {
        console.log("Fizz")
    } else if( a%5 ){
        console.log("Buzz")
    } else {
        console.log(`${a} không chia hết cho 3 và 5 `)
    }
}

so(15)

//Bài 2

function ptbn (a,b){
    if(a==0 || b==0){
        console.log("x = 0")
    } else if(a!=0){
        console.log(`x = ${-b/a}`)
    }
} 

ptbn(6,-6)

//bài 3

function ptbh(a,b,c){
    if(a==0 || b==0 ){
        console.log("x=0")
    } else if(a==0 || b!=0){
        console.log(`x = ${-c/b}`)
    } else if(a!=0 || b==0){
        console.log(`x = ${-c/a}`)
    } else if(c==0 || a!=0 ){
        console.log(`x = ${-b/a} & x = 0`)
    } else if(d=b*b-4*a*c && d<0){
        console.log("Phương trình vô nghiệm")
    } else if(d=b*b-4*a*c && d==0){
        console.log(`x = ${-b/(2*a)}`)
    } else if(d=b*b-4*a*c && d>0){
        console.log(`x1 = ${(-b + Math.sqrt(d)/(2*a))} && x2 = ${(-b - Math.sqrt(d)/(2*a))}`)
    } 
}

ptbh(2,3,2)

// Bài 4

function tinhNamNhuan (a){
    if (a%4==0) {
        console.log(`${a} là năm nhuận`)
    } else {
        console.log(`${a} không phải năm nhuận`)
    }
}

tinhNamNhuan(2022)

//bài 5

function bmi(a,b){
    let bmi = a/(b*2)
    if(bmi<18.5){
        console.log("Gầy")
    } else if(bmi>18.5 && bmi<22.9){
        console.log("Bình thường")
    } else if(bmi>=23&&bmi<=30){
        console.log("béo phì")
    } return bmi
}

bmi(92,1.85)

//Bài 6

function chuyemDoiDo (c){
    let f = (c*1.8)-32
    return f
}

console.log(chuyemDoiDo(30))