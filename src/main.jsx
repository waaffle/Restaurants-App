/* eslint-disable react/jsx-key */
//import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock'
import { Restaurant } from './components/restaurant/component'
import { Layout } from './components/layout/component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
    <div>
      {
        restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} />
        ))
      }
    </div>
  </Layout>
)
