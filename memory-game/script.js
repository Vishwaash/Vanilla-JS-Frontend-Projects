document.addEventListener('DOMContentLoaded', () => {
    const memoryBoard = document.getElementById('memory-board');
    const cardsData = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    let firstcard = null;
    let secondcard = null;

    //shuffle the cards
    cardsData.sort(() => Math.random() - 0.5);
    //
    // Generating cards elements dynamically
    cardsData.forEach((data) => {
        console.log("i");
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = data;
        card.innerHTML = '<span class="hidden">' + data + '</span>';
        card.addEventListener('click', () => flipcard(card));
        memoryBoard.appendChild(card);
    });
    //function of the flip card
    function flipcard(card) {
        if(!firstcard || !secondcard){
            card.classList.add('flipped');
            card.querySelector('span').classList.remove('hidden');
            if(!firstcard){
                firstcard = card;
            }else{
                secondCard = card;
                checkMatch();
            }
        }
    }
    // function of the check match
    function checkMatch(){
        if(firstcard.dataset.value === secondcard.dataset.value){
            //If cards match
            setTimeout(() => {
                firstcard.removeEventListener('click',flipcard);
                secondcard.removeEventListener('click',flipcard);
                resetCards();
            }, 1000);
        }else{
            // If cards do not match
            setTimeout(() =>{
                firstcard.classList.remove('flipped');
                secondcard.classList.remove('flipped');
                firstcard.querySelector('span').classList.add('hidden');
                secondcard.querySelector('span').classList.add('hidden');
                resetCards();    
            }, 1000);
        }
    }
    //function reset cards
    function resetCards(){
        firstcard=null;
        secondcard=null;
    }
});