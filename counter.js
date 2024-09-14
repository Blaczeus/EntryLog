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

function reset() {
    logList.innerHTML = '';
    entries.length = 0;
}

updateDisplay();

incrementBtn.removeEventListener('click', handleIncrement);
incrementBtn.addEventListener('click', handleIncrement);

function handleIncrement() {
    count++;
    updateDisplay();

    // Record the current time
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    entries.push(`Entered at ${timeString}`);
    updateLog();
}

resetBtn.addEventListener('click', () => {
    reset();
    count = 0;
    updateDisplay();
});