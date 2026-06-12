---
title: "Control de Posicion de Motor de Corriente Continua- Control PID"
date: 2025-01-01 00:00:00 -0300
categories: [Control Systems, Embedded]
tags: [matlab, state-space, pid, motor-control]
image:
  path: /assets/img/posts/DC-Motor/Respuesta_Mixta _1.png  # Acá va la ruta a una imagen linda de tu proyecto
  alt: Gráfico de respuesta del sistema
---

## Overview

Este proyecto consistió en el desarrollo integral de un sistema de control de lazo cerrado para la posición angular de un motor de corriente continua, ideal para aplicaciones en cinemática de brazos robóticos o automatización industrial[cite: 1].

A continuación, presento un resumen de la metodología de diseño, la sintonización analítica y la simulación numérica del sistema.

### Diseño y Hardware Modelado
Para garantizar que la simulación reflejara un entorno físico real, el modelo se basó en los parámetros extraídos de las hojas de datos de componentes industriales:
* **Actuador:** Motor DC Maxon RE25-20W con una capacidad nominal de 24V[cite: 1].
* **Transmisión:** Se acopló una caja reductora con relación de transmisión $N=10$, calculando la inercia total equivalente del sistema[cite: 1].
* **Sensor:** La realimentación se simuló utilizando las características del decodificador óptico de posición Omron E6B2-CWZ6C (1024 pulsos por revolución)[cite: 1].
###  Modelado Matemático y Control
El comportamiento electromecánico se modeló partiendo de las leyes de Kirchhoff y de la segunda ley de Newton para la rotación[cite: 1]. 
1. **Sintonización del PID:** Se calculó la función de transferencia a lazo cerrado y se aplicó el método de asignación de polos[cite: 1]. Para asegurar un sistema rápido y estable, se fijó un coeficiente de amortiguamiento de $\zeta=1,2$ y un tiempo de asentamiento de $t_s=0,5s$, obteniendo las constantes óptimas ($k_p$, $k_i$, $k_d$)[cite: 1].
2. **Espacio de Estados:** Para el procesamiento computacional, se transformaron las ecuaciones diferenciales en una representación matricial de estado de la forma $\dot{x} = Ax + Bu$[cite: 1].
###  Simulación del Entorno en MATLAB
El motor de simulación fue programado íntegramente en MATLAB[cite: 1]. 
* **Método Numérico:** Se implementó un algoritmo de **Runge-Kutta de orden 2 (RK2)** para resolver el sistema matricial paso a paso[cite: 1].
* **Robustez:** Para evitar inestabilidades originadas por escalones puros (*kick derivativo*), se programó un filtro de saturación que limitó la señal de control a un rango operativo estricto de $\pm 24V$[cite: 1].
###  Resultados Obtenidos
Se evaluó el comportamiento del controlador frente a diferentes exigencias (entradas tipo escalón, rampa y trayectorias mixtas)[cite: 1]. El sistema logró estabilizar la posición deseada en menos de 1 segundo en todos los escenarios, demostrando excelente seguimiento y un error en estado estacionario prácticamente nulo[cite: 1].
** Documentación Completa**
Para revisar el desarrollo algebraico detallado, el código completo del script en Python y las gráficas completas de respuesta del sistema, podés consultar el documento técnico original:

[ Ver Informe Técnico Completo (PDF)](/assets/pdf/Informe Sistemas de Automatizacion.pdf)