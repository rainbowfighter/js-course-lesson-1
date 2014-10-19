'use strict';

function int2roman(input) {
    var maradek = 0;
    var szamJegyek = {
        ezresek: 0,
        otszazasok:0,
        szazasok:0,
        otvenesek:0,
        tizesek: 0,
        otosok:0,
        egyesek: 0
    };

    var result = "";
    var romai = function(input){


        if(input >= 1000){
            szamJegyek.ezresek = parseInt(input/1000);
            for(var i = 0; i<  szamJegyek.ezresek; i++){
                result+="M";
            }
            maradek = input%1000;
            romai(maradek);
        }
        else if(input >= 500){
            szamJegyek.otszazasok = parseInt(input/500);
            for(var i = 0; i<  szamJegyek.otszazasok; i++){
                result+="D";
            }
            maradek = input%500;
            romai(maradek);

        }
        else if(input >= 100){
            szamJegyek.szazasok = parseInt(input/100);
            if(szamJegyek.szazasok === 4){
                if(szamJegyek.otszazasok != 0){
                    rresult = result.slice(0,result.length-1);
                    result += "CM"
                }
                else{
                    result += "CD"
                }
            }

            else {
                for (var i = 0; i < szamJegyek.szazasok; i++) {
                    result += "C";
                }
            }
            maradek = input%100;
            romai(maradek);

        }
        else if(input >= 50){
            szamJegyek.otvenesek = parseInt(input/50);
            for(var i = 0; i<  szamJegyek.otvenesek; i++){
                result+= "L"
            }
            maradek = input%100;
            romai(maradek);

        }
        else if(input >= 10){
            szamJegyek.tizesek = parseInt(input/10);
            if(szamJegyek.tizesek === 4){
                if(szamJegyek.otvenesek != 0){
                    result = result.slice(0,result.length-1);
                    result += "XC"
                }
                else{
                    result += "XL"
                }
            }
            else {
                for (var i = 0; i < szamJegyek.tizesek; i++) {
                    result += "X";
                }
            }
            maradek = input%10;
            romai(maradek);

        }
        else if(input >= 5){
            szamJegyek.otosok = parseInt(input/5);
            for(var i = 0; i<  szamJegyek.otosok; i++){
                result+="V";
            }
            maradek = input%5;
            romai(maradek);

        }
        else{
            szamJegyek.egyesek = input;
            if(szamJegyek.egyesek === 4){
                if(szamJegyek.otosok != 0){
                    result = result.slice(0,result.length-1);
                    result += "IX"
                }
                else{
                    result += "IV"
                }
            }
            else {
                for (var i = 0; i < szamJegyek.egyesek; i++) {
                    result += "I";
                }
            }
        }



        console.log(szamJegyek);
        return result;
    };
    return romai(input);
};

module.exports = int2roman;

