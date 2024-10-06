export const CancionesList = ({ canciones }) => {
  return (
    <div className="row row-cols-2 row-cols-md-5 p-3 text-center">
      {canciones.map((cancion, index) => (
        <div className="col mb-4" key={index}>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={cancion.data.albumOfTrack.coverArt.sources[0].url}
              alt="cancion"
            />
            <div className="card-body">
              <h4 className="card-title">{cancion.data.name}</h4>
              <div className="d-flex justify-content-center">
                <a className="" href={cancion.data.uri}>
                  <button className="btn btn-primary">Reproducir</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
