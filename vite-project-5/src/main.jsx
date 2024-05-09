import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card1details from './components/Card1details.jsx';
import Card2details from './components/Card2details.jsx';
import Card3details from './components/Card3details.jsx';
import Card4details from './components/Card4details.jsx';
import Card5details from './components/Card5details.jsx';
import Card6details from './components/Card6details.jsx';
import Card7details from './components/Card7details.jsx';
import Card8details from './components/Card8details.jsx';
import Card9details from './components/Card9details.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/card1',
    element:<Card1details/>
  },
  {
    path:'/card2',
    element:<Card2details/>
  },
  {
    path:'/card3',
    element:<Card3details/>
  },
  {
    path:'/card4',
    element:<Card4details/>
  },
  {
    path:'/card5',
    element:<Card5details/>
  },
  {
    path:'/card6',
    element:<Card6details/>
  },
  {
    path:'/card7',
    element:<Card7details/>
  },
  {
    path:'/card8',
    element:<Card8details/>
  },
  {
    path:'/card9',
    element:<Card9details/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
