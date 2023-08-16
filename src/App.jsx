
import './App.css';
import partner1 from './assets/images/partner1.png'
import partner2 from './assets/images/partner2.png'
import partner3 from './assets/images/partner3.png'
import partner4 from './assets/images/partner4.png';


function App() {
  return (
    <div className="app">
      <div className="partners-component">

        <div className='details'>
          <p className='our-partners'>our partners</p>
          <p className='details-heading'>
            We are backed by the best in the
            <span className='web3'>web3</span>
          </p>
          <p className='details-sub-heading'>Our platform and company are approved and trusted</p>
        </div>

        <div className='partner-names'>
          <div className='partner'>
            <img src={partner1} alt="group" />
          </div>
          <div className='partner'>
            <img src={partner2} alt="group" />
          </div>
          <div className='partner'>
            <img src={partner3} alt="group" />
          </div>
          <div className='partner'>
            <img src={partner4} alt="group" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
