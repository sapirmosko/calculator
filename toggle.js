function filter(value) {
    value = parseInt(value, 10);
    let toggle = document.getElementById('toggle');
    let i, j, charButtons, textButtons, resetButton, delButton, calcButton;

    if (value === 1) {
        toggle.classList.remove('toggle-2', 'toggle-3');
        toggle.classList.add('toggle');
        toggle.style.backgroundColor = 'hsl(223, 31%, 20%)';
        
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        document.getElementsByClassName('main')[0].style.color = 'white';
        document.getElementsByClassName('display-section')[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
        document.getElementsByClassName('calc-section')[0].style.backgroundColor = 'hsl(223, 31%, 20%)';

        charButtons = document.getElementsByClassName('char-button');
        textButtons = document.getElementsByClassName('text-button-1');

        for (i = 0; i < charButtons.length; i++) {
            if (!charButtons[i].classList.contains('del-button'))
            {
                charButtons[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
                charButtons[i].style.boxShadow = '0px 2px 2px hsl(28, 16%, 65%)';
            }
        }

        for (j = 0; j < textButtons.length; j++) {
            textButtons[j].style.color = 'hsl(60, 10%, 19%)';
        }

        resetButton = document.getElementsByClassName('reset-button')[0];
        resetButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
        resetButton.style.boxShadow = '0px 2px 2px hsl(224, 28%, 35%)';

        delButton = document.getElementsByClassName('del-button')[0];
        delButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
        delButton.style.boxShadow = '0px 2px 2px hsl(224, 28%, 35%)';

        calcButton = document.getElementsByClassName('calc-button')[0];
        calcButton.style.backgroundColor = 'hsl(6, 63%, 50%)';
        calcButton.style.boxShadow = '0px 2px 2px hsl(6, 70%, 34%)';
    } else if (value === 2) {
        toggle.classList.remove('toggle', 'toggle-3');
        toggle.classList.add('toggle-2');
        toggle.style.backgroundColor = 'hsl(0, 5%, 81%)';
        
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        document.getElementsByClassName('main')[0].style.color = 'hsl(60, 10%, 19%)';
        document.getElementsByClassName('display-section')[0].style.backgroundColor = 'hsl(0, 0%, 93%)';
        document.getElementsByClassName('calc-section')[0].style.backgroundColor = 'hsl(0, 5%, 81%)';

        charButtons = document.getElementsByClassName('char-button');
        textButtons = document.getElementsByClassName('text-button-1');

        for (i = 0; i < charButtons.length; i++) {
            if (!charButtons[i].classList.contains('del-button'))
            {
                charButtons[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
                charButtons[i].style.boxShadow = '0px 2px 2px hsl(35, 11%, 61%)';
            }
        }

        for (j = 0; j < textButtons.length; j++) {
            textButtons[j].style.color = 'hsl(60, 10%, 19%)';
        }

        resetButton = document.getElementsByClassName('reset-button')[0];
        resetButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
        resetButton.style.boxShadow = '0px 2px 2px hsl(185, 58%, 25%)';

        delButton = document.getElementsByClassName('del-button')[0];
        delButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
        delButton.style.boxShadow = '0px 2px 2px hsl(185, 58%, 25%)';

        calcButton = document.getElementsByClassName('calc-button')[0];
        calcButton.style.backgroundColor = 'hsl(25, 98%, 40%)';
        calcButton.style.boxShadow = '0px 2px 2px hsl(25, 99%, 27%)';
    } else if (value === 3) {
        toggle.classList.remove('toggle', 'toggle-2');
        toggle.classList.add('toggle-3');
        toggle.style.backgroundColor = 'hsl(268, 71%, 12%)';

        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        document.getElementsByClassName('main')[0].style.color = 'hsl(52, 100%, 62%)';
        document.getElementsByClassName('display-section')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
        document.getElementsByClassName('calc-section')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';

        charButtons = document.getElementsByClassName('char-button');
        textButtons = document.getElementsByClassName('text-button-1');

        for (i = 0; i < charButtons.length; i++) {
            if (!charButtons[i].classList.contains('del-button'))
            {
                charButtons[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
                charButtons[i].style.boxShadow = '0px 2px 2px hsl(290, 70%, 36%)';
            }
        }

        for (j = 0; j < textButtons.length; j++) {
            textButtons[j].style.color = 'hsl(52, 100%, 62%)';
        }

        resetButton = document.getElementsByClassName('reset-button')[0];
        resetButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
        resetButton.style.boxShadow = '0px 2px 2px hsl(285, 91%, 52%)';

        delButton = document.getElementsByClassName('del-button')[0];
        delButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
        delButton.style.boxShadow = '0px 2px 2px hsl(285, 91%, 52%)';

        calcButton = document.getElementsByClassName('calc-button')[0];
        calcButton.style.backgroundColor = 'hsl(176, 100%, 44%)';
        calcButton.style.boxShadow = '0px 2px 2px hsl(177, 92%, 70%)';
    }
  }