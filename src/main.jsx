/* eslint-disable react/jsx-key */
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles.scss'
import { Provider } from 'react-redux';
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
