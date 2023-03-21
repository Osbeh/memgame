import { useEffect, useState } from "react"
import Card from "./Card"
import { Beer, cardArray } from "./Icons"

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

function App() {

  const [numberOfCards, setNumberOfCards] = useState(12)

  const [cards, setCards] = useState(cardArray)

  const [openCard, setOpenCard] = useState<OpenCardProps|undefined>(undefined)
  const [finish, setFinish] = useState(false)
  const [correctCards, setCorrectCards] = useState(0)

  useEffect(() => {
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

  const resetGame = () => {
    window.location.reload()
  }

  return (
    <>
      <div className=" w-10/12 m-auto text-green-400 bg-zinc-700 text-center p-4 h-screen min-h-fit rounded-lg pb-16">
        <h1 className="text-green-500 font-bold text-4xl mb-8">MemGame</h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {cards.map((card) => (
            <Card key={card.id} cardText={card.text} cardImage={card.image} cardId={card.id} cardClick={cardClick} opened={card.opened}/>
          ))}
        </div>
        {finish && <button className="bg-slate-700 border border-green-400 rounded-2xl mt-8 w-32 p-2 shadow-lg shadow-black hover:shadow-none hover:bg-slate-800/50" onClick={resetGame}>Play again</button>}
      </div>
    </>
  )
}

export default App
