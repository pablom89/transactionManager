# 💰 Transaction Manager - Svelte 5

Una aplicación de gestión de transacciones financieras construida con Svelte 5 que permite visualizar, categorizar y analizar gastos personales.

## 🌟 Características

### Funcionalidades Principales
- ✅ **Visualización de transacciones** en tabla sorteable por fecha, monto y categoría
- ✅ **Filtrado avanzado** por rango de fechas, categoría
- ✅ **Categorización manual** con selectores dropdown
- ✅ **Auto-categorización inteligente** basada en palabras clave
- ✅ **Analíticas en tiempo real** con totales y estadísticas
- ✅ **Diseño responsivo** que funciona en móvil y desktop


## 🏗️ Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: Svelte 5 con runes (`$state`, `$derived`, `$props`)
- **Styling**: CSS vanilla con diseño moderno
- **Datos**: JSON en localStorage (55+ transacciones de ejemplo)

### Arquitectura de Components
```
+page.svelte
├── Panel
        ├── Filters & Sort & Totals
        ├── Bulk Actions
        └── Analytics
├── Tabla
        ├── Headers
        ├── Rows
        └── Items

```

### Uso de Svelte 5 Runes
- **`$state`**: Para datos reactivos (transacciones, filtros, ordenamiento)
- **`$derived`**: Para computaciones reactivas (transacciones filtradas, analíticas)
- **`$props`**: Para recibir datos de transacciones

## 🚀 Instalación y Configuración

### Prerequisitos
- Node.js 18+ 
- npm o pnpm

### Paso 1: Clonar repository
```bash
npm create sveltekit@latest transaction-manager
cd transaction-manager
```

### Paso 2: Instalar dependencias
```bash
npm i
```

### Paso 3: Reemplazar archivos
1. Reemplaza el contenido de `src/app.html` con estructura HTML básica
2. Crea `src/lib/TransactionManager.svelte` con el código del componente
3. Actualiza `src/routes/+page.svelte` para usar el componente

### Paso 3: Ejecutar la aplicación
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📊 Lógica de Categorización

### Auto-categorización
El sistema incluye reglas inteligentes para categorizar automáticamente las transacciones:

```javascript
const categorizationRules = {
  'STARBUCKS': 'Coffee',
  'WHOLE FOODS': 'Groceries', 
  'AMAZON': 'Shopping',
  'UBER': 'Transportation',
  'NETFLIX': 'Entertainment',
  'RENT': 'Housing',
  // ... y más
};
```

### Categorías Disponibles
- ☕ Coffee
- 🛒 Groceries  
- 🛍️ Shopping
- 📱 Electronics
- ⛽ Gas
- 🚗 Transportation
- 🎬 Entertainment
- 🍕 Food
- 🏠 Housing
- ⚡ Utilities
- 💰 Income
- 💸 Transfer
- 🏥 Healthcare
- 🔨 Home Improvement
- 💻 Software
- 👕 Clothing
- 🎁 Gifts

## 🧪 Casos de Uso

### Flujo Básico del Usuario
1. **Visualización**: El usuario ve todas las transacciones en la tabla
2. **Filtrado**: Aplica filtros por fecha, categoría
3. **Categorización**: Revisa y ajusta categorías sugeridas
4. **Análisis**: Examina el dashboard de analíticas
5. **Acciones en lote**: Usa atajos para categorizar rápidamente


