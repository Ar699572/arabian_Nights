!window.jQuery && document.write(unescape('%3Cscript src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.10.2.min.js"%3E%3C/script%3E'));

!function (e, t, r) { function n() { for (; d[0] && "loaded" == d[0][f];)c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i) } for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();)a = e.createElement(t), "async" in i ? (a.async = !1, e.body.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s }(document, "script", ['Scripts/helpers.min.js'])

if (Page == 'home') {
    !function (e, t, r) { function n() { for (; d[0] && "loaded" == d[0][f];)c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i) } for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();)a = e.createElement(t), "async" in i ? (a.async = !1, e.body.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s }(document, "script", ['Scripts/fluid_dg.min.js'])
    $('#Page_loader').hide()
}

$(window).load(function (e) {
    $('.shownext').click(function () { $('.subdd').hide('fast'); $(this).next().slideToggle('fast'); });
    $('.dd_next').click(function () {
        $(this).next().slideToggle('fast'); $(this).toggleClass('dd_next_act');
    })

    $("#products").owlCarousel({ autoplay: true, dots: true, nav: false, rtl: false, navText: ['<', '>'], items: 4, responsive: { 0: { items: 1 }, 400: { items: 1 }, 600: { items: 2 }, 991: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 } } });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) { $('.top2').addClass('t2_fixer'); $('.top2_b').css({ 'display': 'block' }) }
        else { $('.top2').removeClass('t2_fixer'); $('.top2_b').css({ 'display': 'none' }) }
    })

    $(window).scroll(function () { $(".parallax_bg").each(function () { $(this).css("background-position", "50% " + ($(window).scrollTop() - $(this).offset().top) / 20 + "px") }) });

    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () { if ($(this).scrollTop() > 100) { $('#back-top').fadeIn(); } else { $('#back-top').fadeOut(); } });
        $('#back-top a').click(function () { $('body,html').animate({ scrollTop: 0 }, 800); return false; });
    });

    if (Page == 'home') {

        $(function () { $('#fluid_dg_wrap_1').fluid_dg({ thumbnails: false, height: "36%", navigation: 'false', minHeight: '120', fx: 'simpleFade,scrollRight,scrollLeft', navigationHover: 'false', playPause: 'false', loader: 'none', hover: 'false', time: 3000, 
        onLoaded: function () { $('#Page_loader').fadeOut() } }); })
    }
});