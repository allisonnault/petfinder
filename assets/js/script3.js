
//dogs API 
// var ninjaDogURL =  'https://api.api-ninjas.com/v1/dogs?name=' + breed;

// var breed = 'pitbull';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed = "golden";
var energy = "3";
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;// + '&energy=' + energy;

//var barking = document.getElementById('barking').innerHTML;



fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);

var myImg = JSON.stringify(data[0].image_link);

//         function GFG_Fun() {
//                 var img = document.createElement('img');
//                 img.src =
//                 myImg;
//     //'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
//                 document.getElementById('image-link').appendChild(img);
                
//         }

        
//GFG_Fun();
        //myImg.src = JSON.stringify(data[0].image_link);
        console.log(myImg);
        //myImg.src = ('<img src=\'' + (data[0].image_link) + '\' alt="Placeholder image">');
        var imageContainer = document.getElementById('image-link');
        var img1 = document.createElement('img');
        img1.setAttribute('src', myImg);
        imageContainer.append(img1);
        console.log(img1);
        //console.log('<img src=\'' + (data[0].image_link) + '\' alt="Placeholder image">');
        
        //document.getElementById('image-link').appendChild(img);

        
        document.getElementById('barking').innerHTML = ('Barking:' + data[0].barking);
        document.getElementById('drooling').innerHTML = ('Drooling:' + data[0].drooling);
        document.getElementById('energy').innerHTML = ('Energy:' + data[0].energy);
        document.getElementById('child-friendly').innerHTML = ('Child Friendly:' + data[0].good_with_children);
        document.getElementById('maxage').innerHTML = ('Max age:' + data[0].max_life_expectancy);
        document.getElementById('playfulness').innerHTML = ('Playfulness:' + data[0].playfulness);
        document.getElementById('protective').innerHTML = ('Protective:' + data[0].protectiveness);
        document.getElementById('shedding').innerHTML = ('Shedding:' + data[0].shedding);
        document.getElementById('trainability').innerHTML = ('Trainability:' + data[0].trainability);
        


        
        })

        

var dogBreed = "https://api.api-ninjas.com/v1/dogs?name="+breed;
var dogEnergy = "https://api.api-ninjas.com/v1/dogs?energy="+energy;


//document.getElementById('barking').innerHTML = ('Barking:' +data.list[0].barking);




// function searchFormSubmit(event) {
//     event.preventDefault();
//     var zipCode = $('.input').val();
//     var dogAge = $('#dog-age').val();
//     var dogSize = $('#dog-size').val();
//     var gender = $('#gender').val();

//     fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
//             .then(function (response) {
//                     return response.json();
//             })
//             .then(function (data) {

//                     console.log(data);
//             })

// }

// searchBtn.on('click', searchFormSubmit)