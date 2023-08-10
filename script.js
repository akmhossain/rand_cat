const api_key = 'live_ncL0WbgwNORxUeFtYdYCBDDdXxQX0el6H3e4nVjQl5eQZrYCNqvTdEgSAqPWcwae';

let img_container = document.querySelector('img');
let cat_caption = document.getElementById('cat_name');
let change_button = document.getElementById('change');

function rand_img() {
    let url = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=' + api_key;
    console.log('request url:', url);

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let img = myJson[0];
        console.log(img);

        img_container.src = img.url;
        cat_caption.innerHTML = "This is " + img.breeds[0].name;
    });
}

rand_img();

change_button.addEventListener('click', rand_img);