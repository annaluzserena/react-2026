function TarjetaPersonal({nombre, edad, ciudad}) {
   return (
        <div className="tarjeta-personal">
            <span className="tarjeta-personal_nombre">
               👤{nombre}
            </span>
            <span className="tarjeta-personal_edad">
               {edad <= 30 ? '🌱' : '🌳'}{edad} años
            </span>
            <span className="tarjeta-personal_ciudad">
               📍{ciudad}
            </span>
        </div>
   ); 
}

export default TarjetaPersonal;