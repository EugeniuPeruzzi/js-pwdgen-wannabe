const const_number = '21';

let user_name = prompt('Quale e il tuo nome di nascita?');

let user_surname = prompt('Quale e il tuo cognome?');

let user_favorite_color = prompt('Quale e il tuo colore preferito?');


let pwd_user = (`${user_name}${user_surname}${user_favorite_color}${const_number}`);


document.getElementById('pwd_user').innerHTML =`${pwd_user}`;