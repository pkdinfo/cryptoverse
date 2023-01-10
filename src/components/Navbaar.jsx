import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { useHomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, setActiveMenu, activeMenu, UserOutlined, HomeOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/crypto.jpg';

const Navbaar =()=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    
        useEffect(()=>{
            const handleResize=()=> setScreenSize(window.innerWidth);
            window.addEventListener('resize', handleResize);
            handleResize();
            return  ()=> window.removeEventListener('resize', handleResize);
        },[])

        useEffect (()=>{
            if (screenSize<768){
                setActiveMenu(false)
            } else{
                setActiveMenu(true);
            }
        }, [screenSize])



    return (            
       <div className="nav-container">
         <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={100} className="logo" style={{color: "white"}}>Crypto Verse</Typography.Title>
                 <Button className='menu-control-container' onClick={()=> setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button> 
             </div>

     { activeMenu && (
        <Menu theme='dark'>
      <Menu.Item icon={<HomeOutlined/>}>
      <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined/>}>
      <Link to="/Cryptocurrency">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined/>}>
      <Link to="/Exchanges">Exchanges</Link> 
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined/>}>
      <Link to="/News">News</Link> 
      </Menu.Item>
      </Menu>
     )}
      

     
          
        </div> 

    );
}

export default Navbaar;