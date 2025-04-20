import React from 'react';
import './Row1.css';

import Card from './Card';
import { FaEnvelope } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbUsersMinus } from "react-icons/tb";
import { FaTrafficLight } from "react-icons/fa";





function Row1() {
  return (
    <div className='row_one'>
        <Card 
          icon={<FaEnvelope />}
          title={12.361}
          subTitle={"Emails sent"}
          color={["red", "green", "blue"]}
          data={[
            { id: 0, value: 55},
            { id: 1, value: 20},
            { id: 2, value: 33},
          ]}
          percent={"+14%"}
        />
        <Card 
          icon={<MdOutlinePointOfSale />}
          title={431.361}
          subTitle={"Emails sent"}
          color={["pink", "#777", "gold"]}
          data={[
            { id: 0, value: 10},
            { id: 1, value: 15},
            { id: 2, value: 20},
          ]}
          percent={"+21%"}
        />
        <Card 
          icon={<TbUsersMinus />}
          title={32.441}
          subTitle={"Emails sent"}
          color={["blueviolet", "#f50", "yellow"]}
          data={[
            { id: 0, value: 40},
            { id: 1, value: 10},
            { id: 2, value: 29},
          ]}
          percent={"+5%"}
        />
        <Card 
          icon={<FaTrafficLight />}
          title={1.325}
          subTitle={"Emails sent"}
          color={["#fff", "blue", "gold"]}
          data={[
            { id: 0, value: 51},
            { id: 1, value: 25},
            { id: 2, value: 14},
          ]}
          percent={"+43%"}
        />
    </div>
  )
}

export default Row1;