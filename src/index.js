import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Glide from '@glidejs/glide'
// import { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
// import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
// import Glide, { Controls, Breakpoints,Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

// import Glide from '@glidejs/glide/dist/glide.modular.esm';

import _ from 'lodash';

import './style.css';
import './scss/main.scss';
// import Glide from '@glidejs/glide/dist/glide.modular.esm.js';




function component() {
    const element = document.createElement('div');

    return element;
  }


  window.addEventListener('load', () => {
    console.log('lading');
    new Glide('.glide', {
        // type: 'carousel',
        // gap: 0,
        // autoplay: 3000
    }).mount()
  });

  $(document).ajaxComplete(function() {
    new Glide('.glide', {
      // type: 'carousel',
      // gap: 0,
      // autoplay: 3000
    }).mount()
  });

  document.body.appendChild(component());