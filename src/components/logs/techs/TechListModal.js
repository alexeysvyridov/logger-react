import React, {useState, useEffect} from 'react';
import TechItem from './TechItem'

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs(); 
  }, []);

  const getTechs = async () => {
    setLoading(true)
     //proxy http://localhost  
    const res = await fetch('/techs');
    const data = await res.json();
    
    setTechs(data);
    setLoading(true);
  };


  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
        {loading && techs.map(tech => (
          <TechItem tech={tech} key={tech.id}/>
          ))}
        </ul>
      </div>
    </div>
  )

}
export default TechListModal;