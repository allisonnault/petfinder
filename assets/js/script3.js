var searchParamsArr = document.location.search.split('&');
var dogID = searchParamsArr[0].split('=')[1];

var petFinderKey = "4z5js4u2Bie6Gn4LK2v6IjeXiCEHN7QjMerLwamf5MbkXyBllB";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ejVqczR1MkJpZTZHbjRMSzJ2NklqZVhpQ0VITjdRak1lckx3YW1mNU1ia1h5QmxsQiIsImp0aSI6IjZiMmNiNjQwNTU4YzMyMWFjN2I2YTkxNTIwYmQ5ZWE1Y2U2ZmVjOGYxNTFiODcyN2JkMzNjMjhkZDQyM2YwNGJlNjNmZjI4MDdiNDFmOWUzIiwiaWF0IjoxNjc2MzAyMDAxLCJuYmYiOjE2NzYzMDIwMDEsImV4cCI6MTY3NjMwNTYwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.QBoE0Bt1KtVox50Dy9jK9rYDVwiRKd1Z9k_8Yg3-dHSQmUyRYXVAG9M468qZmCKHcrgrS7-Vi9oGiQ2X04NUAOJY3Hq6CUhhfDclWaNfc7RoA8cA9_DZfj9ARo7kUSXKdQbhXq8GjLcYZ6JettzVW_X0YjPV1bMhXlGOi2jMSM4N6K_IwRc5fzShLUw7ZSu2BMMfNb9ggJ_T4AnPR6qYfB_1rzPcZ-Nv6H3LT6FX5-zElflwK4ZIbd6Ldx12BGA_rJewheCymbHcPzuvBdxC8HpmJK6r34yrkNnHrTD8Hv4wFzKY6yCR44W671IAbvlaftXeYLAQVvhejKt4WD7QGw';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed;

function dogBreedInfo(){
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;
fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        
        // column 3 image
        var myImg = JSON.stringify(data[0].image_link);
        var imageContainer = document.getElementById('image-link');
        var img1 = document.createElement('img');
        myImg = myImg.replace(/['"]/g, '');
        img1.setAttribute('src', myImg);
        imageContainer.append(img1);
        
        //column 3 info
        document.getElementById('barking').innerHTML = ('Barking: ' + data[0].barking);
        document.getElementById('drooling').innerHTML = ('Drooling: ' + data[0].drooling);
        document.getElementById('energy').innerHTML = ('Energy: ' + data[0].energy);
        document.getElementById('child-friendly').innerHTML = ('Child Friendly: ' + data[0].good_with_children);
        document.getElementById('maxage').innerHTML = ('Max age: ' + data[0].max_life_expectancy);
        document.getElementById('playfulness').innerHTML = ('Playfulness: ' + data[0].playfulness);
        document.getElementById('protective').innerHTML = ('Protective: ' + data[0].protectiveness);
        document.getElementById('shedding').innerHTML = ('Shedding: ' + data[0].shedding);
        document.getElementById('trainability').innerHTML = ('Trainability: ' + data[0].trainability);
        
        })}       

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                
                breed = (data.animal.breeds.primary);
                dogBreedInfo();
///seleted dog center image
        $('.dog-image img').attr('src', data.animal.primary_photo_cropped.large);

////selected dog info

        var dogName = $('#dog-name');
        dogName.text(data.animal.name);

        var dogInfo = $('#dog-info');
        var dogDesc = $('<li>');
        dogDesc.text(data.animal.description);
        dogInfo.append(dogDesc);
        
        var dogBreed = $('<li>');
        dogBreed.addClass = ('card dogBreed');
        dogBreed.text(data.animal.breeds.primary);
        dogInfo.append(dogBreed);
                
        var dogEmail = $('<li>');
        dogEmail.text(data.animal.contact.email);
        dogInfo.append(dogEmail);

        var dogPhone = $('<li>');
        dogPhone.text(data.animal.contact.phone);
        dogInfo.append(dogPhone);

        var dogCity = $('<li>');
        dogCity.text(data.animal.contact.address.city)
        dogInfo.append(dogCity);
                
        })
        

        displayFavorites();
var favList = $('#favorites');
function displayFavorites() {
        var favorites = JSON.parse(localStorage.getItem('favorites'))
        for (let i = 0; i < favorites.length; i++) {
                var dogID = favorites[i];
                var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;

                fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
                        .then(function (response) {
                                return response.json();
                        })
                        .then(function (data) {
                                var dogCard = $('<div>');
                                dogCard.addClass('card dogCards');
                                dogCard.attr('data-id', data.animal.id);
                                var dogImg = $('<div>');
                                dogImg.addClass('card-image')
                                dogCard.append(dogImg);
                                var figureEl = $('<figure>');
                                figureEl.addClass('image');
                                dogImg.append(figureEl);
                                imgEl = $('<img>');
                                imgEl.attr('src', data.animal.primary_photo_cropped
                                        .small);
                                figureEl.append(imgEl);
                                var dogInfo = $('<div>');
                                dogInfo.addClass('card-content');
                                dogCard.append(dogInfo);
                                var dogName = $('<h2>');
                                dogName.addClass('title is-4')
                                dogName.text(data.animal.name);
                                dogInfo.append(dogName);
                                var listEl = $('<ul>');
                                dogInfo.append(listEl);var viewBtn = $('<button>');
                                viewBtn.addClass('button viewBtn');
                                viewBtn.text("view full bio");
                                dogCard.append(viewBtn);
                                favList.append(dogCard);

                        });
        }
}

favList.on('click', '.viewBtn', function (){
        var dogID = $(this).parent().attr("data-id");
        location.href = './thirdpage.html?' + 'id=' + dogID;
});