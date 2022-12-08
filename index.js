
// - Déclarer un objet `chrono` dans `chrono.js`
// - Initialiser les propriétés `minutes`, `seconds` et `tenthOfSeconds` à `0`

const chrono = {

    minutes: 0,
    seconds: 0,
    tenthOfSeconds: 0,

    //     - Déclarer une méthode `display` qui va permettre de mettre à jour les div contenant les minutes, les secondes et les millisecondes.

    display: function () {

        if(chrono.minutes < 10){
            chrono.minutes = '0' + parseInt(chrono.minutes);
        }

        const mesMinutes = document.querySelector('.myMinutes');
        mesMinutes.textContent = chrono.minutes;

      
        if (chrono.seconds < 10) {
            chrono.seconds = '0' + parseInt(chrono.seconds);
        }

          const mesSeconds = document.querySelector('.mySeconds');
        mesSeconds.textContent = chrono.seconds;

        if (chrono.tenthOfSeconds < 10) {
            chrono.tenthOfSeconds = '0' + parseInt(chrono.tenthOfSeconds);
        }

        const mesTenthOfSeconds = document.querySelector('.myTenthOfSeconds');
        mesTenthOfSeconds.textContent = chrono.tenthOfSeconds;

    },

    start: function () {
        //     - Utiliser la fonction setInterval()\* permet de répéter le code de la méthode changeTheTime tous les x 1/1000 de secondes.
        setInterval(chrono.changeTheTime, 100);
    },


    //     - Déclarer une méthode `changeTheTime` qui va gérer l'ajout d' 1/10 de seconde et éventullement modifier la valeur de secondes et de minutes

    changeTheTime: function () {

        chrono.tenthOfSeconds++;

        if (chrono.tenthOfSeconds === 10) {
            chrono.seconds++;
            chrono.tenthOfSeconds = 0;

        }

        if (chrono.seconds === 60) {
            chrono.minutes++;
            chrono.seconds = 0;
        }

        chrono.display();
    },


    // - Déclarer **une méthode `init`** qui va gérer la création et la configuration des éléments dans le DOM.
    //  - Déclarer la méthode  dans l'objet chrono.


    init: function () {

        const chronometre = document.querySelector('#chrono');

        const myMinutes = document.createElement('div');
        myMinutes.classList.add('myMinutes');
        chronometre.appendChild(myMinutes);
        myMinutes.textContent = chrono.minutes;

        const mySeconds = document.createElement('div');
        mySeconds.classList.add('mySeconds');
        chronometre.appendChild(mySeconds);
        mySeconds.textContent = chrono.seconds;

        const myTenthOfSeconds = document.createElement('div');
        myTenthOfSeconds.classList.add('myTenthOfSeconds');
        chronometre.appendChild(myTenthOfSeconds);
        myTenthOfSeconds.textContent = chrono.tenthOfSeconds;


        chrono.start();


    },
}


chrono.init();