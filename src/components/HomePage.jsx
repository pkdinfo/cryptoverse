import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Statistic, Col, Typography  } from 'antd';
import { useGetCryptoQuery } from '../services/cryptoApi';
import millify from 'millify';
import {Cryptocurrency, News} from '../components';



 const HomePage = () => {
  const { data, isFetching} = useGetCryptoQuery(10);
  console.log("dataaa", data);
  const globalStats = data?.data?.stats;
  console.log("dataa2",globalStats);

  // if(globalStats === undefined ) 
  // return 'Loading...';  
  if (isFetching) return 'Loading...';  

  return(
   <div>
    <h1 style={{fontSize: "50px"} }>Global Crypto Stats</h1>
        <Row gutter={[32,32]}>      
    <Col span={12}><Statistic title="Total Ceyptocurrency" level="5" value={globalStats.total}/></Col>

    <Col span={12}><Statistic title="Total Exchanges" level="5"  value={millify(globalStats.totalExchanges)}/></Col>
    <Col span={12}><Statistic title="Total Market Cap" level="5" value={millify(globalStats.totalMarketCap)}/></Col>
    <Col span={12}><Statistic title="Total 24th VOlume" level="5" value={millify(globalStats.total24hVolume)}/></Col>
    
    <Col span={12}><Statistic title="Total Market" level="5" value={millify(globalStats.totalMarkets)}/></Col>

    </Row>  
     <div className='home-heading-container'>
      <span className="home-title"><h1>Top Ten Crypto Currencies in World</h1></span>
      
      <span className="home-title"><Link to='/Cryptocurrency'><h1>Show More</h1></Link></span>

      </div>
       <Cryptocurrency simplified/>            
       <div className='home-heading-container'>

       <span className="home-title"><h1>Latest crypto News</h1></span>
      
      <span className="home-title"><Link to='/News'><h1>Show More</h1></Link></span>
      </div>

      <News simplified/>
  
       
   </div>
  )
}
export default HomePage;
