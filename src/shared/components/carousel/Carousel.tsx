import React from "react";
import { CarouselImageContainer } from "./carousel-image-container";

export const Carousel = () => {
    const mockImgList = [{
        id: 1,
        order: 1,
        src: '/images/carousel/carousel-mock1.png',
        width: 'half' as const,
        alt: '캐러셀이미지'
    },{
        id: 2,
        order: 2,
        src: '/images/carousel/carousel-mock2.png',
        width: 'quarter' as const,
        alt: '캐러셀이미지'
    },{
        id: 3,
        order: 3,
        src: '/images/carousel/carousel-mock3.png',
        width: 'quarter' as const,
        alt: '캐러셀이미지'
    }]

  return (<CarouselImageContainer imageList={mockImgList} />)
};
