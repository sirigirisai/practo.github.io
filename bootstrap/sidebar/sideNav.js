
function shownav(){
$('.sidebar').css({width:"300px"});
$('.show-btn').hide();
$('.second').hide();
$('.first').css({
    'transform':'translate('+4+'px, '+4+'px) rotate('+135+'deg)',
    'transition':''+0.4+'s',
});
$('.third').css({
    'transform':'translate('+4+'px, '+-4+'px) rotate('+-135+'deg) ',
    'transition':''+0.4+'s',
});
};
function hidenav(){
    $('.sidebar').css({width:"0"});
    $('.show-btn').show(300);
    $('.first').css({
        'transform':'translate('+0+'px, '+0+'px) rotate('+0+'deg)', 
        'transition':''+0.4+'s',
    });

    $('.third').css({
        'transform':'translate('+0+'px, '+0+'px) rotate('+0+'deg)', 
        'transition':''+0.4+'s',
    })

};
