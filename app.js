  var opciones = document.querySelector('select');
 

  function action_server(){
      var eleccion = opciones.value;
   
      if(eleccion === 'Verbos'){
        window.location = 'file:///C:/Users/raulc/Desktop/WordDetector/WordDetectorVerbos.html'
      }else if(eleccion === 'Adjetivos'){
        window.location = 'file:///C:/Users/raulc/Desktop/WordDetector/WordDetectorAdjetivos.html'
      }else if(eleccion === 'Determinantes'){
        window.location = 'file:///C:/Users/raulc/Desktop/WordDetector/WordDetectorDeterminantes.html'
      }else if(eleccion === 'Sustantivos'){
        window.location = 'file:///C:/Users/raulc/Desktop/WordDetector/WordDetectorSustantivos.html'
      }

      
  }

  