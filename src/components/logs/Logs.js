import React, { useState, useEffect } from 'react';
import Logitem from './LogItem';
import Preloader from '../layout/Preloader';
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true)

    //proxy http://localhost
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };
  
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);


  if(loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System logs</h4>
      </li>
      { !loading && logs.loading === 0 ? 
        (<p className="center">No logges to show...</p>) :
        (logs.map( (log) =>  <Logitem log={log} key={log.id}/>))
      }
    </ul>
  )
}
export default Logs