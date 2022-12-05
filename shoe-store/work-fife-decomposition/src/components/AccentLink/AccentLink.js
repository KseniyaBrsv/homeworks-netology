import React from 'react'
import {Link} from '../Link/Link'
import './AccentLink.css'

// Заголовок карточки
export const AccentLink = (props) =>{
  return (
    <Link className={`accent-link-${props.size} ${props.faded && 'faded'}`} href={props.href}>
      {props.children}
    </Link>
  )
}

