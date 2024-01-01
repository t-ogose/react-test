
type Props = {
  value: number,
  current: string,
  callback: (v: string) => void,
  side?: 'left' | 'right'
};
export const Button = (props: Props) => {

  const {
    value,
    current,
    side,
    callback,
  } = props;

  return (
    <div
      style={{
        position: 'fixed',
        borderRadius: '50%',
        backgroundColor: (side ? `${side}_${value}` : `${value}`) === current ? '#555555' : '#999999',
        width: '20px',
        height: '20px',
        textAlign: 'center',
        top: `calc(50vh - 10px ${side === 'left' ? '-' : '+'} ${value < 6 ? 0 : 25}px)`,
        left: `calc(50vw - 10px ${side === 'left' ? '-' :'+'} ${value ? (value % 6 + (value > 5 ? 1 : 0)) * 25 : 0}px)`,
        transform: side === 'right' ? 'scale(-1, -1)' : '',
      }}
      onClick={() => callback(side ? `${side}_${value}` : `${value}`)}
    >
      {value}
    </div>
  );
};
