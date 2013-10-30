$(document).ready(function () {
    $hidden = $('.section');
    $alias = $('.alias');
    $button = $('.button');
    $ajax = $('.ajax');
    $displayText = $('.displayText');
    $tweet = $('#tweet').html();
    $tweets = $('.tweets');
    $dim = $('#dimScreen');

    var urlButton = "http://bootcamp.aws.af.cm/welcome/tunombre";
    var urlAjax = "http://tweetproxy.ap01.aws.af.cm/search";

    /** Textarea Fade-in & Focus **/
    $hidden.fadeIn(1000, function () {
        $alias.focus();
    });


    $button.on('click', function () {
        this.disabled = true;
        // Solicitud
        $.get(url, function (data) {

            // Quitamos la clase error-text si estuviera
            // e inyectamos el response...						
            $displayText.html(data.response);
            highlight();


        }, 'json').fail(function () {
            // Si falla colocamos un mensaje de error...
            $displayText.addClass('error').html('An error occurred while receiving the http response');
        });

        // Habilitamos el boton nuevamente
        this.disabled = false;

    });

    $(".tweets").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        height: 800,
        buttons: {
        },
        close: function () {

        }
    });

    $ajax.on('click', function () {

        var data = { q: 'html5'}; //Array 

        $.ajax({
            url: urlAjax,
            type: "GET",
            data: data,
            dataType: 'jsonp',
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                $.each(data.statuses, function (i, e) {
                    tweet = $tweet.replace('profile_image_url', e.user.profile_image_url)
                                .replace('from_user', e.user.name)
                                .replace('created_at', e.created_at)
                                .replace('text', e.text);

                    $tweets.append(tweet);
                    $(".tweets").dialog("open");
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });


    });

    var highlight = (function () {
        $hidden.addClass('highlight');
    })

})