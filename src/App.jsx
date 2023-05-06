import './App.css'
import MenuTopBar from './TopBar/TopBar'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ContentCards from './contentCards';

function App() {

  return (
    <>
      <MenuTopBar/>
      <div className="content">
        <ContentCards/>
      </div>
    </>
  )
}

export default App
