const ErrorMessage = ({ message }) => {
    if (message === null) {
      return null
    }

    else if (message != null) {
        return (
            <div className="error">
                {message}
            </div>
        )
    }

    else
    return null
}
  export default ErrorMessage