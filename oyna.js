let oyuncuSayisi = 0;
let oyunSayisi = 0;

function arrayToplami(arr) {
    let sum = 0
    for(i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isZero(number) {
    return number == 0;
}

function oyna() {
    oyuncuSayisi = document.getElementById("oyuncuSayisi").value;
    oyunSayisi = document.getElementById("oyunSayisi").value;

    let kazanmaSayilari = new Array; 
    for(i=0;i<oyuncuSayisi;i++) {
        kazanmaSayilari[i] = 0;
    };

    let turSayilari = new Array;

    for(k=0;k<oyunSayisi;k++) {
        let oyun = new Array;
        oyun[0] = 1;
        for(j=1;j<oyuncuSayisi;j++) {
            oyun[j] = 0;
        };
        let siradakiOyuncu = 0;
        let turSayisi = 0;
        while(arrayToplami(oyun) < (oyuncuSayisi-1)) {
            if (getRandomIntInclusive(0,1) == 0) {
                if(siradakiOyuncu == 0) {
                    oyun[oyuncuSayisi-1] = 1;
                    siradakiOyuncu = oyuncuSayisi-1;
                }
                else {
                    oyun[siradakiOyuncu-1] = 1;
                    siradakiOyuncu = siradakiOyuncu-1;
                }
            }
            else {
                if(siradakiOyuncu == oyuncuSayisi-1) {
                    oyun[0] = 1;
                    siradakiOyuncu = 0;
                }
                else {
                    oyun[siradakiOyuncu+1] = 1;
                    siradakiOyuncu = siradakiOyuncu+1;
                }
            }
            turSayisi++;
        }
        //console.log(turSayisi);
        turSayilari.push(turSayisi);
        kazanmaSayilari[oyun.findIndex(isZero)] += 1;
    };

    for(l=0;l<kazanmaSayilari.length;l++) {
        let tag = document.createElement("p");
        let text =  document.createTextNode("Oyuncu " + l + " kazanma sayisi: " + kazanmaSayilari[l] + "\n");
        tag.appendChild(text);
        let element = document.getElementById("kazanmaSayilari");
        element.appendChild(tag);
    };

    let tag_min = document.createElement("p");
    let text_min =  document.createTextNode("En kisa oyun " + Math.min.apply(Math, turSayilari) + " tur surdu!");
    tag_min.appendChild(text_min);
    let element_min = document.getElementById("kazanmaSayilari");
    element_min.appendChild(tag_min);

    let tag_max = document.createElement("p");
    let text_max =  document.createTextNode("En uzun oyun " + Math.max.apply(Math, turSayilari) + " tur surdu!");
    tag_max.appendChild(text_max);
    let element_max = document.getElementById("kazanmaSayilari");
    element_max.appendChild(tag_max);


}