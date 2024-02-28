// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

function Box(props) {
  console.log(props)
  let className = 'box'
  if (props.size == 'small') {
    className = className + ' box--small'
  } else if (props.size == 'medium') {
    className = className + ' box--medium'
  } else {
    className = className + ' box--large'
  }
  return (
    <div
      className={className}
      style={{
        fontStyle: 'italic',
        backgroundColor: props.style.backgroundColor,
      }}
    >
      {props.children}
    </div>
  )
}

function App() {
  return (
    <>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </>
  )
}

export default App
