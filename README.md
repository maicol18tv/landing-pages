# DevSkill Up

Bootcamp intensivo de JavaScript Moderno y Lógica de Programación enfocado en acelerar el talento técnico de desarrolladores junior y estudiantes de sistemas.

---

## Vista previa

Plataforma de conversión optimizada, accesible y con persistencia de datos en el cliente, diseñada para gestionar el registro de aspirantes en tiempo real.

---

## Tecnologías utilizadas

- HTML5 Semántico
- CSS3 Custom Properties
- JavaScript ES6 Puro
- GitHub Pages
- Google AI Studio y Gemini

---

## Características

- Diseño 100% responsive verificado en móvil, tablet y escritorio
- Estructura HTML5 con roles semánticos estrictos
- Sistema de diseño basado en 10 Design Tokens globales
- Formulario de captura con validación técnica en tiempo real
- Autoguardado inteligente mediante almacenamiento local
- Lógica de estado para usuarios ya convertidos
- Integración con API externa para envío de datos por método POST
- Cero errores en consola DevTools y optimización Lighthouse
- Soporte PWA (Progressive Web App): Configuración completa para permitir la instalación nativa del sitio como aplicación en dispositivos Android, iOS y escritorio, habilitando un acceso directo independiente y una experiencia a pantalla completa.

## 📱 Experiencia Móvil e Instalación (PWA)
El proyecto está configurado bajo los estándares modernos de las **Progressive Web Apps**, permitiendo a los usuarios de dispositivos móviles (especialmente en Android a través de Google Chrome) instalar la plataforma como una aplicación nativa.

### Componentes de la Implementación:
1. **`manifest.json`:** Define la identidad visual de la aplicación, incluyendo el color de la interfaz (`#7c3aed`), el modo de visualización a pantalla completa (`standalone`) y las rutas de los iconos responsivos.
2. **`sw.js` (Service Worker):** Registrado de forma asíncrona y con rutas relativas para garantizar su compatibilidad al ser desplegado en entornos como **GitHub Pages**. Controla el ciclo de vida de la aplicación y prepara el terreno para la persistencia del sitio.

### Beneficios en Android:
- **Banner de Instalación:** El navegador detecta automáticamente los criterios de la PWA y sugiere al usuario "Agregar a la pantalla de inicio".
- **Aislamiento de Navegador:** Al ejecutarse, la landing page se abre en una ventana independiente, ocultando la barra de navegación de Chrome para emular una app nativa.
---

## Estructura del proyecto

```text
devskill-up-landing/
│
├── styles.css
│   
│
├── script.js
│    
│
├── index.html
│
│
├──manifest.json
│
│
├──sw.js
│
└── README.md
