import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

let openSnackbarFn //Вынесли ф-ю  отображения наружу

class Notifier extends React.Component {
  state = {
    open: false,
    message: '',
  }

  componentDidMount() {
    openSnackbarFn = this.openSnackbar
  }

  openSnackbar = ({ message }) => {
    this.setState({
      open: true,
      message,
    })
  }

  handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: '',
    })
  }

  render() {
    const message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: this.state.message }}
      />
    )

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={message}
        autoHideDuration={1500}
        onClose={this.handleSnackbarClose}
        open={this.state.open}
        snackbarcontentprops={{
          'aria-describedby': 'snackbar-message-id',
        }}
      />
    )
  }
}

export function openSnackbar({ message }) {
  openSnackbarFn({ message })
}

export default Notifier
