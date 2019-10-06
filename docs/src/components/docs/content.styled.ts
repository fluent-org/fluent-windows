export const styles = {
  titleA: {
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      content: '#',
      display: 'inline-block',
      paddingLeft: ' 0.25em',
      color: 'rgba(0, 0, 0, 0.25)',
      visibility: 'hidden',
      transition: 'all 250ms ease-in-out'
    },
    '&:hover': {
      '&::after': {
        visibility: 'visible',
        color: 'rgba(0, 0, 0, 0.6)'
      }
    }
  }
}
