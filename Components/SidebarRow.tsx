import React, { SVGProps } from 'react'
import { Interface } from 'readline'


// we can reuse our components by hiding different properties
// They are passed as though an argument in the function
// JS is by nature ruling out strings, integers etc and so Typescript was developed to enforce type checking 
// This allows us to catch bugs and issues 


// Interface props allows us to define type
interface Props {
    // Capitalization due to needing to pas an entire component
    Icon: (props: SVGProps<SVGSVGElement>) =>  JSX.Element
    // Title will be a string value
    title: string

}

// Prop values are passed by using a ':'
// In ES6 we can also be destructure and break the prop into {title and icon}

function SidebarRow({Icon, title}:Props) {
  return (
    // Introduce flexbox by nature puts items in row
    // Spacing and padding
    <div className='Flex items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-100 '>
      {/* Change icon dimensions */}
        <Icon className= 'h-6 w-6'/>
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow