const img = [
    'encontrodemaesrj', 
    'encontrodemaesrjbebe', 
    'encontrodemaesrjmaeebebe', 
    'encontrodemaesrjmaes'
];

let indice = 0;

setInterval("mudaImg()", 4000);

function mudaImg(i) {

    if (i == 0 || i == 1 || i == 2 || i == 3) {

        indice = i;


    } else {

        if (indice == img.length - 1) {

            indice = 0;

        } else {

            indice++;

        }

    }



    document.getElementById("banner_img").innerHTML = "<img src='banner/" + img[indice] + ".jpg'  alt='Banner'>";

}