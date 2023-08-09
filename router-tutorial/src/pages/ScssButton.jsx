import React from 'react'
import Button from '../components/Button'
import '../components/Button.scss'

const ScssButton = () => {
  return (
    <div className='buttonWrapper'>
      <div>
        <Button size='large' color='blue' onClick={() => console.log('클릭!')}>BUTTON</Button>
        <Button color='blue' onMouseMove={() => console.log('마우스무브!')}>BUTTON</Button>
        <Button size='small' color='blue'>BUTTON</Button>
      </div>
      <div>
        <Button size='large' color='orange'>BUTTON</Button>
        <Button color='orange'>BUTTON</Button>
        <Button size='small' color='orange'>BUTTON</Button>
      </div>
      <div>
        <Button size='large' color='pink'>BUTTON</Button>
        <Button color='pink'>BUTTON</Button>
        <Button size='small' color='pink'>BUTTON</Button>
      </div>
      <div>
        <Button size='large' color=''>BUTTON</Button>
        <Button color=''>BUTTON</Button>
        <Button size='small' color=''>BUTTON</Button>
      </div>
    </div>
  )
}

export default ScssButton