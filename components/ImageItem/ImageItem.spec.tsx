import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ImageItem } from "./ImageItem";

describe('ImageItem', () => {
  it('renders image', () => {
    const image = {
      src: '/image.jpg',
      alt: 'test image',
      dimensions: {width: 1, height:1},
      orientation: 'portrait',
      id: 'image-1'
    };

    render(<ImageItem image={image} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});