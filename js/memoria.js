// Ejercicio2 - javascript
class Memoria {

    /*
    hasFlippedCard -> indica si ya hay una carta dada la vuelta, default:false
    lockBoard -> indica si el tablero se encuentra bloqueado a la interacción del usuario, default:false
    firstCard -> indica cuál es la primera carta a la que se ha dado la vuelta en esta interacción, default: null
    secondCard -> indica cuál es la segunda carta a la que se ha dado la vuelta en esta interacción, default: null

     */

    constructor() {
        this.cards = [
            {
                "element": "HTML5",
                "source": "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            },
            {
                "element": "HTML5",
                "source": "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            },
            {
                "element": "CSS3",
                "source": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            },
            {
                "element": "CSS3",
                "source": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            },
            {
                "element": "JS",
                "source": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
            },
            {
                "element": "JS",
                "source": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
            },
            {
                "element": "PHP",
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            },
            {
                "element": "PHP",
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            },
            {
                "element": "SVG",
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg"
            },
            {
                "element": "SVG",
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg"
            },
            {
                "element": "W3C",
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/5e/W3C_icon.svg"
            },
            {
                "element": "W3C",
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/5e/W3C_icon.svg"
            }
        ]

        // default values
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = null;
        this.secondCard = null;


        this.shuffleElements();
        // this.createElements();
        // this.addEventListeners();
    }


    /**
     * coge el objeto JSON y baraja los elementos 
     * 
     * (se puede utilizar cualquier método de ordenación para recorrer y barajar los elemntos (durstendfeld))
     */
    shuffleElements() {
        const cards = this.tarjetas.cards;

        for (let i = cards.length - 1; i > 0; i--) {

            // genera un número entre 0 y i (porque i+1 no está incluído en el rango)
            const j = Math.floor(Math.random() * (i + 1));

            // intercambio de los elementos
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }


    /**
     * 1 - bloquea el tablero (lockBoard=true)
     * 2 - voltea las cartas que estén bocarriba (cómo sabemos???)
     * 3 - resetea el tablero
     * 
     * nota: para que la ejecución del volteo de las tarjetas y el reseteo del tablero se realice con cierto margen temporal después del volteo de la segunda tarjeta, se puede meter dentro un delay utilizando el método setTimeOut() de ECMAScript
     */
    unflipCards() {
        this.lockBoard = true; // bloquear el tablero

        setTimeout(() => { // delay
            flippedCards.forEach(card => {
                this.firstCard.dataset.state = this.INIT;
                this.secondCard.dataset.state = this.INIT;
            }, 1200); // miliseconds
        });
    }

    /**
     * 1 - settea a null las variables firstCard y secondCard 
     * 2 - pone a false las variables hasFlippedBoard y lockBoard
     */
    resetBoard() {

    }

    /**
     * comprueba si las cartas volteadas son iguales
     *      - si lo son -> llama al método disableCards()
     *      - si no lo son -> llama al método resetBoard()
     * 
     * (se puede usar un operador ternario)
     */
    checkForMatch() {

    }


    /**
     * 1 - deshabilita las interacciones sobre las tarjetas de memoria que ya hayan sido emparejadas
     * 2 - modifica el valor del atributo data-state a revealed 
     * 3 - invoca al método resetBoard()
     */
    disableCards() {

    }









}


var mem = new Memoria();