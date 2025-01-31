# **Informe de Testing**

**Proyecto asignado:** [Repositorio GitHub](https://github.com/IngSoft-FIS-2024-2/proyecto-quagliata-ramirez)

---

## **Test de Sistema**

### **Diseño de casos de prueba**
Se diseñaron tres casos de prueba principales orientados a validar funcionalidades clave del sistema:  
1. **Botones:** Evaluar la funcionalidad de los botones principales en la página (Configuración, Clases, Agregar Clase).  
2. **Buscador:** Validar la funcionalidad del buscador, incluyendo búsquedas insensibles a mayúsculas.  
3. **Clases preexistentes:** Comprobar el acceso y la capacidad de modificación de las clases ya creadas.  

**Criterios utilizados:**  
- Comportamiento esperado vs. comportamiento real.  
- Funcionalidad básica y manejo de errores.  

---

### **Definición de ambientes de testing y ejecución de casos**
- **Navegador:** firefox.  
- **Sistema Operativo:** Windows.  
- **Duración de la sesión:** 30 minutos.  
- **Tester responsable:** Joaquin Larronda(301923).  

**Notas:**  
- El ambiente de pruebas replicó las condiciones estándar de uso para garantizar la relevancia de los resultados.  
- Se utilizó la página web desplegada desde el repositorio del proyecto.  

---

### **Sesiones de pruebas exploratorias**
- **Misión:** Evaluar la funcionalidad de la página del obligatorio en un período de 30 minutos.  
- **Enfoque:**  
  - Diseño y ejecución de pruebas: 60%.  
  - Investigación y reporte de defectos: 20%.  
  - Preparación: 20%.  
- **Áreas cubiertas:**  
  - Botones principales.  
  - Buscador.  
  - Clases preexistentes y su interacción.  
- **Resultados:**  
  - Prueba 1: Identificados 4 defectos relacionados con botones.  
  - Prueba 2: Buscador funcional, sin problemas detectados.  
  - Prueba 3: Las clases preexistentes no permiten acceso ni modificación.  

---

## **Reporte de Issues**

### **Buenas prácticas de reporte**
Se utilizó un formato estandarizado para registrar los issues en GitHub, asegurando claridad y detalle en la descripción, pasos para reproducir y evaluación de impacto.  

**Formato utilizado:**  
1. **Título claro y descriptivo.**  
2. **Descripción del problema.**  
3. **Pasos para reproducir.**  
4. **Resultado esperado vs. resultado real.**  
5. **Impacto:** Clasificación por severidad y prioridad.  
6. **Entorno:** Información sobre navegador y sistema operativo.  

---

### **Clasificación**
 

1. **Botón "Clases" funcionalidad ambigua:**  
   - Severidad: Medio.  
   - Prioridad: Media.
   
2. **Botón "Configuración" no funciona:**  
   - Severidad: Medio.  
   - Prioridad: Baja.   

3. **Botón "Guardar Clase" no funciona:**  
   - Severidad: Alto.  
   - Prioridad: Alta.  

4. **Botón "Guardar Clase" no resetea el texto:**  
   - Severidad: Baja.  
   - Prioridad: Baja.  

5. **Clases preexistentes sin funcionalidad:**  
   - Severidad: Alto.  
   - Prioridad: Alta.  

---

## **Informe de Calidad del Sistema**

### **Resumen de Issues por Tipo y Severidad**
| Tipo de Issue              | Cantidad | Severidad Alta | Severidad Media | Severidad Baja |
|----------------------------|----------|----------------|-----------------|----------------|
| Botones                    | 4        | 1              | 2               | 1              |
| Clases preexistentes       | 1        | 1              | 0               | 0              |
| Funcionalidad general      | 0        | 0              | 0               | 0              |
| **Total**                  | **5**    | **2**          | **2**           | **1**          |

---

### **Evaluación Global de Calidad**
El sistema muestra serios inconvenientes en aspectos esenciales, las clases ya existentes sufren problemas y los botones no funcionan correctamente. El buscador no genero ningun problema, pero evaluando de manera general el sistema necesita cambios
para funcionar de la manera esperada.

**Estado de calidad:**  
- **Aceptable en funcionalidad parcial (buscador).**  
- **Requiere mejoras en funcionalidades principales (botones, clases).**  

---

## **Reflexión**

### **Detalle del Trabajo Individual**
| Fecha       | Actividad                         | Horas | Responsable       |
|-------------|-----------------------------------|-------|-------------------|
| 2/12/2024   | Ejecución de pruebas exploratorias| 0:20  | Joaquin Larronda  |
| 2/12/2024   | Documentación de issues           | 0:10  | Joaquin Larronda  |

**Totales de esfuerzo:** 30 minutos.  

---

### **Técnicas Aplicadas y Aprendizajes**
**Técnicas aplicadas:**  
1. Testing exploratorio: Sesión breve con enfoque en detección de defectos funcionales.  
2. Evaluación heurística: Validación basada en criterios esperados de funcionalidad básica.  

**Aprendizajes:**  
- Identificar el impacto de los defectos en la experiencia del usuario.  
- Documentar issues de manera clara para facilitar su priorización y resolución.  
- La planificación y asignación del tiempo es clave para sesiones cortas de testing.  
