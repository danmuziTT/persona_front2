// assets/icons/BookmarkIcon.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkIcon = ({ color = '#ffffff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 3h14a2 2 0 012 2v16l-9-4-9 4V5a2 2 0 012-2z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BookmarkIcon;
