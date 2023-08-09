const api_key = 'live_ncL0WbgwNORxUeFtYdYCBDDdXxQX0el6H3e4nVjQl5eQZrYCNqvTdEgSAqPWcwae';

let img_container = document.querySelector('img')
let cat_caption = document.getElementById('cat_name')
let change_button = document.getElementById('change')

function rand_img() {
    let url = ' https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key' + api_key;
    console.log('requst url:', url)
    img_container.src = 'url'
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let img = myJson.photos[randInt(myJson.photos.length)];
        console.log(img);

        img_container.src = img.img_src;
        caption.innerHTML = img.camera.full_name + " " + img.earth_date;
    });
}

rand_img()
     
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let img = myJson.photos[randInt(myJson.photos.length)];
        console.log(img);

        img_container.src = img.img_src;
        caption.innerHTML = img.camera.full_name + " " + img.earth_date;
    });


rand_img();