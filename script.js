const display = document.getElementById('display');

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault(); // prevent form submission
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
// ... existing code ...

// Dark mode toggle
document.getElementById('themeSwitcher').addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
  });
  
