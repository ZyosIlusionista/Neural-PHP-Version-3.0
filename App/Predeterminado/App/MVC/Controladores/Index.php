<?php
	
	/**
	 * Clase: Index
	 */
	class Index extends Controlador {
		
		/**
		 * Metodo: Constructor
		 */
		function __Construct() {
			parent::__Construct();
		}
		
		/**
		 * Metodo: Index
		 */
		public function Index() {
			
			/**
			 * Ejecutando el motor de plantillas
			 * Se muestra la plantilla HTML
			 */
			$Plantilla = new NeuralPlantillasTwig('Predeterminado');
			echo $Plantilla->MostrarPlantilla('Index.html');
		}
	}