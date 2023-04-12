import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    it("renders an header", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
    //   screen.logTestingPlaygroundURL()
        const header = screen.getByRole('heading', {
        name: /welcome to the ymcj apartment department/i
    })
    })
})