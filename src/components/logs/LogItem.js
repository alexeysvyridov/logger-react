import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
const logItem = ({log}) => {
  return (
   <li className='collection-item'>
     <div>
       <a href='#add-log-modal'
        className={
        `modal-trigger ${log.attention ?
         'red-text': 
         'blue-text'}`}>
          {log.message}
        </a>
         <br/>
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by {' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='YYYY/MM/DD'>{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
     </div>
   </li>
  )
}

logItem.propTypes = {
  log: PropTypes.object.isRequired
}

export default logItem
