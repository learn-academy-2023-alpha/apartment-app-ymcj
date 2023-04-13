import { screen, render } from "@testing-library/react"
import NotFound from "./NotFound"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"

describe("<NotFound />", () => {
    it ("renders without crashing", () => {
        render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>
    )
    screen
        const text = screen.getByText(/page not found/i)
            expect(text).toBeInTheDocument()
    })
})

export default NotFound