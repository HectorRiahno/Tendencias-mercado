# 🕯️ LuzAroma - Velas Aromáticas Artesanales

Una hermosa y moderna landing page para tu negocio de velas aromáticas artesanales construida con **Vite**, **React** y **Tailwind CSS**.

## ✨ Características

- **Diseño Moderno**: Diseño limpio y elegante con colores cálidos inspirados en velas
- **Completamente Responsivo**: Se ve genial en escritorio, tablet y dispositivos móviles
- **Animaciones Suaves**: Efectos hover y navegación con scroll suave
- **Showcase de Productos**: Colección destacada con tarjetas de producto
- **Sección de Testimonios**: Reseñas de clientes satisfechos
- **Formulario de Contacto**: Sección profesional para consultas de clientes
- **SEO-Friendly**: Estructura HTML semántica
- **Alto Rendimiento**: Construido con Vite para desarrollo y compilación ultra-rápidos

## 🚀 Comenzando

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. **Navegar al directorio del proyecto:**
   ```bash
   cd scented-candles-landing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir tu navegador y visitar:**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run preview` - Previsualizar compilación de producción localmente
- `npm run lint` - Ejecutar ESLint

## 🎨 Personalización

### Marca y Contenido
Actualiza lo siguiente en `src/App.jsx`:
- **Nombre del negocio**: Cambia "LuzAroma" por el nombre de tu marca
- **Información de productos**: Actualiza el array `products` con los detalles de tus velas
- **Testimonios**: Reemplaza los testimonios con reseñas reales de clientes
- **Información de contacto**: Reemplaza los detalles de contacto placeholder
- **Sección Acerca de**: Personaliza tu historia y mensaje de marca
- **Imágenes**: Reemplaza las URLs placeholder con fotos de tus productos reales

### Colores
El proyecto usa una paleta de colores personalizada centrada en naranja:
- **Naranja principal**: `orange-500` (#f97316)
- **Naranja hover**: `orange-600` (#ea580c)
- **Fondo naranja suave**: `orange-50` (#fff7ed)

### Estilo
- Estilos principales: `src/index.css`
- Estilos específicos del componente: `src/App.css`
- Configuración de Tailwind: `tailwind.config.js`

## 📁 Estructura del Proyecto

```
scented-candles-landing/
├── public/              # Recursos estáticos
├── src/
│   ├── App.jsx         # Componente principal de la landing page
│   ├── App.css         # Estilos del componente
│   ├── index.css       # Estilos globales y Tailwind
│   └── main.jsx        # Punto de entrada de la app
├── tailwind.config.js   # Configuración de Tailwind CSS
├── postcss.config.js    # Configuración de PostCSS
└── package.json        # Dependencias y scripts
```

## 🌟 Secciones Incluidas

1. **Navegación** - Header fijo con navegación responsiva
2. **Sección Hero** - Titular llamativo con botones de llamada a la acción
3. **Productos** - Showcase de la colección destacada (4 productos)
4. **Características** - Por qué elegir LuzAroma (Cera Natural, Larga Duración, etc.)
5. **Testimonios** - Reseñas de clientes satisfechos con calificación de estrellas
6. **CTA** - Sección de llamada a la acción con captura de email
7. **Footer** - Información de la marca, enlaces y contacto

## 📱 Diseño Responsivo

La landing page está completamente optimizada para:
- **Escritorio** (1024px en adelante)
- **Tablet** (768px - 1023px)
- **Móvil** (320px - 767px)

## 🚀 Despliegue

### Compilar para Producción
```bash
npm run build
```

### Opciones de Despliegue
- **Netlify**: Conecta tu repo de GitHub para despliegues automáticos
- **Vercel**: Perfecto para apps React con configuración cero
- **GitHub Pages**: Hosting gratuito para sitios estáticos
- **Tu proveedor de hosting**: Sube el contenido de la carpeta `dist`

## 🎯 Próximos Pasos

Para mejorar tu landing page, considera agregar:
- Funcionalidad de carrito de compras
- Integración de pagos (Stripe, PayPal)
- Sección de blog para SEO
- Newsletter signup
- Integración con redes sociales
- Google Analytics
- Widget de chat en vivo
- Galería de productos expandida
- Sistema de reseñas de clientes

## 📝 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Herramienta de compilación
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos hermosos
- **PostCSS** - Procesamiento de CSS

## 📝 Licencia

Este proyecto es código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

**¡Felices Ventas! 🕯️✨**

*Hecho con ❤️ para emprendedores de velas aromáticas*
