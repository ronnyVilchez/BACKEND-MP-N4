-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-08-2024 a las 05:27:04
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mpfyb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `biography` text DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `biography`, `phone`, `email`, `password`, `photo`) VALUES
(30, 'Britanni Britt', 'Porro dolore cumque Porro dolore cumque Porro dolore cumque Porro dolore cumque Porro dolore cumque Porro dolore cumque Porro dolore cumque Porro dolore cumque  ', '+1 (554) 618-8063', 'funval@gmail.com', '$2b$10$JJt9DM0gc7j09Nn5j9gVDOi2AhiBzWBQsYTAfXb5i0mVtFXFn7cCG', '1723776636756-77991931-lindo-y-tierno-perro-kawaii-estilo-ilustraciÃ³n-vectorial-diseÃ±o.jpg'),
(31, 'Eaton Walker', 'Voluptatem quibusdam', '+1 (134) 287-9687', 'lexeboxof@mailinator.com', '$2b$10$GjGXuMTESu4bRVMoyyj/2OYM7xP2lRfzTP6/TGZ0IOJgSfEdXyZSy', '1723777936284-c6640207cb0fdb14cbb0a4bbc5b0ca3d.jpg'),
(32, NULL, NULL, NULL, 'prueba3@gmail.com', '$2b$10$csKdAPNj1giW3WjpTWwH4.FuSbGVyODMMGuWbpECgMJjyNWXEaP8q', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
