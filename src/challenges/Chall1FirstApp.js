import PropTypes from 'prop-types';

export const FirstApp = ({ title, text }) => {
  return (

    <>
      <h1>{title}</h1>
      <span>{text}</span>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay título',
  text: 'Pero sí hay texto'
}
