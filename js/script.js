let name1 =prompt("ism kiriting")
let age =+prompt('yosh kiriting')

let name2 =prompt('ismingizni kiriting')
let age2 =+prompt('yoshingizni  kiriting')


let user1 ={
    names: name1,
    ages1: age
}

let user2 ={
    names: name2,
    ages2: age2
}


if(user1.ages1 > user2.ages2){
    console.log('Birinchi kiritilgan shaxsning yoshi katta');
}
else{
    console.log('Ikkinchi kiritilgan shaxsni yoshi kichik');
}
