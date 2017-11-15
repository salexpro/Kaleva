/*
@codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
@codekit-prepend '../../bower_components/owl.carousel/dist/owl.carousel.min.js';
*/

$(document).foundation();

$('.slider_inner').owlCarousel({
    items: 1
});

$('.prices_slider').owlCarousel({
    items: 3,
    margin: 100
});

$('.reviews_slider').owlCarousel({
    items: 1
});

function put_data(model){
    $('.prices_item_name span').text(model.name);
    $.each(model, function(key, val){
        if(typeof(val) === 'object'){
            $('.prices_item_content--' + key + ' .prices_item_price s').text(val.old_price + ' руб.');
            $('.prices_item_content--' + key + ' .prices_item_price b').text(val.price + ' руб.');
            $('.prices_item_content--' + key + ' .prices_item_price span').text(val.action);
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