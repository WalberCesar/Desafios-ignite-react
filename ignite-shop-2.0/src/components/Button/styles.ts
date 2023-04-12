import { styled } from '../../styles/index'

export const BuyButtonContainer = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 12,
  gap: 12,

  borderRadius: 6,
  cursor: 'pointer',

  border: 'none',

  variants: {
    colors: {
      grayButton: {
        width: 48,
        height: 48,
        background: '$gray800',

        svg: {
          color: '$gray400',
          width: 24,
          height: 24,
        },
      },

      greenButton: {
        background: '$green300',
        width: 56,
        height: 56,

        transition: 'background 0.2s',

        '&:not(:disabled):hover': {
          background: '$green500',
        },

        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',
        },

        svg: {
          color: '$white',
          width: 32,
          height: 32,
        },
      },
    },
  },
})
