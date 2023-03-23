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

export type CardProps = {
    id:number,
    text:string,
    image: JSX.Element,
    opened:boolean
}

let isFirst = true

function App() {

  const [numberOfCards, setNumberOfCards] = useState(6)
  const [difficulty, setDifficulty] = useState('Easy')

  const [cards, setCards] = useState(cardArray)

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
    console.log('click', cardId)
    setCards(cards.map(card => card.id === cardId ? {...card.opened=true as any, ...card} : card))
    if (!openCard) {
      setOpenCard({id: cardId, text:cardText })
    } else {
      if (cardText === openCard.text) {
        // leave the cards open
        setOpenCard(undefined)
        setCorrectCards(prev => prev + 2)
      } else {
        // close the cards after period of time
        // check if all the cards are now opened
        setTimeout(() => {
          setCards(cards.map(card => card.id === cardId || card.id === openCard.id ?
             {...card.opened=false as any, ...card} : card))
          setOpenCard(undefined)
        }, 1000)
      }
    }
  }

  const changeDifficulty = (value:string) => {
    console.log(value)
    if (difficulty === value || difficulty === "") return;
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

  const resetGame = (cardPairs:number) => {
    // window.location.reload()
    const toBeCards = cardArray.slice(0,cardPairs)
    shuffleArray(toBeCards)
    setCards(toBeCards.map(card => card.opened = true ? {...card.opened=false as any, ...card} : card))
    setNumberOfCards(cardPairs)
    setCorrectCards(0)
    setFinish(false)
    setOpenCard(undefined)
  }

  return (
    <>
    <pre className="text-green-600 absolute top-1 left-1 text-xs">v.0.1.4</pre>
      <div className=" w-10/12 m-auto text-green-400 bg-zinc-700 text-center p-4 h-screen min-h-fit rounded-lg pb-16">
        <h1 className="text-green-500 font-bold text-4xl mb-8">MemGame</h1>
        <DifficultySelect difficulty={difficulty} changeDifficulty={changeDifficulty}/>
        <div className="flex flex-wrap gap-8 justify-center">
          {cards.map((card) => (
            <Card key={card.id} cardText={card.text} cardImage={card.image} cardId={card.id} cardClick={cardClick} opened={card.opened} difficulty={difficulty}/>
          ))}
        </div>
        {finish && <> <Modal showModal={finish} resetGame={resetGame} cards={numberOfCards}/></>}
            
      </div>
    </>
  )
}

export default App
