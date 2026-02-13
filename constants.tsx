
import React from 'react';
import { Project, Value } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'rc-plane',
    title: 'RC Letadlo (3D Tisk)',
    description: 'Plně funkční dálkově ovládané letadlo navržené pro aerodynamickou efektivitu a nízkou hmotnost.',
    technologies: ['Fusion 360', '3D Tisk (PLA)', 'Radio Control', 'Aeronautika'],
    learning: 'Pochopil jsem limity aditivní výroby v tlaku vs. tahu a základy stabilizačních algoritmů.',
    link: 'https://github.com/martinpustka/rc-plane-3d'
  },
  {
    id: 'pet-filament',
    title: 'Filament Maker z PET lahví',
    description: 'Recyklační stanice, která transformuje odpadní PET lahve na použitelný tiskový materiál.',
    technologies: ['PID Regulace', 'Mechanický převod', 'Termodynamika', 'Arduino'],
    learning: 'Hardware je špinavý. Tolerance jsou v reálném světě mnohem důležitější než v CADu.',
    link: 'https://github.com/martinpustka/pet-recycler'
  },
  {
    id: 'esp32-iot',
    title: 'ESP32 Smart Home Hub',
    description: 'Centralizovaný uzel pro monitoring prostředí a automatizaci osvětlení s lokálním webovým rozhraním.',
    technologies: ['C++', 'MQTT', 'WebSockets', 'FreeRTOS'],
    learning: 'Event-driven architektura je klíčem k responsivnímu IoT. Naučil jsem se pracovat s asynchronními požadavky.',
    link: 'https://github.com/martinpustka/esp32-smarthome'
  },
  {
    id: 'autonomous-rpi',
    title: 'Autonomní vozítko s RPi',
    description: 'Platforma využívající Computer Vision pro navigaci v interiéru bez lidského zásahu.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Motor Controllers'],
    learning: 'Zpoždění (latency) je největší nepřítel autonomie. Optimalizace kódu pro realtime zpracování je nutnost.',
    link: 'https://github.com/martinpustka/rpi-autonome-car'
  },
  {
    id: 'stm32-embedded',
    title: 'STM32 Audio Procesor',
    description: 'Nízkoúrovňový zpracování signálu pro audio efekty v reálném čase.',
    technologies: ['STM32 (C)', 'Bare Metal', 'DMA', 'I2S'],
    learning: 'Přímý přístup do paměti (DMA) dramaticky snižuje zátěž CPU. Pochopení hardwarových registrů.',
    link: 'https://github.com/martinpustka/stm32-audio-dsp'
  }
];

export const VALUES: Value[] = [
  {
    title: 'Open Source',
    description: 'Sdílení znalostí je zrychlovač civilizace. Věřím v kód, který je transparentní a auditovatelný.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    title: 'Long-term Thinking',
    description: 'Nestavím rychlá řešení. Zajímá mě architektura, která vydrží a systémy, které jsou škálovatelné.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Builder Mindset',
    description: 'Teorie je prázdná bez implementace. Učím se tím, že věci rozebírám a znovu skládám.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  }
];
