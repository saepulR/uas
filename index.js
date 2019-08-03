//latihan.js
var readline =require('readline-sync');
var umur =
readline.question('masukan umur : ');
var muda =[0,35]
var tua =[35,40]
var parobaya =[35,60]

//if (muda[0]<= umur<=muda[1]) {
    if (umur >= 0 && umur <=35) {
        console.log('katagori muda= '+((umur-0)/35).toFixed(2))
    }else if(umur >=35 && umur <= 40) {
        console.log('kategori muda = ' + ((35 - umur) /5).toFixed(2))
        console.log('katagori tua = ' + ((umur -40 ) /5).toFixed(2))
    }else if (umur >= 35 && umur <=40) {
        console.log('katagori tua = ' + ((35- umur) /15).toFixed(2))
        console.log('katagori parobaya =' + ((umur-35) /15).toFixed(2))
    }else if (umur >=35 && umur <=60) {
        console.log(' katagori parobaya = '+(( 40- umur) / 5).toFixed(2))
        

    } 
    }
    }
    }
}