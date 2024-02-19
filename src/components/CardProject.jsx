import PropTypes from 'prop-types'

export default function List({ title, description }) {
  List.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    // <li className='border rounded p-2 mb-2 card"'>
    //   <p className=''>
    //     <strong>{title}</strong> 
    //     <p>{description}</p>
    //   </p>
    // </li>
    <div className="card d-flex">
      <div className="card-body card-size">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  )
}