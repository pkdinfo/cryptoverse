import React from 'react'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import {Col, Select, Row, Typography} from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
const { Title, Text} = Typography;
const {option} = Select;

const CryptoDetails = () => {

  const {coinId} = useParams();

  return (
    <div> CryptoDetails {coinId} </div>
  )
}

export default CryptoDetails;