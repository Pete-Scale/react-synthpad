import { AppProvider } from './context'
import ScaleSelector from './components/ScaleSelector'
import Layout from './components/Layout'
import Synth from './components/Synth'

function App(props) {
  return (
    <AppProvider>
      <Layout>
        <ScaleSelector />
        <Synth />
      </Layout>
    </AppProvider>
  );
}

export default App;
