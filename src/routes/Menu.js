import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import uuid from 'react-uuid'

import { MenuGrid, Food, ourMenu, formatPrice } from '../data/MenuGrid'
import { MenuModal } from '../components/MenuModal'
import { Orders } from '../components/Orders'
import { useOrders } from '../Hooks/useOrders'
import { Context } from '../Context'
// import menuBg from '../images/menu_bg.jpg'

const MenuPage = styled.div`
  width: 100%;
  display: flex;
`

const MenuDiv = styled.div`
  padding: 6.5% 5% 5%;
  width: calc(100% - 40rem);

  @media(max-width: 400px){ 
    width: 100%;
  }
`

const MenuTitleH3 = styled.h3`
  margin-bottom: 3%;
  color: white;
  font-family: 'Francois One', sans-serif;
  font-size: 5rem;
  letter-spacing: 1rem;
`

export default function Menu({ openFood, setOpenFood }) {

  const orders = useOrders()
  const { setMenuLinks } = useContext(Context)

  useEffect(() => {
    setMenuLinks('/menu')
  }, [])

  return (
    <MenuPage>

      <MenuModal 
        openFood={ openFood } 
        setOpenFood={ setOpenFood }
        orders={ orders }
      />

      <Orders orders={ orders } />

      <MenuDiv>

        <React.Fragment>
          { 
            Object.entries(ourMenu).map(([sectionName, ourMenu], index) => (
              <React.Fragment key={ uuid() }>
                <MenuTitleH3 
                  key={ index }
                  id={`${ sectionName }`}
                >
                  { sectionName }
                </MenuTitleH3>
                
                <MenuGrid key={ uuid() }>
                  { ourMenu.map(menuItem => (
                    <Food 
                      key={ menuItem.id }
                      img={ menuItem.img }
                      onClick={ () => setOpenFood(menuItem) }
                    >
                      <div>{ menuItem.name }</div>
                      <div>{ formatPrice(menuItem.price) }</div>
                    </Food>
                  )) }
                </MenuGrid>

              </React.Fragment>
            )) 
          }
        </React.Fragment>
      </MenuDiv>

    </MenuPage>
  )
}