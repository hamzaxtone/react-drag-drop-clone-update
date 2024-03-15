import React, { useState, useEffect, useRef } from 'react';
import TopPanel from './TopPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faRemove, faTable } from '@fortawesome/free-solid-svg-icons';
// import { toPng } from 'html-to-image';

const Canvas = ({ items, onDrop, onRemoveItem, onUpdateItems ,canvasRef  }) => {
  //const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  // useEffect(() => {
  //   onSaveCanvasRef(canvasRef);
  //   //console.log(canvasRef);
  // }, [onSaveCanvasRef]);

  const [draggedItem, setDraggedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(0);
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    onUpdateItems(items); // Update right panel when items change
  }, [items, onUpdateItems]);

  const handleDragStart = (e, item) => {
    console.log(item.name);
    e.dataTransfer.setData('text/plain', item.name);
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    if (draggedItem) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Find the dragged item in the items array
      const updatedItems = items.map((item) =>
        item === draggedItem ? { ...item, x, y } : item
      );

      onUpdateItems(updatedItems); // Update items with the modified coordinates
      setDraggedItem(null);
    } else {
      const itemName = e.dataTransfer.getData('text/plain');
      onDrop({ name: itemName, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  };

  const handleItemClick = (e, item) => {
    setSelectedItem(item);
    setPositionX(item.x);
    setPositionY(item.y);
    setPositionZ(item.z || 0);
    setColor(item.color || '#000000');
  };

  const handlePositionXChange = (newValue) => {
    setPositionX(newValue);
    if (selectedItem) {
      selectedItem.x = newValue;
      onUpdateItems([...items]); // Update items with modified position
    }
  };

  const handlePositionYChange = (newValue) => {
    setPositionY(newValue);
    if (selectedItem) {
      selectedItem.y = newValue;
      onUpdateItems([...items]); // Update items with modified position
    }
  };

  const handlePositionZChange = (newValue) => {
    setPositionZ(newValue);
    if (selectedItem) {
      selectedItem.z = newValue;
      onUpdateItems([...items]); // Update items with modified position
    }
  };

  const handleColorChange = (newValue) => {
    setColor(newValue);
    if (selectedItem) {
      selectedItem.color = newValue;
      onUpdateItems([...items]); // Update items with modified color
    }
  };

  const handleRemoveItemClick = (itemId) => {
    console.log('handleRemoveItemClick');
    onRemoveItem(itemId);
    setSelectedItem(null);
  };

  const handleMouseDown = (e, item) => {
    console.log("Mouse down", item);
    setDraggedItem(item);
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const updatedItems = items.map((itm) =>
      itm === item ? { ...itm, offsetX, offsetY } : itm
    );
    onUpdateItems(updatedItems);
  };
  
  const handleMouseMove = (e) => {
    if (draggedItem) {
      //console.log("Mouse move", e.clientX, e.clientY);
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - draggedItem.offsetX;
      const y = e.clientY - rect.top - draggedItem.offsetY;
      const updatedItems = items.map((item) =>
        item === draggedItem ? { ...item, x, y } : item
      );
      onUpdateItems(updatedItems);
    }
  };
  
  const handleMouseUp = (e, item) => {
    console.log("Mouse Up", item);
    //console.log("Mouse up");
    //setDraggedItem(null);
  };
  
  // const handleSaveAsPNG = async () => {
  //   try {
  //     const dataUrl = await toPng(canvasRef.current);
  //     const link = document.createElement('a');
  //     link.href = dataUrl;
  //     link.download = 'asdascanvas_preview.png';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error('Error saving canvas as PNG:', error);
  //   }
  // };
  const pngExportRef = () => {
    return canvasRef;
  }
  // const [canvasWidth, setcanvasWidth] = useState(null);
  
  // useEffect((canvasRef) => {
  //   console.log(canvasRef.current.clientWidth);
  // },[canvasRef]);

  return (
    <section id='Canvas' className='flex-grow-1 Canvas'>
      <div className='px-0'>
      <TopPanel
        positionX={positionX}
        positionY={positionY}
        positionZ={positionZ}
        color={color}
        onPositionXChange={handlePositionXChange}
        onPositionYChange={handlePositionYChange}
        onPositionZChange={handlePositionZChange}
        onColorChange={handleColorChange}
      />
      {/* <button onClick={handleSaveAsPNG}>Save Canvas as PNG</button> */}
      
      <div
      ref={canvasRef}
        id='print'
        className='mx-5'
        style={{
          position: 'relative',
          width: '100%',
          background:'#ffffff',
          height: '600px',
          border: '1px solid black',
          cursor: 'pointer',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, index) => (
          <div
            key={index}
            
            className='draggedItem'
            
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              width: 'auto',
              height: 'auto',
              padding: '10px',
              zIndex: selectedItem === item ? 1 : 0,
              outline: selectedItem === item ? '2px solid blue' : 'none',
              outlineOffset: selectedItem === item ? '-3px' : '0px',
            }}
          >
            <div className='draggableItem'
              draggable
              onMouseUp={(e) => handleMouseUp(e, item)}
              onMouseDown={(e) => handleMouseDown(e, item)}
              onDragStart={(e) => handleDragStart(e, item)}
              onClick={(e) => handleItemClick(e, item)}
            >
            {item.name === 'Chair' ? (
                <FontAwesomeIcon title={item.name} color={item.color} size='3x' icon={faChair} />
              ): item.name === 'Table' ? (
                <FontAwesomeIcon title={item.name} color={item.color} size='6x' icon={faTable} />
              )
              : item.name === 'Text' ? (
                <img src='https://images.unsplash.com/photo-1709136494561-d98ea74c9431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' />
                
              )
              : item.name === 'Text' ? (
                <h6>Text</h6>
                
              ) : (
                <h6>{item.name}</h6>
              )}
            </div>
            {selectedItem === item && (
              <FontAwesomeIcon
                style={{
                  position: 'absolute',
                  left: '100%',
                  top: '-20px',
                }}
                color='red' title='Remove' onClick={() => handleRemoveItemClick(item.id)} size='2x' icon={faRemove}
              />
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Canvas;
