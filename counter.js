const countEl = document.getElementById( 'count-el' );
const incrementBtn = document.getElementById( 'increment-btn' );
const resetBtn = document.getElementById('reset-btn');
const logList = document.getElementById('log-list');
const entries = [];

function getCurrentTime ()
{
    let time = new Date();
    
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let period = 'AM';

    return { hours, minutes, seconds, period};
}

function formatTime ({hours, minutes, seconds, period})
{
    if (hours >= 12) {
        period = "PM";
    }
    
    if ( hours > 12 ) {
        hours -= 12;
    }

    if ( hours === 0 ) {
        hours = 12;
    }

    // const { hours, minutes, seconds } = getCurrentTime();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds;
    let mode = period;
    return [currentTime, mode];
}

function updateClock () 
{
    const time = getCurrentTime();
    const formattedTime = formatTime( time );


    // document.getElementById( 'clock' ).innerHTML = formattedTime[ 0 ];
    document.getElementById('clock').innerHTML = `${formattedTime[0]} <span id = "mode">${formattedTime[1]}</span>`;
    // document.getElementById( 'mode' ).innerHTML = formattedTime[1];
}

updateClock();
setInterval( updateClock, 1000 );

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

