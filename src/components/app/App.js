import './App.scss';
import Button from '../button';
import Input from '../input';
import IconButton from '../icon-button'
import { FaShare , FaClone, FaHeadphonesAlt, FaVolumeMute, FaVolumeUp} from 'react-icons/fa'

function App() {

  function handleClick(event) {
    console.log('You click', event.target)
  }

  function handleChange(event) {
    console.log('You got', event.target.value)
  }

  return (
    <div className="app">
      <div className="area">
        <div className="displayArea">
          <Button type="rect" onClick={ handleClick }>Button</Button>
          <Button type="round" onClick={ handleClick }>Button</Button>
        </div>

        <div className="displayArea">
          <Button type="rect" startIcon={<FaShare/>} onClick={ handleClick }>Share</Button>
          <Button type="round" startIcon={<FaClone/>} onClick={ handleClick }>Clone</Button>
        </div>

        <div className="displayArea">
          <IconButton icon={<FaHeadphonesAlt/>} onClick={ handleClick }></IconButton>
          <IconButton icon={<FaVolumeMute/>} onClick={ handleClick }></IconButton>
          <IconButton icon={<FaVolumeUp/>} onClick={ handleClick }></IconButton>
        </div>

        <div className="displayArea">
          <Input type="rect" placeholder="say something" onChange={ handleChange }/>
          <Input type="round" value="say something" onChange={ handleChange }/>
        </div>
      </div>
    </div>
  );
}

export default App;
