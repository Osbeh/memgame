import { describe } from "vitest"
import { render, screen } from '@testing-library/react'
import Modal from '../src/Modal'

describe('Modal', () => {
    it('displays easy results modal', () => {
        render(<Modal cards={6} clicks={14}/>)
        render(<Modal cards={6} clicks={12}/>)
        expect(screen.getByText("You clicked 12 times")).toBeInTheDocument()
        expect(screen.getAllByText("Your record is 12").length).toBeGreaterThanOrEqual(1)
    })

    it('displays hard results modal', () => {
        render(<Modal cards={24} clicks={40}/>)
        render(<Modal cards={24} clicks={48}/>)
        expect(screen.getByText("You clicked 48 times")).toBeInTheDocument()
        expect(screen.getAllByText("Your record is 40").length).toBeGreaterThanOrEqual(1)
    })

    it('displays medium results modal', () => {
        render(<Modal cards={12} clicks={18}/>)
        render(<Modal cards={12} clicks={22}/>)
        expect(screen.getByText("You clicked 22 times")).toBeInTheDocument()
        expect(screen.getAllByText("Your record is 18").length).toBeGreaterThanOrEqual(1)
    })
})