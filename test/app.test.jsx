import { vi, describe, test } from "vitest"
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/App.tsx'
import user from "@testing-library/user-event"

describe('App', () => {
    it('renders app', async () => {
        render(<App/>)
        const select = await screen.findAllByLabelText('Difficulty:')
        expect(select.length).toBe(1)
    })

    it('gets cards', async () => {
        render(<App/>)
        const cards = await screen.getAllByTestId('playcard')
        expect(cards.length).toBeGreaterThan(5)
    })

    it('clicks a card', async () => {
        const cardClick = vi.fn()
        render(<App/>) 
        const cards = await screen.getAllByTestId('playcard')
        // console.log(cards[0])
        cards[0].onclick = cardClick()
        await user.click(cards[0])
        expect(cardClick).toHaveBeenCalledTimes(1)
    })
})

