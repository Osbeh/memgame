import { describe, vi } from "vitest"
import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import Modal from '../src/Modal'
import { DifficultySelect } from '../src/DifficultySelect'

describe('DifficultySelect', () => {
    it('renders component', () => {
        render(<DifficultySelect difficulty="Easy"/>)
        const elem = screen.getByTestId("difficultyvalue").innerHTML
        expect(elem).toBe("Easy")
    })

    it('change difficulty', () => {
        const changeDifficulty = vi.fn()
        render(<DifficultySelect difficulty="Easy" changeDifficulty={changeDifficulty}/>)
        let elem = screen.getByRole('combobox')
        fireEvent.change(elem, {
            target: {
                value: "Medium"
            }
        })
        expect(screen.getByTestId('difficultyvalue').innerHTML).toBe("Medium")
    })

})