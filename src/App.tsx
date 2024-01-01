import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "./Button";

const App = () => {

  const [target, setTarget] = useState<string>('');

  const handlerClickButton = useCallback((v: string) => {
    if (v && target === v) {
      setTarget('');
    } else {
      setTarget(v);
    }
  }, [target]);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >

      {/* 背景 */}
      <div
        style={{
          width: '50%',
          height: '100vh',
          backgroundColor: '#6666FF',
          display: 'flex',
        }}
      ></div>
      <div
        style={{
          left: '50%',
          width: '50%',
          height: '100vh',
          backgroundColor: '#66FF66',
          display: 'flex',
        }}
      >
      </div>

    {/* タグ */}
      <div
        style={{
          position: 'fixed',
          left: '10px',
          top: '10px',
          width: '100px',
          height: '20px',
          backgroundColor: '#999999',
          textAlign: 'center',
        }}
      >
        Player1
      </div>
      <div
        style={{
          position: 'fixed',
          left: 'calc(100vw - 110px)',
          top: 'calc(100vh - 30px)',
          width: '100px',
          height: '20px',
          backgroundColor: '#999999',
          textAlign: 'center',
          transform: 'scale(-1, -1)'
        }}
      >
        Player2
      </div>

    {/* ボタン */}
      <Button value={0} callback={handlerClickButton} current={target} />

      <Button value={1} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={2} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={3} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={4} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={5} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={6} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={7} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={8} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={9} callback={handlerClickButton} current={target} side={'left'} />
      <Button value={10} callback={handlerClickButton} current={target} side={'left'} />

      <Button value={1} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={2} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={3} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={4} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={5} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={6} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={7} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={8} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={9} callback={handlerClickButton} current={target} side={'right'} />
      <Button value={10} callback={handlerClickButton} current={target} side={'right'} />

    </div>
  );
}

export default App;
