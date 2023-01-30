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


// ==========================================Temp//////==========
// ==========================================Temp//////==========
function getCardNumber(cardnumber){
    const getCard = [];
    
    for (let i = 0; i < cardnumber.length; i++){
        if(i < cardnumber.length - 4 ){
            getCard.push( '*' );
        } else{
            getCard.push(cardnumber[i])
        }
    }
    return getCard.join('')
    }
    sasa = [2132322424322211]
    let salom = getCardNumber(sasa)
    console.log(getCardNumber(salom))