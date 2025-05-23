import { style } from '@vanilla-extract/css'
import { themeVars } from 'src/styles'

export const container = style({
  display: 'flex',
  gap: '4rem',
  padding: '5.4rem 5rem',
  flexWrap: 'wrap',
})

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
})

export const title = style({
  ...themeVars.fontStyles.title_bold_18,
})

export const content = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: themeVars.color.gray100,
  padding: '1.6rem 2rem',
  width: '48rem',
  height: '29.4rem',
  borderRadius: '0.8rem',
  gap: '1.6rem',
})

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  flex: 1,
  minWidth: 0,
})

export const contentTitle = style({
  ...themeVars.fontStyles.head_extrabold_28,
  whiteSpace: 'normal',
  overflowWrap: 'break-word',
})

export const chipContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
  width: '100%',
  marginTop: '3rem'
})

export const description = style({
  ...themeVars.fontStyles.body1_medium_14,
  whiteSpace: 'normal',
  marginBottom: '1rem',
})