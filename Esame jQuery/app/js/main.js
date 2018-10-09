$(document).ready(function () {
    /* $("form").validate({
         rules : {
             name, surname : {
               required : true,
               minlength : 3
             },
             object : {
                 minlength:5
             },
             message : {
                 required : true,
                 minlength : 25
             }
         },
 
 });*/
    $("form").on("submit", function (event) {
        event.preventDefault();
        console.log(event);
        let allIsGood = 0;
        const name = $('#name').val();
        const surname = $('#surname').val();
        const object = $('#object').val();
        const message = $('#message').val();
        $('#return').fadeOut();
        $("form span").hide();
        if ($('#name').val().length < 3) {
            $('.errNome').show();
            allIsGood++;
        }
        if ($('#surname').val().length < 3) {
            $('.errCognome').show();
            allIsGood++;
        }
        if ($('#object').val().length < 5 && $('#object').val().length != 0) {
            $('.errOggetto').show();
            allIsGood++;
        }
        if ($('#message').val().length < 25) {
            $('.errMessaggio').show();
            allIsGood++;
        }
        // if all required are gone well
        if (allIsGood == 0) {
            const $span = $("<p>");
            $span.addClass('ora');
            $span.appendTo($('.chat'));
            $span.html(`<br/>
                <p>Messaggio da: ${name} ${surname}</p>
                <p>Oggetto: ${object}</p>
                <p>Messaggio: ${message}</p>
            `);
            //$("form").fadeOut();
            //$(".titolo").hide();
            //$('#return').fadeIn();
            //$('.complimento').show();
        }
    })
    /* $('#return').on('click', function (event) {
         console.log(event.target);
         $('#return').hide();
         $("form").fadeIn();
     });*/

})