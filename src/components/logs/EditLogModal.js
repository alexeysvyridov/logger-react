import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from './techs/TechSelectOptions';
const modalStyle = {
  width: '75%',
  height: '75%'
};

const EditLogModal = ({current, updateLog}) => {
const [message, setMessage] = useState('');
const [attention, setAttention] = useState(false);
const [tech, setTech] = useState('');

useEffect(() => {
  if(current) {
    setMessage(current.message)
    setAttention(current.attention)
    setTech(current.tech)
  }
}, [current]);

  const onSubmit = () => {
  if(message === '' || tech === '') {
  M.toast({html:`log updated by ${tech}`})
  } else {
    console.log(message);
    console.log(attention);
    const updLog = {
      id: current.id,
      message,
      tech,
      attention,
      date: new Date()
    };
    console.log(updLog);
    updateLog(updLog)

    setMessage('');
    setAttention(false);
    setTech('');
  }

};

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input 
              type='text'
              name='message'
              value={message} 
              onChange={ e => setMessage(e.target.value)}
              />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select 
            name="tech"
            value={tech} 
            className="browser-default"
            onChange={e => setTech(e.target.value)}
            >
               <option value="" disabled>Select Technician</option>
               <TechSelectOptions/>
             </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input 
                  type="checkbox" 
                  name='attention'
                  className="field-in" 
                  checked={attention} value={attention}
                  onChange={e => setAttention(!attention)}  
                />
                <span>Needs Attention</span>
              </label>
            </p> 
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close blue waves-light btn">
          Enter
        </a>
      </div>
    </div>
  )

}
const mapStateToProps = state => ({
  current: state.log.current
})

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {updateLog})(EditLogModal);