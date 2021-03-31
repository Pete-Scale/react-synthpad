import { AppProvider } from './context'
import ScaleSelector from './components/ScaleSelector'

function App(props) {
  return (
    <AppProvider>
      <ScaleSelector />
      <div>Synth App</div>
    </AppProvider>
  );
}

export default App;
