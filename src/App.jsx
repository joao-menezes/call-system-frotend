import './App.css'
import MenuTopBar from './TopBar/TopBar'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ContentCards from './contentCards';

function App() {
/**voce consegue estilizar os componetes pegando sua classe no inspecionar por exemplo
 * tenho o <Card/> 
 * no inpecionar posso pegar a classe dele e estilizar no css
 */
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
