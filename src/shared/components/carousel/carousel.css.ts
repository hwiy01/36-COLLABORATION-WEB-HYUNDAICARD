import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  width: "100%",
  gap: '14px'
});

const carouselImage = style({
    objectFit: "cover",
    borderRadius: '14px',
    transition: "transform 150ms linear 50ms",
    //willChange: "transform",
    selectors: {
      '&:hover': {
        cursor: 'pointer',
        transform: 'translateY(-10px)'
      },
    },
});

export const halfImage = style([
    {
      width: "50%",
    },
    carouselImage,
  ]);

export const quarterImage = style([
    {
      width: "25%",
    },
    carouselImage,
  ]);

