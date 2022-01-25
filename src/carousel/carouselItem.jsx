import React from 'react';
import ServicesTable from '../tables/services-table';

const CarouselItem = ({data}) => {
    return ( 
        <div className="carousel-item">
            <ServicesTable data={data} />
        </div>
     );
}
 
export default CarouselItem;