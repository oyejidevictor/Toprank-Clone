




document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    });
    
    
              $(document).ready(function(){
                $(".owl-carousel").owlCarousel({
                  items:3,
                  loop:true,
                  margin:10,
                  responsiveClass:true,
                  autoplay:true,
                  autoplayTimeout:3000,
                  autoplayHoverPause:true,
                  responsiveClass:true,
                  responsive:{
                    0:{
                      items:1
                    },
                    1000:{
                        items:3
                    }
                  }
                });
              });
              const lightbox = Glightbox({
                  slideEffect:'zoom',
                  touchFollowAxis:false
              });
    















































// var text = '';
// var numb = [39, 3, 5, 7, 9, 10, 6];
// var newNumb = numb.forEach(myFunction)
// function myFunction(value) {
//     return text = text + value + '\n';
// }

// var mapArray = numb.map(myMap);
// function myMap(value) {
//     return value ** 2
// }
// console.log(mapArray)

// var numbFilter = numb.reduce((total, v) => total + v)
// console.log(numbFilter)
// console.log(numb.findIndex((v) => v > 5))

