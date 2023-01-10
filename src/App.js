import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import { Navbaar, HomePage, News, Cryptocurrency, CryptoDetails, Exchanges } from './components';
import Layout from 'antd/es/layout/layout';
import Typography from 'antd/es/typography/Typography';
import { Space } from 'antd';


function App() {
  return (
    <div className="app">
      <div className='navbar'>
    <Navbaar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" element= {<HomePage/>}/>             
              <Route path="Cryptocurrency" element={<Cryptocurrency/>}/>
              <Route path="Exchanges" element={<Exchanges/>}/>
              <Route path="CryptoDetails" element={<CryptoDetails/>}/>
              <Route path="News" element={<News/>}/>     

              </Routes>
          </div>
         
        </Layout>

        <div className='footer'>
    
    <Typography.Title level={2}>Cryptoverse @ All Right Reserved</Typography.Title>
    <Space>
      <Link to="/">HomePage</Link>
      <Link to="/Exchanges">Exchanges</Link>
      <Link to="/News">News</Link>


    </Space>
    </div>
      </div>
    
    </div>
  );
}

export default App;
