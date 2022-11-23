import './App.css';
import {TrendingAssets} from './Components/TrendingAssets'
import crypto from './Components/CoinIcons'


function App() {
  return ( <TrendingAssets assets={crypto.coinIcons} /> );
}

export default App;
