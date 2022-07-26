const SuccessMessage = ({ message }) => {
    if (message === null) {
      return null
    }

    else if (message != null) {
        return (
            <div className="success">
                {message}
            </div>
        )
    }

    else
    return null
}
  export default SuccessMessage