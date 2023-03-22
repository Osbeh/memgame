import { FaBeer, FaMeh, FaMehRollingEyes, FaLaugh, FaLaughSquint, FaGrimace, FaGrinAlt, FaGrinHearts, FaGrinSquintTears,
     FaGrinTongueSquint, FaGrinWink, FaGrin, FaDizzy, FaAngry, FaKiss, FaSadCry, FaSadTear, FaSmile, FaSurprise,
      FaMehBlank, FaGrinTears, FaGrinStars, FaGrinTongue, FaFrown, FaFlushed } from 'react-icons/fa'
import shuffleArray from './hooks/shuffleArray'



  const allCards = [
        [
            {id: 1, text: 'fameh', image: <FaMeh size={96}/>, opened:false},
            {id: 2, text: 'fameh', image: <FaMeh size={96}/>, opened:false}
        ],
        [
            {id: 3, text: 'famehrollingeyes', image: <FaMehRollingEyes size={96}/>, opened:false},
            {id: 4, text: 'famehrollingeyes', image: <FaMehRollingEyes size={96}/>, opened:false}
        ],
        [
            {id: 5, text: 'falaugh', image: <FaLaugh size={96}/>, opened:false},
            {id: 6, text: 'falaugh', image: <FaLaugh size={96}/>, opened:false}
        ],
        [
            {id: 7, text: 'falaughsquint', image: <FaLaughSquint size={96}/>, opened:false},
            {id: 8, text: 'falaughsquint', image: <FaLaughSquint size={96}/>, opened:false}
        ],
        [
            {id: 9, text: 'fagrimace', image: <FaGrimace size={96}/>, opened:false},
            {id: 10, text: 'fagrimace', image: <FaGrimace size={96}/>, opened:false}
        ],
        [
            {id: 11, text: 'fagrinalt', image: <FaGrinAlt size={96}/>, opened:false},
            {id: 12, text: 'fagrinalt', image: <FaGrinAlt size={96}/>, opened:false}
        ],
        [
            {id: 13, text: 'fagrinhearts', image: <FaGrinHearts size={96}/>, opened:false},
            {id: 14, text: 'fagrinhearts', image: <FaGrinHearts size={96}/>, opened:false}
        ],
        [
            {id: 15, text: 'fagrinsquinttears', image: <FaGrinSquintTears size={96}/>, opened:false},
            {id: 16, text: 'fagrinsquinttears', image: <FaGrinSquintTears size={96}/>, opened:false}
        ],
        [
            {id: 17, text: 'fagrin', image: <FaGrin size={96}/>, opened:false},
            {id: 18, text: 'fagrin', image: <FaGrin size={96}/>, opened:false}
        ],
        [
            {id: 19, text: 'fagrintonguesquint', image: <FaGrinTongueSquint size={96}/>, opened:false},
            {id: 20, text: 'fagrintonguesquint', image: <FaGrinTongueSquint size={96}/>, opened:false}
        ],
        [
            {id: 21, text: 'fagrinwink', image: <FaGrinWink size={96}/>, opened:false},
            {id: 22, text: 'fagrinwink', image: <FaGrinWink size={96}/>, opened:false}
        ],
        [
            {id: 23, text: 'fadizzy', image: <FaDizzy size={96}/>, opened:false},
            {id: 24, text: 'fadizzy', image: <FaDizzy size={96}/>, opened:false}
        ],
        [
            {id: 25, text: 'faangry', image: <FaAngry size={96}/>, opened:false},
            {id: 26, text: 'faangry', image: <FaAngry size={96}/>, opened:false}
        ],
        [
            {id: 27, text: 'fakiss', image: <FaKiss size={96}/>, opened:false},
            {id: 28, text: 'fakiss', image: <FaKiss size={96}/>, opened:false}
        ],
        [
            {id: 29, text: 'fasadcry', image: <FaSadCry size={96}/>, opened:false},
            {id: 30, text: 'fasadcry', image: <FaSadCry size={96}/>, opened:false}
        ],
        [
            {id: 31, text: 'fasadtear', image: <FaSadTear size={96}/>, opened:false},
            {id: 32, text: 'fasadtear', image: <FaSadTear size={96}/>, opened:false}
        ],
        [
            {id: 33, text: 'fasmile', image: <FaSmile size={96}/>, opened:false},
            {id: 34, text: 'fasmile', image: <FaSmile size={96}/>, opened:false}
        ],
        [
            {id: 35, text: 'fasurprise', image: <FaSurprise size={96}/>, opened:false},
            {id: 36, text: 'fasurprise', image: <FaSurprise size={96}/>, opened:false}
        ],
        [
            {id: 37, text: 'famehblank', image: <FaMehBlank size={96}/>, opened:false},
            {id: 38, text: 'famehblank', image: <FaMehBlank size={96}/>, opened:false}
        ],
        [
            {id: 39, text: 'fagrintears', image: <FaGrinTears size={96}/>, opened:false},
            {id: 40, text: 'fagrintears', image: <FaGrinTears size={96}/>, opened:false}
        ],
        [
            {id: 41, text: 'fagrinstars', image: <FaGrinStars size={96}/>, opened:false},
            {id: 42, text: 'fagrinstars', image: <FaGrinStars size={96}/>, opened:false}
        ],
        [
            {id: 43, text: 'fagrintongue', image: <FaGrinTongue size={96}/>, opened:false},
            {id: 44, text: 'fagrintongue', image: <FaGrinTongue size={96}/>, opened:false}
        ],
        [
            {id: 45, text: 'fafrown', image: <FaFrown size={96}/>, opened:false},
            {id: 46, text: 'fafrown', image: <FaFrown size={96}/>, opened:false}
        ],
        [
            {id: 47, text: 'faflushed', image: <FaFlushed size={96}/>, opened:false},
            {id: 48, text: 'faflushed', image: <FaFlushed size={96}/>, opened:false}
        ]
  ]

// function shuffleArray(array:any) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

shuffleArray(allCards)

const toBeCards = allCards.slice(0,12).flat()
// shuffleArray(toBeCards)
export const cardArray = toBeCards


export function Beer() {
    return <FaBeer size={96}/>
}
