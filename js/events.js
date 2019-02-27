/**
 * I took this function from Stack Overflow.
 * https://stackoverflow.com/a/49206845
 * @param {object} elem the element to track 
 */
function elementInView(elem){
    return ($(window).height() + $(window).scrollTop()) > $(elem).offset().top;
};

$(document).ready(function() {
    $('#get-started').click(function() {
        ga('send', 'event', 'Introduction', 'reach introduction - by button', 'The Main Website');
    });

    $('#copy-button').click(function() {
        ga('send', 'event', 'Copy Address', 'copy address - by button', 'The Main Website');
    });

    $('#get-started').waypoint(function() {
        ga('send', 'event', 'Introduction', 'reach introduction - by scroll', 'The Main Website');
    });

    $('#contribute').waypoint(function() {
        ga('send', 'event', 'Contribute', 'reach contribution - by scroll', 'The Main Website');
    });

    $('#faq').waypoint(function() {
        ga('send', 'event', 'FAQ', 'reach faq - by scroll', 'The Main Website');
    });

    $('#activity').waypoint(function() {
        ga('send', 'event', 'Activity', 'reach activity - by scroll', 'The Main Website');
    });
});
