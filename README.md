# 📘 Documentación Técnica - Frontend Angular

## 🛠 Tecnologías Utilizadas
 - Angular 17
 - Angular Material para componentes visuales 
 - Reactive Forms para manejo de formularios
 - HTTP Client para conexión con el backend (Spring Boot)
 - Material Datepicker y Select para manejo de fechas y combos
 - i18n - Español para formato de fechas

## 📁 Estructura de Carpetas
- employee-form: Componente para crear un nuevo empleado 
- employee-options: Componente con funcionalidades adicionales
- models: Modelos de datos TypeScript 
- services: Servicios para consumo de API REST
- utils: Funciones utilitarias

## 👨‍💻 Implementación de Pantallas

El archivo `app.component.html` actúa como contenedor principal e incluye:

- Botón para **crear empleados**
- Botón para **ver funcionalidades**

Cada botón muestra u oculta el componente correspondiente:

- `<app-employee-form>` → Formulario para crear empleados
- `<app-employee-options>` → Funcionalidades adicionales

---

## 📄 `employee-form.component.ts`

- Utiliza **ReactiveFormsModule** para validar campos:
   - Nombre
   - Apellido
   - Edad
   - Salario (valor por defecto 0 si está vacío)
   - Fecha de ingreso
   - Fecha de salida
   - Estado del empleado
   - Departamento

- El combo de departamentos se carga desde el backend vía `GET /department`
- Al crear un empleado se envía un `POST /employee/create/{departmentId}`
- Errores del backend se formatean y muestran en **SnackBar**
- Se usa `MatDatepicker` para fechas y `MatSelect` para combo

---

## 📄 `employee-options.component.ts`

Contiene botones para ejecutar funcionalidades especiales:

- Mostrar **empleado con salario más alto**
- Mostrar **empleado más joven**
- Mostrar **número de empleados que ingresaron en el último mes**

Cada botón hace la llamada correspondiente al backend y muestra el resultado.

---

## 🔁 Conexión con Backend

El frontend se comunica con Spring Boot usando `HttpClient`.

### Endpoints utilizados:

- `GET /department` → Obtener lista de departamentos
- `POST /employee/create/{departmentId}` → Crear nuevo empleado
- `POST /employee/delete/{employeeId}` → Eliminar empleado
- `GET /employee/highestSalary` → Empleado con salario más alto
- `GET /employee/lowerAge` → Empleado más joven
- `GET /employee/countLastMonth` → Empleados ingresados el último mes

## 🚀 Pasos para Ejecutar el Proyecto Angular

Asegúrate de tener **Node.js** y **Angular CLI** instalados.

```bash
# 1. Clonar el repositorio

# 2. Instalar dependencias
npm install

# 3. Ejecutar el servidor de desarrollo
ng serve

# 4. Abrir en el navegador
http://localhost:4200/
