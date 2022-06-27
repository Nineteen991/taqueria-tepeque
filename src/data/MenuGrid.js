import React from 'react'
import styled from 'styled-components'

import { menuItems } from './imgData'

export const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 40vh;
    gap: 3rem;
    padding-bottom: 4rem;

    @media(max-width: 40rem) {
        grid-template-columns: 1fr;
    }
`

export const Food = styled.div`
  height: 100%;
  padding: 1rem 1.5rem;
  color: white;
  font-family: 'Francois One', sans-serif;
  font-size: 2rem;
  text-shadow: 1px 1px black;
  background-image: ${props => `url(${props.img})` };
  background-position: center;
  background-size: cover;
//   filter: contrast(75%);
  border-radius: 2rem;
  margin-top: .5rem;
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  box-shadow: 0 0 2px 0 gray;

  &:hover {
    cursor: pointer;
    // filter: contrast(100%);
    margin-top: 0;
    margin-bottom: .5rem;
    box-shadow: 0 5px 10px 0 gray;
  }
`

export function formatPrice(price) {
    return price.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

export const ourMenu = menuItems.reduce((prevItem, item) => {
    // if there is no menu.section key in the empty obj
    if (!prevItem[item.section]) {
        // if not then take that 1st menu section &
        // add it as a key as an empty []
        prevItem[item.section] = []
    }
    // we're taking an empty obj & adding keys which are the section names
    // & the values are arrays & the arrays are going to push on the items
    // so that each section will have its own list of unique foods
    prevItem[item.section].push(item)

    // return the result for the next loop iteration
    return prevItem
}, {})