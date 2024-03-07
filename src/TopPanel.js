import React from 'react';

const TopPanel = ({ positionX, positionY, positionZ, color, onPositionXChange, onPositionYChange, onPositionZChange, onColorChange }) => {
  const handlePositionXChange = (e) => {
    onPositionXChange(parseInt(e.target.value));
  };

  const handlePositionYChange = (e) => {
    onPositionYChange(parseInt(e.target.value));
  };

  const handlePositionZChange = (e) => {
    onPositionZChange(parseInt(e.target.value));
  };

  const handleColorChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Position X:
          <input type="range" min="0" max="800" value={positionX} onChange={handlePositionXChange} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Position Y:
          <input type="range" min="0" max="600" value={positionY} onChange={handlePositionYChange} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Position Z:
          <input type="range" min="0" max="100" value={positionZ} onChange={handlePositionZChange} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
      </div>
    </div>
  );
};

export default TopPanel;
