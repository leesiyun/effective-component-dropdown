import styled from 'styled-components'

import Dropdown from './Dropdown'
import { sexOptions, areaOptions } from './data'

function App() {
  return (
    <AppStyle>
      <Dropdown options={sexOptions} />
      <Dropdown options={areaOptions} />
    </AppStyle>
  )
}

export default App

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
