import './App.scss'
import TaskView from './presentation/tasks/TaskView'
import img from './assets/images'
import { useContext, useEffect } from 'react'
import UserContext from './presentation/context/UserContext'

function App() {

  const userContexto = useContext(UserContext);
  if (!userContexto) {
    return <div>Error: Context not available</div>;
  }
  
  const { settasks } = userContexto;

  //Get tasks by fetching data from tasks.json file
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch('src/data/tasks.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.tasks)
        settasks(data.tasks)
      });
  }, []);

  return (
    <>
      <div className='nav-section'>
        <img className='cat-img' src={img.cat} alt="" />
        <h1>Gatines :D</h1>
      </div>
      <div className='gatines-app'>
        <TaskView/>
      </div>
    </>
  )
}

export default App
