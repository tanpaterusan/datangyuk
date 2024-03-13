/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*url-name */
// console.log('Window Location:', window.location);
const too = window.location.search;
const urlParams = new URLSearchParams(too);
const param = urlParams.get('to');
const upTo = param[0].toUpperCase() + param.substring(1);;
// const upTo = param.capitalizeFirstLetter();
document.getElementById('to').innerHTML = upTo + '  <i class="fa-solid fa-heart"></i>';


