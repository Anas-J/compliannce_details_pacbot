//for the search bar
function search(){
    document.getElementById('searchbar').className = "searchbarafter";
    document.getElementById('searchicon').className = "searchiconafter";
}

//for left dropdown
function steveclick() {
    document.getElementById('dropdown_content').style.display = "flex";
    document.getElementById('main1').style.opacity = "0.4";
}

//for opening modal 
function modal() {
    document.getElementById("modal").style.display="flex";
    document.getElementById('dropdown_content').style.display = "none";
}
// for opening right dropdown
function userclick(){
    document.getElementById('user_dropdown_content').style.display = 'flex';
    document.getElementById('main1').style.opacity = "0.4";
}

//for handling any clicks made on the page
window.onload = function(){   // to close all popups on clicking the window
    document.onclick = function(e){
        // closing the modal
       if(e.target.id == 'modal') {
           document.getElementById('modal').style.display = 'none';
       }

       //closing the right dropdown
       if((e.target.id !== 'user_drop')&&(e.target.id !== 'userdetail')&&(e.target.id !== 'user_dropdown_content')&&(e.target.id !== 'user_drop_item')&&(e.target.id !== 'hi')&&(e.target.id !== 'shape')&&(e.target.className !== 'icon')){
            document.getElementById('user_dropdown_content').style.display = 'none';
            document.getElementById('main1').style.opacity = "1";
        }

        //closing the left dropdown
       if((e.target.id !== 'stevedrop')&&(e.target.id !== 'dropdown_div')&&(e.target.id !== 'dropdown_content')&&(e.target.className !== 'steve')&&(e.target.className !== 'downarrow')&&(e.target.className !== 'downarrowimg')&&(e.target.className !== 'dropdown')&&(e.target.className !== 'dropdown-item')&&(e.target.className !== 'dropdown-link')){
            document.getElementById('dropdown_content').style.display = 'none';
        }

        //closing the searchbar
        if ((e.target.id !== 'search')&&(e.target.id !== 'searchicon')&&(e.target.id !== 'searchbar')) {
            searchbar.className = "searchbar";
            searchicon.className = "searchicon";
        }

        //closing the sidebar
        if((e.target.id !== 'sidebar')&&(e.target.id !== 'pacimg')&&(e.target.id !== 'side')){
            document.getElementById("sidebar").style.transform="translateX(100%)";
         }
    };
};

//closing the modal using the close buttton
let span = document.getElementsByClassName("modal-close")[0];
span.onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

//handlling the least compliant tile
tabsvp = document.getElementById("tab-svp");
tabvp = document.getElementById("tab-vp");
tabsrdir = document.getElementById("tab-srdir");
tabdir = document.getElementById("tab-dir");
tabapp = document.getElementById("tab-app");
sec8 = document.getElementById("sec8");
sec8nonapp = document.getElementById("sec8nonapp");

//svp tab
function svp() {
    tabapp.className = "tab-inactive";
    tabsvp.className = "tab-active";
    tabvp.className = "tab-inactive";
    tabsrdir.className = "tab-inactive";
    tabdir.className = "tab-inactive";
    sec8.style.display = "none";
    sec8nonapp.style.display = "flex";
}

//vp tab
function vp(){
    tabapp.className = "tab-inactive";
    tabsvp.className = "tab-inactive";
    tabvp.className = "tab-active";
    tabsrdir.className = "tab-inactive";
    tabdir.className = "tab-inactive";
    sec8.style.display = "none";
    sec8nonapp.style.display = "flex";
}

//sirdir tab
function srdir(){
    tabapp.className = "tab-inactive";
    tabsvp.className = "tab-inactive";
    tabvp.className = "tab-inactive";
    tabsrdir.className = "tab-active";
    tabdir.className = "tab-inactive";
    sec8.style.display = "none";
    sec8nonapp.style.display = "flex";
}

//director tab
function director(){
    tabapp.className = "tab-inactive";
    tabsvp.className = "tab-inactive";
    tabvp.className = "tab-inactive";
    tabsrdir.className = "tab-inactive";
    tabdir.className = "tab-active";
    sec8.style.display = "none";
    sec8nonapp.style.display = "flex";
}

//application tab
function app(){
    tabapp.className = "tab-active";
    tabsvp.className = "tab-inactive";
    tabvp.className = "tab-inactive";
    tabsrdir.className = "tab-inactive";
    tabdir.className = "tab-inactive";
    sec8.style.display = "flex";
    sec8nonapp.style.display = "none";
}

// to activate sidebar
function sidebar(){ 
    document.getElementById("sidebar").style.transform="translateX(0)";
}