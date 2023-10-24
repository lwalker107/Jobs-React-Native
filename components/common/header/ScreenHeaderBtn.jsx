import React from 'react'
// In react native, a button is a touchable opacity
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity>
      <Image 
        source={iconUrl} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn