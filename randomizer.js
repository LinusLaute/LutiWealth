var inputCount = 1;

document.getElementById('addInput').addEventListener('click', function(event) {
    event.preventDefault();

    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'userInput' + inputCount;
    newInput.name = 'userInput' + inputCount;

    var br = document.createElement('br');

    var inputContainer = document.getElementById('inputContainer');
    inputContainer.appendChild(newInput);
    inputContainer.appendChild(br);

    inputCount++;
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var outputText = 'Random choice: ';
    for (var i = 0; i < inputCount; i++) {
        var inputValue = document.getElementById('userInput' + i).value;
        var choices = inputValue.split(',');
        var randomChoice = choices[Math.floor(Math.random() * choices.length)];
        outputText += randomChoice + ' ';
    }

    var outputElement = document.createElement('p');
    outputElement.className = 'output';
    outputElement.textContent = outputText;
    document.body.appendChild(outputElement);
});