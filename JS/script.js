let barsIcon = document.querySelector('.fa-bars');
let timesIcon = document.querySelector('.times-icon');
let hiddenNav = document.getElementById('hidden-nav');
let hiddenSearch = document.querySelector('.hidden-search');
// let headerSearch = document.querySelector('#header .search');
// let headerNav = document.queryCommandIndeterm('#header nav');

barsIcon.addEventListener('click', function(){
    hiddenNav.style.display = 'block';
    timesIcon.style.display = 'block';
    barsIcon.style.display = 'none';
    hiddenSearch.style.display = 'flex';
    // headerSearch.style.display = "hidden";
    // headerNav.style.display = "hidden";

});

timesIcon.addEventListener('click', function(){
    hiddenNav.style.display = 'none';
    timesIcon.style.display = 'none';
    barsIcon.style.display = 'block';
    hiddenSearch.style.display = 'none';
});