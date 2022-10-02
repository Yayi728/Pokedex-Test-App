export function PageNumber({ number, offset, offsetAmount }) {
  const list = number || '1';
  return (
    <div style={{ color: '#f8f9fa', textShadow: '2px 2px #851bed' }}>
      Pagina {Math.ceil(offset / offsetAmount + 1)} de{' '}
      {Math.ceil(list.length / offsetAmount)}
    </div>
  );
}
