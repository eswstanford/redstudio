 $(function () {
        // I build my menus out of lists and style them using CSS as well.
        var menus = $('.topbar li a');
        //menus.removeClass('current');

        var matches = menus.filter(function () {
            return document.location.href.indexOf($(this).attr('href')) >= 0;
        });

        matches.addClass('active');
    });