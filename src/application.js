const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

// BEGIN (write your solution here)
export default function playTickTackToe() {
  const root = document.querySelector('.root');
  root.append(generateField());
  
  const tableEl = document.querySelector('.table-bordered');

  let nextValue = 'x';
  
  function play(e) {
    const clickedEl = e.target;
    
    if (!clickedEl.matches('td')) return;
    
    const content = clickedEl.firstElementChild;
    
    if (content.classList.contains('invisible')) {
      content.textContent = nextValue;
      content.classList.remove('invisible');
    }

    nextValue = nextValue === 'x' ? 'o' : 'x';
  }
  
  tableEl.addEventListener('click', play);
}
// END
