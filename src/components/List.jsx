import PropTypes from 'prop-types'

export default function List({ title, description }) {
  List.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  console.log(title, description)
  
  return (
    <li className='border rounded p-2 mb-2'>
      <p className='col-2'>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}