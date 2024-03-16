import React from 'react';

const TopPanel = ({ positionX, positionY, positionZ, color, itemText, itemImage, onPositionXChange, onPositionYChange, onPositionZChange, onColorChange, onItemTextChange, onItemImageChange }) => {
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

  const handleItemTextChange = (e) => {
    onItemTextChange(e.target.value);
  };

  const handleItemImageChange = (e) => {
    onItemImageChange(e.target.value);
  };

  return (
    <section className='TopPanel bg-white px-3 py-2'>
      <div className='d-flex flex-wrap'>
        <table className='w-50 table table-bordered'>
          <tbody>
            <tr>
              <td>
                <label htmlFor="positionX">Position X:</label>
              </td>
              <td>
                <input
                  id="positionX"
                  type="range"
                  min="0"
                  max="800"
                  value={positionX}
                  onChange={handlePositionXChange}
                />
              </td>
              <td>{positionX}px</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="positionY">Position Y:</label>
              </td>
              <td>
                <input
                  id="positionY"
                  type="range"
                  min="0"
                  max="600"
                  value={positionY}
                  onChange={handlePositionYChange}
                />
              </td>
              <td>{positionY}px</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="positionZ">Position Z:</label>
              </td>
              <td>
                <input
                  id="positionZ"
                  type="range"
                  min="0"
                  max="100"
                  value={positionZ}
                  onChange={handlePositionZChange}
                />
              </td>
              <td>{positionZ}</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="color">Color:</label>
              </td>
              <td >
                <input
                  id="color"
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                />
              </td>
              <td>{color}</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="itemText">Item Text:</label>
              </td>
              <td>
                <input
                  id="itemText"
                  type="text"
                  value={itemText}
                  onChange={handleItemTextChange}
                />
              </td>
              <td>{itemText}</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="itemImage">Item Image:</label>
              </td>
              <td>
                <input
                  id="itemImage"
                  type="text"
                  value={itemImage}
                  onChange={handleItemImageChange}
                />
              </td>
              <td>{itemImage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopPanel;
