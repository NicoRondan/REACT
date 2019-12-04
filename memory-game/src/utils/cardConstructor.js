import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const NUMERO_CARTAS = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cards = [];

    while (cards.length < NUMERO_CARTAS) {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const card = {
            icon: fontAwesomeClasses.splice(index, 1)[0],
            fueAdivinada: false
        };

        cards.push(card);
        cards.push({...card});
    }

    return shuffle(cards);
};