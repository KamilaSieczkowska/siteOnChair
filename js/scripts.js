

document.addEventListener('DOMContentLoaded', function() {
    

    //--------- hamburger nav ------------

    var mobile = window.matchMedia('screen and (max-width: 500px)');
    var hamburger = document.getElementById('hamburger');
    
    var nav = document.getElementById('nav');
    console.log(nav)
    
    hamburger.addEventListener('click', function(){
        var display = nav.style.display;
        
        if (display === 'block') {
            nav.style.display = 'none';
            nav.classList.remove('active');
        }
    
        else {
            nav.style.display = 'block';
            nav.classList.add('active'); 
        }
        
    })
    
    mobile.addListener( function(mob){
        if (!mob.matches) {
            nav.removeAttribute('style');
        }
    
    });

    //--------- submenu nav ------------
    var about = document.getElementById('about');
    console.log(about);
    var sumbenu = document.getElementById('submenu');

    about.addEventListener('click', function(){
        var display = sumbenu.style.display;

        if (display === 'block') {
            sumbenu.style.display = 'none';
        }
    
        else {
            sumbenu.style.display = 'block'; 
        }
    })
    
    mobile.addListener( function(mob){
        if (!mob.matches) {
            submenu.removeAttribute('style');
        }
    });
    
    
    //------------- slider ----------------------

    

    //-------------pictures --------------

    var boxes = document.querySelectorAll('.picture-cnt');
    var markBox = function(e) {
        e.preventDefault();

        for (var i=0; i<boxes.length; i++) {
            boxes[i].classList.remove('active-box');
        }

        e.currentTarget.classList.add('active-box');
    };

    for (var i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('click', markBox)
    }


    
    }) // koniec DOM loadera
    
    
