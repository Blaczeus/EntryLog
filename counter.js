const countEl = document.getElementById( 'count-el' );
const incrementBtn = document.getElementById( 'increment-btn' );

let count = 0;

function updateDisplay ()
{
    countEl.textContent = count;
}

updateDisplay();

incrementBtn.addEventListener( 'click', () =>
{
    count++;
    updateDisplay();
} )