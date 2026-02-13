
import React from 'react';
import { Project, Value } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'smart-home',
    title: 'ESP32 Smart Home',
    description: 'Několik zařízení pro integraci v Home Assistant zajišťující monitoring prostředí a automatizaci domácích úloh s webovým rozhraním.',
    technologies: ['C++', 'MQTT', 'WebSockets', 'Zigbee', 'Home Assistant'],
    learning: 'Práce s protokoly pro IoT zařízení a optimalizace kódu.',
    link: 'https://github.com/martiinek/'
  },
{
    id: 'drone',
    title: 'Dron',
    description: 'Dron s dálkovým ovladáním a vlastní řídicí jednotka pro kvadrokoptéru postavená na ESP32, využívající PID regulaci a FreeRTOS pro paralelní zpracování letových dat.',
    technologies: ['C++', 'ESP32', 'FreeRTOS', 'PID Control', 'NRF24L01', 'Bluetooth'],
    learning: 'Implementace PID regulace v reálném čase a správa úloh v RTOS prostředí. Pochopení důležitosti eliminace šumu ze senzorů (IMU, Barometr) pro stabilní let.',
    link: 'https://github.com/martiinek/ESP32-Drone-Flight-Controller'
  },
{
    id: 'autonomous-mapping-car',
    title: 'Autonomní mapovací vozítko',
    description: 'Robotický systém kombinující Raspberry Pi a Arduino pro autonomní navigaci, detekci překážek pomocí Computer Vision a tvorbu 2D map prostor v reálném čase.',
    technologies: ['Python', 'C++', 'Raspberry Pi', 'Arduino', 'UART', 'Computer Vision'],
    learning: 'Klíčem je efektivní komunikace mezi procesory a optimalizace zpracování dat z enkodérů.',
    link: 'https://github.com/martiinek/ArduPi-Car'
  }
];

export const VALUES: Value[] = [
  {
    title: 'Open Source',
    description: 'Sdílení znalostí urychluje technologický posun. Věřím v kód, který je transparentní.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    title: 'Automation',
    description: 'Největší motivací je pro mě vlastní potřeba. Navrhuji řešení, která mi v reálném životě šetří čas nebo usnadňují práci.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Meaning of life',
    description: 'Věřím, že smyslem života je tvořit. Být tvůrcem pro mě znamená neustále formovat svět kolem sebe skrze kód, hardware a inovace.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
  }
];
