$('.menu-departamentos li:has(ul)>a').click(function(e){
    e.preventDefault();
    $(this).next('ul').slideToggle('fast');
});