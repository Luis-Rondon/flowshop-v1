import React, { useState, useEffect } from 'react';
import Calendaricon from '../../icons-creator/calendar-icon'; // Icono de calendario (asumiendo que ya existe)

const TimePicker = () => {
  // Estado para la fecha actual
  const [fecha, setFecha] = useState(new Date());
  // Estado para la hora actual
  const [hora, setHora] = useState(new Date().toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: 'numeric',
  }));

  // Función para obtener la fecha y hora actual
  const obtenerFechaHoraActual = () => {
    const ahora = Date.now(); // Obtiene la marca de tiempo actual
    const fechaActual = new Date(ahora); // Crea un objeto Date con la marca de tiempo
    const horaActual = fechaActual.toLocaleTimeString('es-ES', { // Formatea la hora
      hour: 'numeric',
      minute: 'numeric',
    });
    // Actualiza los estados con la fecha y hora actual
    setFecha(fechaActual);
    setHora(horaActual);
  };

  // Ejecuta la función al montar el componente
  useEffect(() => {
    obtenerFechaHoraActual();
  }, []);

  
  // Formateo de la fecha para mostrar
  const fechaFormateada = fecha.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  // Función para obtener la fecha seleccionada del calendario
  const obtenerFechaSeleccionada = (e) => {
    setFecha(new Date(e.target.value)); // Actualiza el estado con la fecha seleccionada
  };

  return (
    <div className="time-picker">
      <div className="fecha-container">
        <label htmlFor="fecha-value">Fecha</label>
        <div className='group-calendar'>
        <input className='input-calendar'
          type="date"
          id="fecha-value"
          defaultValue={fechaFormateada} // Muestra la fecha formateada al renderizar
          onChange={obtenerFechaSeleccionada}
        />
        <div className='svg-calendar'><Calendaricon/></div>
        </div>
      </div>
      <div className="hora-container">
        <label htmlFor="hora-value">Hora</label>
        <input
          type="text"
          id="hora-value"
          value={hora} // Muestra la hora actual
        />

      </div>
    </div>
  );
};

export default TimePicker;
