import React from 'react'
import styled from 'styled-components'

import { formatPrice } from '../data/MenuGrid'
import { getPrice } from './MenuModal'

const OrdersDiv = styled.div`
  position: fixed;
  right: 0;
  top: 20%;
  height: 70%;
  width: 40rem;
  background-image: var(--bg-primary);
  clip-path: polygon(95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%, 0% 0%);
  border-radius: 2rem;
  z-index: 10;
  // box-shadow: .4rem 0 .5rem .4rem grey;

  @media(max-width: 40rem) {
    position: relative;
    width: 100%;
  }
`

const OrderContent = styled.div`
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const OrdersH1 = styled.h1`
  align-self: center;
  padding: 2rem 0;
  font-family: 'Francois One', sans-serif;
  font-size: 2rem;
  color: white;
  letter-spacing: .5rem;
`

const OrderItem = styled.div`
  padding: 0 2rem;
  color: white;
  font-family: 'Francois One', sans-serif;

  display: grid;
  grid-template-columns: 1rem 18rem 4rem 2rem;
  justify-content: space-between;
`

export function Orders(props) {

  const{ orders, setOrders } = props.orders  
  
  function deleteItem(index) {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  const subtotal = orders.reduce((itemTotal, order) => {
    return itemTotal + getPrice(order)
  }, 0)

  const tax = subtotal * .0925
  const total = subtotal + tax

  return (
    <OrdersDiv>
      <OrderContent>
        <OrdersH1>Place an Order</OrdersH1>

        { orders.length > 0 && (
          <React.Fragment>
            { 
              orders.map((order, index) => (
                <OrderItem key={ index }>
                  <div>{ order.quantity }</div>
                  <div>{ order.name } { order.meat && <i>- {order.meat}</i> }</div>
                  <div>{ formatPrice(getPrice(order)) }</div>
                  <div 
                    onClick={ () => deleteItem(index) }
                    style={{ cursor: 'pointer' }}
                  >
                    🗑️
                  </div>
                </OrderItem>
                
              ))
            }
            
            <OrderItem style={{ marginTop: '2rem' }}>
              <div />
              <div>Subtotal:</div>
              <div>{ formatPrice(subtotal) }</div>
            </OrderItem>

            <OrderItem>
              <div />
              <div>Tax:</div>
              <div>{ formatPrice(tax) }</div>
            </OrderItem>

            <OrderItem style={{ marginTop: '2rem' }}>
              <div />
              <div>Total:</div>
              <div>{ formatPrice(total) }</div>
            </OrderItem>
          </React.Fragment>
        )}

      </OrderContent>
    </OrdersDiv>
  )
}