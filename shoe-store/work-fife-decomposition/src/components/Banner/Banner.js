import React from 'react'
import Link from '../Link/Link'
import Image from '../Image/Image'

export const Banner = (props) => {
 return (
   <Link href={props.href}>
     <Image src={props.src}/>
   </Link>
 )
};
