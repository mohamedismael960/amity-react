import React, { useState } from 'react';

import UiKitImageGallery from '.';

export default {
  title: 'Ui Only',
};

export const UiImageGallery = ({ numberOfImages, onChange, ...props }) => {
  const [index, setIndex] = useState(0);

  const handleChange = (newIndex) => {
    onChange(newIndex);
    setIndex(newIndex);
  };

  const imageUrls = new Array(numberOfImages).fill(0).map((_, i) => `https://cataas.com/cat?${i}`);

  return <UiKitImageGallery {...props} index={index} items={imageUrls} onChange={handleChange} />;
};

UiImageGallery.storyName = 'Image Gallery';

UiImageGallery.args = {
  numberOfImages: 3,
  showCounter: true,
};

UiImageGallery.argTypes = {
  numberOfImages: { control: { type: 'number', min: 1, step: 1 } },
  onChange: { action: 'onChange(newIndex)' },
  showCounter: { control: { type: 'boolean' } },
};
