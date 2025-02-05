```markdown
# API de Gestión de Incidencias y Países 🌍

API REST para gestionar incidencias, países, y con integración de autenticación JWT y CAPTCHA. Incluye una interfaz web para probar endpoints.

## Características ✨
- **Autenticación JWT** para seguridad
- **CAPTCHA** para prevenir bots
- **Rate Limiting** para control de solicitudes
- **CRUD de Incidencias** con validaciones
- **Listado de Países** con códigos y banderas
- **Interfaz Web Integrada** para pruebas

## Tecnologías 🛠️
- **Node.js** (Express)
- **MySQL** (Base de datos)
- **JWT** (Autenticación)
- **SVG Captcha**
- **Crypto-js** (Hashing)

---

## Instalación 🚀

### Requisitos
- Node.js v18+
- MySQL
- Git (opcional)

### Pasos
1. **Clonar repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/api-incidencias.git
   cd api-incidencias
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar base de datos**:
   ```sql
   CREATE DATABASE api_rest;
   USE api_rest;
   
   CREATE TABLE paises (
     id INT PRIMARY KEY,
     codigo_telefono VARCHAR(10),
     abreviatura_pais VARCHAR(2),
     nombre_pais VARCHAR(100),
     flag TEXT
   );
   
   CREATE TABLE incidents (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     phone VARCHAR(20),
     type_incident_id INT NOT NULL,
     image_incident TEXT,
     date_incident DATE NOT NULL,
     description TEXT NOT NULL,
     isauthorized BOOLEAN NOT NULL
   );
   ```

4. **Variables de entorno** (crear `.env`):
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=api_rest
   JWT_SECRET=mi_clave_secreta_ultra_segura
   CAPTCHA_SECRET=tu_super_secreto_unico
   ```

5. **Insertar países**:
   ```bash
   node src/scripts/seedCountries.js
   ```

6. **Iniciar servidor**:
   ```bash
   npm run dev
   ```

---

## Endpoints 🔌

### Autenticación
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET`  | `/api/token/generate` | Genera token JWT válido por 30 minutos |

### CAPTCHA
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET`  | `/api/captcha/captcha` | Obtiene imagen CAPTCHA y hash |
| `POST` | `/api/captcha/validate` | Valida el CAPTCHA ingresado |

### Países
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET`  | `/api/paises` | Lista todos los países ordenados |

### Incidencias
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET`  | `/api/forms/incidents` | Lista todas las incidencias |
| `POST` | `/api/forms/incidents` | Crea nueva incidencia |

---

## Uso de la Interfaz Web 🖥️
Accede a `http://localhost:4000` para:
- Generar y validar CAPTCHA
- Obtener token JWT
- Listar países y crear incidencias
- Ver respuestas en formato JSON formateado

![Interfaz Web](https://i.imgur.com/5X6zKQl.png)

---

## Ejemplo de Solicitud 📮
```bash
# Obtener países
curl http://localhost:4000/api/paises

# Crear incidencia (requiere token)
curl -X POST -H "Authorization: Bearer TU_TOKEN" -H "Content-Type: application/json" \
-d '{
  "name": "Ejemplo",
  "email": "test@example.com",
  "captchaText": "ABCDE",
  "captchaHash": "hash_obtenido_del_captcha"
}' \
http://localhost:4000/api/forms/incidents
```

---

## Contribución 🤝
1. Haz fork del proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcion`)
3. Commit cambios (`git commit -am 'Agrega nueva función'`)
4. Push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

---

## Licencia 📄
MIT License - Ver [LICENSE](LICENSE) para más detalles.
```