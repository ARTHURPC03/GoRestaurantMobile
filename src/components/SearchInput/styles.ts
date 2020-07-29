import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${props => props.theme.colors.inputContainer};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.inputContainer};
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #c72828;
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.title};
  font-size: 16px;
  font-family: 'Poppins-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
