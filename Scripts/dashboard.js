document.addEventListener('DOMContentLoaded', function() {
    // Abrir modal
    const openModalBtn = document.getElementById('open-tutoria-modal');
    const modal = document.getElementById('tutoria-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    
    if (openModalBtn) {
      openModalBtn.addEventListener('click', function() {
        modal.classList.add('active');
      });
    }
    
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('active');
      });
    }
    
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        modal.classList.remove('active');
      });
    }
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
    
    // Agregar horarios dinámicos
    const addScheduleBtn = document.querySelector('.add-schedule');
    const scheduleContainer = document.querySelector('.schedule-container');
    
    if (addScheduleBtn && scheduleContainer) {
      addScheduleBtn.addEventListener('click', function() {
        const newSchedule = document.createElement('div');
        newSchedule.className = 'schedule-item';
        newSchedule.innerHTML = `
          <select class="schedule-day">
            <option>Lunes</option>
            <option>Martes</option>
            <option>Miércoles</option>
            <option>Jueves</option>
            <option>Viernes</option>
            <option>Sábado</option>
            <option>Domingo</option>
          </select>
          <input type="time" class="schedule-start" value="16:00" />
          <span>a</span>
          <input type="time" class="schedule-end" value="18:00" />
          <button type="button" class="remove-schedule">🗑️</button>
        `;
        scheduleContainer.appendChild(newSchedule);
        
        // Agregar evento al nuevo botón de eliminar
        newSchedule.querySelector('.remove-schedule').addEventListener('click', function() {
          scheduleContainer.removeChild(newSchedule);
        });
      });
      
      // Evento para el botón de eliminar existente
      const initialRemoveBtn = document.querySelector('.remove-schedule');
      if (initialRemoveBtn) {
        initialRemoveBtn.addEventListener('click', function() {
          const scheduleItem = this.closest('.schedule-item');
          if (scheduleContainer.children.length > 1) {
            scheduleContainer.removeChild(scheduleItem);
          } else {
            alert('Debe haber al menos un horario programado.');
          }
        });
      }
    }
    
    // Manejar el envío del formulario
})