 
document.getElementById('one').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log('SUCCESS');
        let message = document.createElement('p');
        message.setAttribute('style', 'color: #E8DFCA; font-style: italic;');
        let choice = "You chose '" + e.target.innerText + "'\n";
        message.innerText = choice + "Even though the outcomes are the same, 72%  of people chose Company A while 28% of people chose Company B. This has to do with the fact that most people have negative experiences from COVID-19, so they will choose Company A, which presents itself in a more positive manner.";
        let parentNode = e.target.parentNode;
        console.log(parentNode);
        let child = parentNode.firstElementChild;
        while (child) {
            parentNode.removeChild(child);
            child = parentNode.firstElementChild;
        }
        parentNode.appendChild(message);
    }
});

document.getElementById('two').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log('SUCCESS');
        let message = document.createElement('p');
        message.setAttribute('style', 'color: #E8DFCA; font-style: italic;');
        let choice = "You chose '" + e.target.innerText + "'\n";
        message.innerText = choice + "Even though the outcomes are the same, 72%  of people chose Company A while 28% of people chose Company B. This has to do with the fact that most people have negative experiences from COVID-19, so they will choose Company A, which presents itself in a more positive manner.";
        let parentNode = e.target.parentNode;
        console.log(parentNode);
        let child = parentNode.firstElementChild;
        while (child) {
            parentNode.removeChild(child);
            child = parentNode.firstElementChild;
        }
        parentNode.appendChild(message);
    }
});

document.getElementById('three').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log('SUCCESS');
        let message = document.createElement('p');
        message.setAttribute('style', 'color: #E8DFCA; font-style: italic;');
        let choice = "You chose '" + e.target.innerText + "'\n";
        message.innerText = choice + "If you had already noticed, both options give you the same discount on the laptop, but most retailers would use the second option because of the immediate value that people will see. Because this number is significantly larger, Apple would benefit the most from using the second deal.";
        let parentNode = e.target.parentNode;
        console.log(parentNode);
        let child = parentNode.firstElementChild;
        while (child) {
            parentNode.removeChild(child);
            child = parentNode.firstElementChild;
        }
        parentNode.appendChild(message);
    }
});