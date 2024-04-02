let selectedCharacters = []; 

function displayText() {
  const inputText = document.getElementById('textInput').value;
  document.getElementById('output').textContent = inputText;
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey) { 
    console.log('Ура!');
    document.querySelectorAll('.selected').forEach(element => {
      element.style.backgroundColor = 'yellow';
    });
  }
});

document.addEventListener('keyup', function(event) {
  if (!event.ctrlKey) { 
    document.querySelectorAll('.selected').forEach(element => {
      element.style.backgroundColor = '';
    });
  }
});

function selectCharacters(event, element) {
  if (!event.ctrlKey) {
    selectedCharacters = []; 
  }
  if (selectedCharacters.includes(element)) {
    element.classList.remove('selected');
    const index = selectedCharacters.indexOf(element);
    selectedCharacters.splice(index, 1);
  } else {
    element.classList.add('selected');
    selectedCharacters.push(element);
  }
}

document.addEventListener('mousemove', function(event) {
  if (selectedCharacters.length > 0) {
    selectedCharacters.forEach(character => {
      character.style.left = event.clientX + 'px';
      character.style.top = event.clientY + 'px';
    });
  }
});

function addCharacters() {
  const text = document.getElementById('output').textContent;
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; 

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.addEventListener('mousedown', function(event) {
      selectCharacters(event, this);
    });
    outputDiv.appendChild(span);
  }
}