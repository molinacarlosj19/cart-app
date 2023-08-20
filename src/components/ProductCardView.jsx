//rafc - snipptet

export const ProductCardView = ({name, description, price}) => {
  return (
    <>
        <div className="card">
                <div className="cardbody">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">{price}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
    </>
  )
}
