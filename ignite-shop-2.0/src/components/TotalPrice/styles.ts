import { styled } from '../../styles'

export const TotalPriceContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    span: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
      lineHeight: '160%',
      color: '$gray100',
    },
    strong: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '160%',
      color: '$gray100',
    },
    p: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '160%',
      color: '$gray100',
    },
  },
})
