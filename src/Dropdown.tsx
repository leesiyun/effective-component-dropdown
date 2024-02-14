import { useState } from 'react'
import styled from 'styled-components'

type Props = {
  options: { label: string; value: number }[]
}

const Dropdown = ({ options }: Props) => {
  const [isOpen, setIsOpten] = useState(false)
  const [selectedValue, setSelectedValue] = useState(0)

  const onClickTrigger = () => setIsOpten((current) => !current)
  const onClickValue = (value: number) => {
    setSelectedValue(value)
    setIsOpten(false)
  }

  return (
    <DropdownStyle>
      <Dropdown.Trigger onClick={onClickTrigger}>
        {options.find(({ value }) => value === selectedValue)?.label}
      </Dropdown.Trigger>

      {isOpen && (
        <Dropdown.Options>
          {options.map(({ label, value }) => (
            <Dropdown.Option key={value} value={value} onClick={onClickValue}>
              {label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      )}
    </DropdownStyle>
  )
}

export default Dropdown

Dropdown.Trigger = ({
  children,
  onClick,
}: {
  children: string
  onClick: (value: string) => void
}) => {
  return <div onClick={() => onClick(children)}>{children}</div>
}

Dropdown.Options = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>
}

Dropdown.Option = ({
  children,
  value,
  onClick,
}: {
  children: string
  value: number
  onClick: (value: number) => void
}) => {
  return <OptionStyle onClick={() => onClick(value)}>{children}</OptionStyle>
}

const DropdownStyle = styled.div`
  cursor: pointer;
  border: 1px solid #dddddd;
  background-color: #fff;
  border-radius: 5px;
  width: 119px;
  div {
    display: flex;
    justify-content: center;
    padding: 2.5px 0;
  }
  ul {
    overflow-y: auto;
  }
`

const OptionStyle = styled.li`
  width: 100%;
  padding: 2.5px 0;
  text-align: center;
  justify-content: center;
  border-top: 1px solid #dddddd;
  &:hover {
    background-color: #f1f1f1;
  }
`
