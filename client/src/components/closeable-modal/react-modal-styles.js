const styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'fixed',
    display: 'block',
    maxHieght: 'calc(100% - 100px)',
    maxWidth: 900,
    minWidth: 600,
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    padding: '50px',
    border: '1px solid #ccc',
    borderRadius: 4,
    outline: 'none',
    overflow: 'auto',
    background: '#fff'
  }
}

export default styles