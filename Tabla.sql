DROP TABLE IF EXISTS alumnos;
CREATE TABLE IF NOT EXISTS alumnos (
    matricula BIGINT UNSIGNED NOT NULL UNIQUE CHECK(CHAR_LENGTH(matricula)=9),
    PRIMARY KEY (matricula),

    apellido1 VARCHAR(255) NOT NULL,

    apellido2 VARCHAR(255),

    nombres VARCHAR(255) NOT NULL,

    correo VARCHAR(255) NOT NULL,

    fecha_nacimiento DATE NOT NULL


);