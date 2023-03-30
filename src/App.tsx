import { useEffect, useState } from "react"
import Card from "./Card"
import { DifficultySelect } from "./DifficultySelect"
import shuffleArray from "./hooks/shuffleArray"
import { Beer, cardArray } from "./Icons"
import Modal from "./Modal"

type OpenCardProps = {
  id: number,
  text: string
}

 export type DifficultyType = {
  difficulty : "Easy" | "Medium" | "Hard"
}

export type CardProps = {
    id:number,
    text:string,
    image: JSX.Element,
    opened:boolean
}

let isFirst = true

function App() {

  const [numberOfCards, setNumberOfCards] = useState<6 | 12 | 24>(6)
  const [difficulty, setDifficulty] = useState<DifficultyType["difficulty"]>('Easy')
  const [clicks, setClicks] = useState(0)

  const [cards, setCards] = useState(cardArray)
  const [openCards, setOpenCards] = useState(0)

  const [openCard, setOpenCard] = useState<OpenCardProps|undefined>(undefined)
  const [finish, setFinish] = useState(false)
  const [correctCards, setCorrectCards] = useState(0)

  useEffect(() => {

    if (isFirst) {
      isFirst=false
      resetGame(6)
      return;
    }

    if (correctCards === numberOfCards) {
      setFinish(true)
    }
    
  }, [correctCards])
  

  const cardClick = (cardId:number, cardText:string, opened:boolean) => {
    if (opened) return;
    if(openCards === 2) return;
    setClicks(prev => prev + 1)
    setCards(cards.map(card => card.id === cardId ? {...card.opened=true as any, ...card} : card))
    if (!openCard) {
      setOpenCard({id: cardId, text:cardText })
      setOpenCards(1)
    } else {
      setOpenCards(2)
      if (cardText === openCard.text) {
        // leave the cards open
        setOpenCard(undefined)
        setOpenCards(0)
        setCorrectCards(prev => prev + 2)
      } else {
        // close the cards after period of time
        // check if all the cards are now opened
        setTimeout(() => {
          setCards(cards.map(card => card.id === cardId || card.id === openCard.id ?
            {...card.opened=false as any, ...card} : card))
            setOpenCard(undefined)
            setOpenCards(0)
        }, 1000)
      }
    }
  }

  const changeDifficulty = (value:DifficultyType["difficulty"]) => {
    if (difficulty === value) return;
    setDifficulty(value)
    if (value === "Easy") {
      setNumberOfCards(6)
      resetGame(6)
    }
    if (value === "Medium") {
      setNumberOfCards(12)
      resetGame(12)
    }
    if (value === "Hard") {
      setNumberOfCards(24)
      resetGame(24)
    } 
  }

  const resetGame = (cardPairs:6 | 12 | 24) => {
    const toBeCards = cardArray.slice(0,cardPairs)
    shuffleArray(toBeCards)
    setCards(toBeCards.map(card => card.opened = true ? {...card.opened=false as any, ...card} : card))
    setNumberOfCards(cardPairs)
    setCorrectCards(0)
    setClicks(0)
    setFinish(false)
    setOpenCard(undefined)
  }

  const gridClass = difficulty === "Easy" ? "grid-cols-3 grid-rows-2" : difficulty === "Medium" ? "grid-cols-4 grid-rows-3" : "grid-cols-6 grid-rows-4"


  return (
    <>
    <pre className="text-green-600 absolute top-1 left-1 text-xs">v.0.1.6</pre>
      <div className="w-10/12 m-auto text-green-400 bg-zinc-700 text-center p-4 h-screen min-h-fit rounded-lg pb-16">
        <h1 className="text-green-500 font-bold text-4xl mb-8">MemGame</h1>
        <DifficultySelect difficulty={difficulty} changeDifficulty={changeDifficulty}/>
        <div className={`grid gap-8 ${gridClass}`}>
          {cards.map((card) => (
            <Card key={card.id} cardText={card.text} cardImage={card.image} cardId={card.id} cardClick={cardClick} opened={card.opened} difficulty={difficulty}/>
          ))}
        </div>
        <div className="sm:hidden lg:hidden md:hidden absolute w-full h-full inset-0 bg-black m-auto text-center p-10 font-bold text-xl"> Please rotate your device</div>
        {finish && <> <Modal showModal={finish} resetGame={resetGame} cards={numberOfCards} clicks={clicks}/></>}
      </div>
    </>
  )
}

export default App
