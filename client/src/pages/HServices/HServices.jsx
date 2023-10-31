import React from 'react'
import HServiceCard from '../../components/Cards/HServiceCard';
import { hservices } from '../../data';

const HServices = () => {
  return (
    <div>
      {hservices.map(hservice => (
          <HServiceCard  item={hservice} key={hservice.id} />
        ))}
    </div>
  )
}

export default HServices;