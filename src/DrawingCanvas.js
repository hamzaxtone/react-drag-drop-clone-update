import React, { useRef, useEffect } from 'react';

const DrawingCanvas = ({enable,Cwidth,Cheight}) => {
  const canvasRef = useRef(null);
  let isDrawing = false;

  const startDrawing = (e) => {
    isDrawing = true;
    const ctx = canvasRef.current.getContext('2d');
    console.log(enable);
    if( !enable ){
        isDrawing = false;
    }
    
    ctx.beginPath();
    // Use offsetX and offsetY to get the mouse position relative to the canvas
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    console.log('startDrawing');
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    console.log('draw');
  };

  const stopDrawing = () => {
    isDrawing = false;
    console.log('stopDrawing');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={Cwidth}
      height={Cheight}
      style={{ border: '1px solid black' }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    ></canvas>
  );
};

export default DrawingCanvas;
