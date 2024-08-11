import React from 'react'
import { Navbar } from '../../components'
import { links, logoWhite } from '../../constants/constants'


export default function Home() {

 return (
  <div>
   <Navbar logo={logoWhite} links={links} />
  </div>
 )
}
