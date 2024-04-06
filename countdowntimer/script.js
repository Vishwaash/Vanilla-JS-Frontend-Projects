document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timer');

    //set the countdown date(replace with your desired date)
    const countdownDate = new Date('2024-12-31T23:59:59').getTime();
    //update the countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        //calculate date,hour,minutes and seconds
        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60)) /(1000*60));
        const seconds = Math.floor((distance %(1000*60))/1000);
        
        //display the countdown in the format "days:hours:minutes:seconds"
        timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        //If the countdown is over display the message
        if(distance < 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = 'countdown expired';
        }
    }, 1000);
});