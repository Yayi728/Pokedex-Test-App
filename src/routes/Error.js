import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '70vh' }}
    >
      <h1
        className="display-3 m-3"
        style={{
          color: '#f8f9fa',
          textShadow: '2px 2px #851bed',
        }}
      >
        Perdón, esa página no existe.
      </h1>
      <Link to={`/`}>
        <p className="btn btn-outline-info">Regresar a la página principal!</p>
      </Link>
    </div>
  );
}
