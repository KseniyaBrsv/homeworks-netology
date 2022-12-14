import './App.css';
import ShopItemFunc from "./components/ShopItemFunc";
import ItemsModel from "./components/ItemsModel";

const item = new ItemsModel(
  'Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399,
  '£'
)

export default function App()  {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}


