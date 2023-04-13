import { X } from 'phosphor-react'
import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const CartMenuContainer = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '3rem',
  alignItems: 'flex-start',
  position: 'fixed',
  backgroundColor: '$gray800',
  width: '30rem',
  minHeight: '100vh',
  right: 0,
  top: 0,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8);',

  ' div': {
    width: '100%',
  },
})

export const Title = styled('h2', {
  display: 'flex',
  alignItemstems: 'center',
  marginBottom: '2rem',

  fontWeight: 700,
  fontsize: '20px',
  lineHeight: '160%',

  color: '$gray100',
})

export const IconX = styled(X, {
  width: '1.5rem',
  height: '1.5rem',
  color: '$gray400',
  cursor: 'pointer',
  right: '1.5rem',
  top: '1.5rem',
})
export const CartClose = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  lineHeight: 0,
  border: 'none',
  position: 'absolute',
  cursor: 'pointer',
  right: '1.5rem',
  top: '1.5rem',
})
