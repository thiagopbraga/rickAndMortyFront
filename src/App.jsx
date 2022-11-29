import UserContextProvider from './contexts/PageContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Corpo from './components/Corpo';
import { BotoesMovimento } from './components/BotoesMovimento';

function App() {

  return (
    <UserContextProvider>
      <GlobalStyles />
      <Header />
      <Corpo />
    </UserContextProvider>
  )
}

export default App
