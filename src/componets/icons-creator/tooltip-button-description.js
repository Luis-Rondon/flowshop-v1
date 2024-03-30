import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min';
import "../creator/creator-componets.css";

function TooltipButtonDescription() {
  useEffect(() => {
    // Inicializa los tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new Tooltip(tooltipTriggerEl, {
        customClass: 'custom-tooltip'
      });
    });
  }, []);

  return (
    <button type="button" className="btn p-0" style={{ width: '12px', height: '12px', backgroundColor: 'transparent', border: 'none' }} data-bs-toggle="tooltip" data-bs-placement="top" title="Inserta una breve descripción sobre lo que tratará tu publicación para ayudarnos a ser más certeros en la creación de contenido." data-bs-custom-class="custom-tooltip">
      
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill="#6335FF"
        fillOpacity="0.5"
        d="M5.97 9.6c.21 0 .388-.073.533-.218a.722.722 0 00.217-.532.726.726 0 00-.217-.533.721.721 0 00-.533-.217.723.723 0 00-.532.218.727.727 0 00-.218.532c0 .21.073.388.218.533a.722.722 0 00.532.217zm-.54-2.31h1.11c0-.33.038-.59.113-.78.075-.19.287-.45.637-.78.26-.26.465-.508.615-.743.15-.235.225-.517.225-.847 0-.56-.205-.99-.615-1.29-.41-.3-.895-.45-1.455-.45-.57 0-1.032.15-1.387.45-.355.3-.603.66-.743 1.08l.99.39c.05-.18.163-.375.338-.585.175-.21.442-.315.802-.315.32 0 .56.088.72.263.16.175.24.367.24.577 0 .2-.06.388-.18.563-.12.175-.27.337-.45.487-.44.39-.71.685-.81.885-.1.2-.15.565-.15 1.095zM6 12c-.83 0-1.61-.157-2.34-.472a6.05 6.05 0 01-1.905-1.283A6.055 6.055 0 01.473 8.34 5.853 5.853 0 010 6c0-.83.158-1.61.473-2.34a6.068 6.068 0 011.282-1.905A6.055 6.055 0 013.66.473 5.853 5.853 0 016 0c.83 0 1.61.158 2.34.473.73.315 1.365.742 1.905 1.282s.968 1.175 1.283 1.905C11.843 4.39 12 5.17 12 6c0 .83-.158 1.61-.473 2.34a6.068 6.068 0 01-1.282 1.905c-.54.54-1.175.968-1.905 1.283C7.61 11.843 6.83 12 6 12z"
      ></path>
    </svg>
    </button>
  );
}

export default TooltipButtonDescription;
