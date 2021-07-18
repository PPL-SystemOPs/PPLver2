$(document).ready(function() {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });

    /**
     * Homepage slider
     */
     $('.main-banner').slick({
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease',
        centerPadding: 0,
        adaptiveHeight: true,
        dots: false,
        arrows: false,
        draggable: true,
    });
    $('.members-logo').slick({
        infinite: true,
        slidesToShow: 6,
        adaptiveHeight: true,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        centerPadding: 0,
        speed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive :[
            {
                breakpoint: 991,
                adaptiveHeight: false,
                centerMode: true,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 740,
                adaptiveHeight: false,
                centerMode: true,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $(".testimonial-reel").slick({
      centerMode: true,
      centerPadding: "40px",
      dots: false,
      autoplay: true,
      slidesToShow: 3,
      infinite: true,
      arrows: false,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
});
  
document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 740) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

            everyitem.addEventListener('mouseover', function(e){

                let el_link = this.querySelector('a[data-bs-toggle]');

                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');

                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
}); 
// DOMContentLoaded  end