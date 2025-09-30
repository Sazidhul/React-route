import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
   const {name, price, description, features} = pricing; //   for this destruction we can use each element individual 
   return (
      <div className='flex flex-col  border bg-amber-900 rounded-2xl p-4'>
         {/* card header */}
         <div >
            <h1 className='text-7xl'>{name}</h1>
            <h4>{pricing.price}</h4>
         </div>
         {/* Card body */}
         <div className='bg-blue-950 p-4 rounded-2xl mt-10  flex-1'>
            <p>{pricing.description}</p>
            {
               features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
            }
         </div>
         <button className="btn w-full rounded-4xl mt-2 ">Subscribe</button>
      </div>
   );
};

export default PricingCard;