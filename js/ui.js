/*
* TABLE OF CONTENTS
*
* List JS file
* go top
* tab tool page
* photoswipe
* toolsPage
* channel-timeline
*    -> toggle login-board
*    -> toggle setting-board
* report choose tag
*    -> toggle context-menu channelpage
*/

/* > List JS file */

// '/vendor/jquery-3.1.1.js',
// '/photoSwipe/dist/photoswipe.min.js', //popup image  ++++ warning với jquery3.1.1 
// '/photoSwipe/dist/photoswipe-ui-default.min.js' //popup image 


// '/vendor/jquery-migrate-3.0.0.js', // make older code can run in newest jquery
// '/vendor/jquery.bxslider.js', //  slider 
// '/vendor/jquery.fixer.js',


// pin menu 
$(document).scroll(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 210) $('.nav').addClass('is-fixed');
    else $('.nav').removeClass('is-fixed');
});

// slimscroll
$('.rank2-stories .wrap').slimscroll({
    height: '455px'
});


// bx-slider
$('.news-slider .wrap').bxSlider({
    controls: false,
    pager : false,
    slideWidth: 310, 
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 3,
    auto : true,
    pause : 20000
});

$('.timeline-event .wrap').bxSlider({
    controls: false,
    pager: true,
    slideWidth: 650, 
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 10,
    auto : true
});

// tooltip
$('[data-toggle="tooltip"]').tooltip();   

// tab
$(".box-file .panel-title a").click(function(e) {
    e.preventDefault();
    $(this).addClass("is-active");
    $(this).siblings().removeClass("is-active");
    var t = $(this).attr("data-target");
    $(".panel-content .panel").not(t).css("display", "none");
    $("#" + t).show()
});





/*
// > go top 
$("#go-top").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 800);
    return false;
});

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) $('#go-top').fadeIn();
    else $('#go-top').fadeOut();
});


// > photoswipe
// note            : used in article page
// import          : 'photoSwipe/dist/photoswipe.min.js', 
//                 : 'photoSwipe/dist/photoswipe-ui-default.min.js'

$(".article__body img").wrap(function(index) {
    var _this = $(this);
    var src = $(this).attr("src");
    src = src.replace("w460x", "");
    var box_desc = $(this).parent().find(".image_caption");
    if (box_desc == null) {
        box_desc = $(this).find("em");
    }
    var desc = box_desc == null ? document.title.replace("\"", "&quot;").replace("“", "&quot;").replace("”", "&quot;") : box_desc.text();
    return "<a class='photo' href='" + src + "' data-desc='" + (desc == undefined ? "" : desc) + "' data-index='" + index + "' />";
});
$('.article__body').each(function() {
    var $pic = $(this),
        getItems = function() {
            var items = [];
            $pic.find('a.photo').each(function() {
                var item = { src: $(this).attr("href"), w: 0, h: 0, title: $(this).attr("data-desc") }
                items.push(item);
            });
            return items;
        }
    var items = getItems();
    var $pswp = $('.pswp')[0];
    $pic.on('click', 'a.photo', function(event) {
        event.preventDefault();
        var $index = $(this).data('index');
        var options = {
            index: $index,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            tapToClose: true,
            shareEl: false,
            captionEl: true
        }

        // Initialize PhotoSwipe
        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
    });
});

// > toolsPage
// location        : sidebar 

$('.accordion__toggle').click(function() {
    //Expand or collapse this panel
    $(this).toggleClass('is-active');
    $(this).next().toggleClass('is-active');
    //Hide the other panels
    $(".accordion__toggle").not($(this)).removeClass('is-active');
    $(".accordion__content").not($(this).next()).removeClass('is-active');
});

// > channel-timeline 
// location        : homepage
$('.channel-timeline .expand-button').click(function() {
    $(".channel-timeline").toggleClass('is-active');
});

$('.channel-timeline .more').click(function() {
    _this = $(this);
    _this.toggleClass('has-touched');
    $(".box-tabs").toggleClass('has-expand');
});

// >> toggle login-board
$('.login .uName').click(function() {
    _this = $(this);
    _this.toggleClass('has-touched');
    _this.next().toggleClass('is-active');
});

$('.logged .uName').click(function() {
    _this = $(this);
    _this.toggleClass('has-touched');
    _this.next().toggleClass('is-active');
});

// >> toggle setting-board
$('.btn-noti').hover(function() {
    _this = $(this);
    _this.next().toggleClass('is-active');
});
$('.btn-noti').click(function() {
    _this = $(this);
    _this.toggleClass('is-active');
});


// > report choose tag
$('#report-modal label input').on('change', function() {
    $(this).closest("#report-modal label").toggleClass('is-active');
});

$(".user-tab .title a").click(function(e) {
    e.preventDefault();
    $(this).addClass("is-active");
    $(this).siblings().removeClass("is-active");
    var t = $(this).attr("href");
    $(".user-tab .panel").removeClass("is-active");
    $(".user-tab " + t).addClass("is-active");
});

// >> toggle context-menu channelpage
$('.tools-box__move').click(function() {
    _this = $(this);
    _this.toggleClass('has-touched');
    _this.siblings('.tools-box__context-menu').toggleClass('is-active');
});

*/