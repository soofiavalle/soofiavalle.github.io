document.addEventListener('DOMContentLoaded', function () {
    askForPassword();
});

function askForPassword() {
    const password = prompt("Buenos días amor!! Para acceder a tu sorpresa de San Valentín tienes que identificarte en miusculas:");

    // Reemplaza 'bob2' con la contraseña que elijas
    if (password === 'bob2') {
        startCountdown();
    } else {
        alert('Mal!!!! Piensa un poco... quien eres??');
        askForPassword(); // Solicita la contraseña nuevamente
    }
}

function startCountdown() {
    let seconds = 10;
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');

    function updateCountdown() {
        seconds--;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            showInteractiveButtons();
            countdownElement.classList.add('hidden');
            messageElement.innerText = 'Ayayayaa que has acertado la contraseña friki! Lee la carta y después haz click en "corazon" para ver el estado del corazón de los bobs!';
            messageElement.classList.remove('hidden'); // Muestra el mensaje "Ayayayaa que has acertado la contraseña friki! Ahora elige tu regalo!"
        } else {
            countdownElement.innerText = seconds;
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    updateCountdown(); // Actualiza la cuenta regresiva inmediatamente después de iniciar el intervalo
}

function showInteractiveButtons() {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.classList.remove('hidden');

    const cartaButton = document.getElementById('carta-button');
    const corazonButton = document.getElementById('corazon-button');

    cartaButton.addEventListener('click', function () {
        openCard();
    });

    corazonButton.addEventListener('click', function () {
        showHeartImage();
    });
}

function openCard() {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.classList.add('hidden');

    const cardContainer = document.getElementById('card-container');
    const card = document.getElementById('card');
    const messageElement = document.getElementById('message-card'); // Cambiado el ID

    cardContainer.classList.remove('hidden');
    card.classList.remove('hidden');
    card.classList.add('fadeIn'); // Agrega una clase para un efecto de entrada gradual
    
    // Limpiar el contenido de la carta antes de mostrar la nueva
    messageElement.innerHTML = '';

    displayMessage();

    // Oculta el mensaje "Elige tu regalo" cuando se elige la carta
    const mainMessageElement = document.getElementById('message');
    mainMessageElement.classList.add('hidden');
}

function goBack() {
    const cardContainer = document.getElementById('card-container');
    const card = document.getElementById('card');
    const heartImageContainer = document.getElementById('heart-image-container');
    const heartImage = document.getElementById('heart-image');

    cardContainer.classList.add('hidden');
    card.classList.add('hidden');

    heartImageContainer.classList.add('hidden');
    heartImage.classList.add('hidden');

    // Muestra el mensaje "Elige tu regalo" solo si no se ha elegido ninguna opción
    const messageElement = document.getElementById('message');
    if (!document.getElementById('message-card').innerHTML.trim()) {
        messageElement.classList.remove('hidden');
    }

    showInteractiveButtons();
}

function showHeartImage() {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.classList.add('hidden');

    const heartImageContainer = document.getElementById('heart-image-container');
    const heartImage = document.getElementById('heart-image');
    const messageElement = document.getElementById('message');

    heartImageContainer.classList.remove('hidden');
    heartImage.classList.remove('hidden');
    heartImage.classList.add('pulse'); // Agrega una clase para un efecto de pulso

    // Oculta el mensaje "Elige tu regalo" cuando se elige el corazón
    messageElement.classList.add('hidden');
}

function displayMessage() {
    const messageElement = document.getElementById('message-card');
    const mensajePersonalizado = "¡Feliz San Valentín, amor! Como no sabía si te iba a ver quería tener este detalle contigo que ha programado el bob1 !!! (A pesar de que en su momento te hayas reido de mi programación de un proyecto 'tipo wallapop') Y cariño quería decirte que eres lo más especial en mi vida, que me siento muy feliz de que seas mi novia y que los bobs resuelven todo siempre!!!! Porque somos el mejor equipo del muuuuundo. T'estimo <3";

    // Muestra el mensaje completo sin el efecto de escritura automática
    messageElement.innerHTML = mensajePersonalizado;
}

