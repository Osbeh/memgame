import { useEffect } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"

type ModalProps = {
    showModal:boolean,
    resetGame: (arg0:6 | 12 | 24) => void,
    cards: 6 | 12 | 24,
    clicks: number
}



export default function Modal({ showModal, resetGame, cards, clicks }:ModalProps) {
    const difficulty = cards === 6 ? "easy" : cards === 12 ? "medium" : "hard"
    const [scores, setScores] = useLocalStorage<number[]>(difficulty, [])

    let first = true
    useEffect(() => {
        if (first) {
            setScores(prev => [...prev, clicks])
            first = false
        }
    }, [])

    return (
        <div className={showModal ? 'block fixed z-10 left-0 top-0 w-full h-full bg-slate-500/75' : 'hidden'}>
            <div className="w-1/2 bg-zinc-700 text-green-600 m-auto mt-32 rounded-lg p-5">
                <h1 className="text-orange-600 font-extrabold lg:text-6xl md:text-3xl sm:text-xl mb-6">Congratulations!</h1>
                <p>You clicked {clicks} times</p>
                <p>Your record is {Math.min(...scores)}</p>
                <button className="bg-slate-700 border border-orange-400 rounded-2xl mt-8 w-44 p-4 shadow-lg shadow-black hover:shadow-none hover:bg-slate-800/50 text-orange-600 text-xl" onClick={() =>resetGame(cards)}>Play again</button>
            </div>
        </div>
    )
}