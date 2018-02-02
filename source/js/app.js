/*
@codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.triggers.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.offcanvas.min.js';
@codekit-prepend '../../bower_components/owl.carousel/dist/owl.carousel.min.js';
*/

$('.slider_inner').owlCarousel({
    items: 1
});

$('.prices_slider').owlCarousel({
    items: 3,
    margin: 80,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2,
            margin: 20
        },
        640: {
            items: 3,
            margin: 30
        },
        1024: {
            margin: 80
        }
    }
});

$('.reviews_slider').owlCarousel({
    items: 1
});

function put_data(model){
    $('.prices_item_name span').text(model.name);
    $.each(model, function(key, val){
        if(typeof(val) === 'object'){
            $('#old_price_' + key).text(val.old_price + ' руб.');
            $('#price_' + key).text(val.price + ' руб.');
            $('#offer_' + key).text(val.offer);
        }
    });
}

var models;

$.getJSON('./js/prices.json', function(prices) {
    models = prices.models;
    put_data(models.standart);
});

$('.prices_models_item').click(function(){
    $('.prices_models_item').removeClass('active');
    $(this).addClass('active');
    var model = $(this).data('model');
    put_data(models[model]);
});