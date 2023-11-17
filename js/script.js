

document.addEventListener('DOMContentLoaded', function () {
    handleData()
    timerForm()
    leavePage()
    onLoadPopup()
    scrollToForm()
});



function onLoadPopup() {
    setTimeout(function () {
        const hiddenBlock = document.getElementById('pop-up');
        hiddenBlock.style.display = 'block';
    }, 20000);
}

function leavePage() {
    document.addEventListener("mouseleave", function () {
        const hiddenBlock = document.getElementById('pop-up');
        hiddenBlock.style.display = 'block';
    });
}


function scrollToForm() {
    const scrollToFormButton = document.querySelector('#btn-pop-up');

    const formBlock = document.querySelector('#form-scroll');

    scrollToFormButton.addEventListener('click', function () {
        const hiddenBlock = document.getElementById('pop-up');
        hiddenBlock.style.display = 'none';
        formBlock.scrollIntoView({ behavior: 'smooth' });

    });
}


function timerForm() {
    const timerElement = document.getElementById('timer');
    const popUpBlock = document.getElementById('form-scroll');

    const timerDuration = 10 * 60 * 1000;

    const startTime = Date.now();

    function updateTimer() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const remainingTime = timerDuration - elapsedTime;

        if (remainingTime <= 0) {
            popUpBlock.style.display = 'none';
            clearInterval(timerInterval);
        } else {
            const minutes = Math.floor(remainingTime / (60 * 1000));
            const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

            timerElement.textContent = `${minutes}:${seconds}`;
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
}


function handleData() {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - 5);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    if (day < 1) {
        currentDate.setMonth(currentDate.getMonth() - 1);
        month = currentDate.getMonth() + 1;
        if (month < 1) {
            currentDate.setFullYear(currentDate.getFullYear() - 1);
            month = 12;
        }
        day = currentDate.getDate();
    }

    const formattedDate = day + '.' + month + '.' + year;

    document.getElementById('main-data-page').innerText = formattedDate;
}