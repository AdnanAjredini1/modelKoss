import CardW from './CardW';
import './what-we-offer.scss'
import { whatWeOfferData } from './whatweofferData';

function WhatWeOffer() {
    return (
        <div className='whatWeOfferWrapper'>
           {whatWeOfferData.map((item, index) => (
            <CardW  key={index} title={item.title} icon={item.icon} description={item.description}/>
           ))}
           
        </div>
    );
}

export default WhatWeOffer;