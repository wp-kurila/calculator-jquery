$(document).ready(function() {
    var mCount = $('.m-count'),
        floorNumber = $('.floor-number'),
        typeOfHouse = $('input[name="typeOfHouse"]').val(),
        project = $('input[type="checkbox"]'),
        design = 0,
        baseCount = 30000,
        prise = $('#price'),
        finalPrise = 900000;

    prise.text(finalPrise);


    mCount.change(count);

    floorNumber.change(count);

    $('input[name="typeOfHouse"]').change(function() {
        typeOfHouse = $(this).val();
        count();
        if ($(this).val() == 1) {
            $('img').attr('src', 'img/1.jpg');
        } else {
            $('img').attr('src', 'img/2.png');
        };
    });

    project.change(function() {
        if ($(this).is(':checked')) {
            design = 15000;
            count()
        } else {
            design = 0;
            count();
        }
    });

    function count () {
        finalPrise = (mCount.val() * baseCount) * floorNumber.val() * typeOfHouse + design;
        prise.text(finalPrise);
    };
});


// let mCount = document.querySelector('.m-count'),
//     floorNumber = document.querySelector('.floor-number'),
//     typeOfHouse = document.getElementsByName('typeOfHouse'),
//     typeOfHouseVal = 1,
//     project = document.getElementById('design'),
//     design = 0,
//     baseCount = 30000,
//     inputCount = document.querySelector('.price-btn'),
//     price = document.getElementById('price'),
//     finalPrise = 900000,
//     img = document.getElementById('image');
//
// price.innerText = finalPrise;
//
// function learnType () {
//
//     for ( let i = 0; i < typeOfHouse.length; i++) {
//         if (typeOfHouse[i].checked) {
//             typeOfHouseVal = typeOfHouse[i].value;
//             if ( typeOfHouseVal == 1) {
//                 img.src = "img/1.jpg";
//             } else {
//                 img.src = "img/2.png";
//             };
//         };
//     };
//     count();
// };
//
// function count () {
//     finalPrise = mCount.value * baseCount * floorNumber.value * typeOfHouseVal + design;
//     price.innerText = finalPrise;
// };
//
//
// window.addEventListener('DOMContentLoaded', function () {
//
//     function count () {
//         finalPrise = mCount.value * baseCount * floorNumber.value * typeOfHouseVal + design;
//         price.innerText = finalPrise;
//     };
//
//     mCount.addEventListener('change', () => {
//         count ();
//     });
//
//     floorNumber.addEventListener('change', () => {
//         count ();
//     });
//
//     function learnType () {
//
//         for ( let i = 0; i < typeOfHouse.length; i++) {
//             if (typeOfHouse[i].checked) {
//                 typeOfHouseVal = typeOfHouse[i].value;
//                 if ( typeOfHouseVal == 1) {
//                     img.src = "img/1.jpg";
//                 } else {
//                     img.src = "img/2.png";
//                 };
//             };
//         };
//         count();
//     };
//
//     typeOfHouse.onclick = learnType ();
//
//     project.addEventListener('change', () => {
//         if (project.checked) {
//             design = 15000;
//             count();
//         } else {
//             design = 0;
//             count();
//         }
//     });
//
//     inputCount.addEventListener('click', () => {
//         learnType ();
//         count ();
//     });
// });
