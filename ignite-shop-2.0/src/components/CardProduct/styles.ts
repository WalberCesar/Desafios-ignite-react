import { styled } from '../../styles'

export const CardProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  gap: '1.25rem',
  marginBottom: '1.5rem',

  width: '100%',
  height: '6rem',

  div: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    strong: {
      fontWeight: 400,
      fontSize: '1.125rem',
      marginBottom: '0.125rem',
      color: '$gray300',
      lineHeight: '160%',
    },
    span: {
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: '160%',
      color: '$gray100',
    },
    p: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '160%',

      marginTop: '0.5rem',
      color: '$green500',
      cursor: 'pointer',

      transition: '0.3s',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101.94,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
