const countEl = document.getElementById('count-el');
const incrementBtn = document.getElementById( 'increment-btn' );
const resetBtn = document.getElementById('reset-btn');
const logList = document.getElementById('log-list');
const entries = [];

let count = 0;

function updateDisplay() {
    countEl.textContent = count;
}

function updateLog () 
{
    logList.innerHTML = '';
    
    // Adding each entry to the log list
    entries.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        logList.appendChild(li);
    });
}

function reset () 
{
    logList.innerHTML = '';
    entries.length = 0;
}

updateDisplay();

function handleIncrement () 
{
    count++;
    updateDisplay();

    // Record the current time
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    entries.push(`Entered at ${timeString}`);
    updateLog();
}

function handleDecrement () 
{
    count--;
    updateDisplay();

    entries.pop();
    updateLog();
}

incrementBtn.removeEventListener('click', handleIncrement);
incrementBtn.addEventListener('click', handleIncrement);

resetBtn.addEventListener('click', () => {
    reset();
    count = 0;
    updateDisplay();
} );

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        handleIncrement();
    }
    
    if (event.key === 'Backspace') {
        event.preventDefault();
        if ( count > 0 ) {
            handleDecrement();
        }
    }
    
    if (event.key === 'Delete') {
        event.preventDefault();
        reset();
        count = 0;
        updateDisplay();
    }
});

