import React from 'react'
import Scene1 from './Scene1'
import { useLocation } from 'react-router-dom';

export default function index() {
  const location = useLocation();

  return (
    <div>
        {location.pathname === '/threejs' && <Scene1></Scene1>}
    </div>
  )
}
