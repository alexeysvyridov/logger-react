import React from 'react';
import PropTypes from 'prop-types';
import moment from 'react-moment';
const logItem = ({log}) => {
  return (
   <li className='collectiom-item'>
     <div>
       <a href='#edit-log-modal'
        className={
        `modal-trigger ${log.attention ?
         'red-text': 
         'blue-text'}`}>{log.message}</a>
         <br/>
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by {' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</moment>
        </span>
        <a href="#!" className="secondaty-content">
          <i className="material-icon grey-text">delete</i>
        </a>
     </div>
   </li>
  )
}

logItem.propTypes = {
  log: PropTypes.object.isRequired
}

export default logItem
