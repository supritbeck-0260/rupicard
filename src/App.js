import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopIntro } from './Components/TopIntro';
import { FloatingButton } from './Components/TopIntro/FloatingButton';
function App() {
  return (
    <div className="App">
        <TopIntro />
        <FloatingButton />
    </div>
  );
}

export default App;
