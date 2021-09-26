import React , { memo } from 'react';
import './header.css'

interface  HeaderProps {
  headerString: string
}

export default memo (
  function header ({ headerString }: HeaderProps ) : JSX.Element {
      return (
        <div className="headerContainer">
          <h1>{headerString} </h1>
        </div>
      )   
  }
)
