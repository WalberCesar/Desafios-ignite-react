import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  width: '100%',
  height: '4.3125rem',
  transition: '0.3s',
  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
})
