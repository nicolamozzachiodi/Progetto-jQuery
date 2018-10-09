$(document).ready(function () {
        
    function messageSender(message) {
        var encodedMessage = {
            "id": 20,
            "name": (message.firstName + " " + message.lastName),
            "subject": message.object,
            "message": message.message
        }
        console.log(encodedMessage);
        $.ajax({
            url: "//172.16.15.200:3000/push",
            dataType: "json",
            data: {
                "message" : encodeURIComponent(JSON.stringify(encodedMessage))
            },
        });
    }

    $("form").on("submit", function (event) {
        event.preventDefault();
        console.log(event);

        let count = 0;
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
        if ($('#message').val().length = 0) {
            $('.errMessaggio').show();
            allIsGood++;
        }

        // if all required are gone well
        if (allIsGood == 0) {
            blink();
            const $span = $("<p>");
            $span.addClass('ora');
            $('.chat').prepend($span);
            $span.html(`
                <br/>
                <div class="chatContainer">
                    <p class="nomeChat"><b>${name} ${surname}</b></p>
                    <span class="object"><i>${object}</i></span><br/>
                    <p>${message}</p>
                </div>
                `);
            var messageToSend = {
                firstName: name,
                lastName: surname,
                object: object,
                message: message              
            }
            messageSender(messageToSend);
            $('label[for="name"] , #name').css('display', 'none');
            $('label[for="surname"] , #surname').css('display', 'none');
            $('#object').val("");
            $('#message').val("");
        }
    });
    function blink() {
        $('.chat').addClass('bordo');
        setTimeout(function () { $('.chat').removeClass('bordo'); }, 1000);

    }
})
function getData(nome, subject, messagge) {
    firstMess = false;
    $(".errore").html("");

    let cognome = nome.split(' ');
    let divMessage = $('<div>');
    divMessage.addClass('message');

    let labName = $("<p>");
    labName.html(cognome[0] + " " + cognome[1]);

    let labMessaggio = $("<p>");
    labMessaggio.html(messagge);

    divMessage.append(labName);

    let labOggetto = $("<p>");
    labOggetto.html(subject);
    divMessage.append(labOggetto);

    emptyAllCells();
    divMessage.append(labMessaggio);

    $('.allMessage').prepend(divMessage);
}