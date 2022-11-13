import './App.css';
import {TrendingAssets} from './Components/TrendingAssets'
import crypto from './Contents/coinData'


function App() {
  return ( <TrendingAssets assets={crypto.coinData} /> );
}

export default App;
