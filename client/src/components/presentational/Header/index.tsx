import React , {}from 'react';
import './header.css'

interface  HeaderProps {
  headerString: string
}
export const Header = ( { headerString }: HeaderProps ) : JSX.Element => {
    return (
      <div className="headerContainer">
        <h1>{headerString} </h1>
      </div>
    )   
}
   
