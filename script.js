const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const counterLabel = document.getElementById('counter');
let count = 0;

decrementBtn.onclick = () => {
    count--;
    counterLabel.textContent = count;
}
incrementBtn.onclick = () => {
    count++;
    counterLabel.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    counterLabel.textContent = count;
}

saveBtn.onclick = () => {
    localStorage.setItem('counterValue', count);
}

loadBtn.onclick = () => {
    const savedValue = localStorage.getItem('counterValue');
    if (savedValue !== null) {
        count = parseInt(savedValue);
        counterLabel.textContent = count;
    }
}