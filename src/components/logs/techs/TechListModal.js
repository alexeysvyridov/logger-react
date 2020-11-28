import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../../actions/techActions';


const TechListModal = ({getTechs, tech: { techs, loading } }) => {

  useEffect(() => {
    getTechs(); 
  }, []);

  // const getTechs = async () => {
  //   setLoading(true)
  //    //proxy http://localhost  
  //   const res = await fetch('/techs');
  //   const data = await res.json();
    
  //   setTechs(data);
  //   setLoading(true);
  // };


  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
        {!loading && techs !== null && techs.map(tech => (
          <TechItem tech={tech} key={tech.id}/>
          ))}
        </ul>
      </div>
    </div>
  )

}
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => {
  return {
    tech: state.tech
  }
}
export default connect(mapStateToProps, { getTechs })(TechListModal) ;