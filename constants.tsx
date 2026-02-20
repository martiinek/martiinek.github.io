
import React from 'react';
import { Project, Value } from './types';
import projectsData from './projects.json';

export const PROJECTS: Project[] = projectsData;

export const VALUES: Value[] = [
  {
    title: 'Open Source',
    description: 'Sdílení znalostí urychluje technologický posun. Věřím v kód, který je transparentní.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    title: 'Motivace',
    description: 'Největší motivací je pro mě vlastní potřeba. Navrhuji řešení, která mi v reálném životě šetří čas nebo usnadňují práci.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Smysl',
    description: 'Věřím, že smyslem života je tvořit. Být tvůrcem pro mě znamená neustále formovat svět kolem sebe skrze kód, hardware a inovace.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
  }
];
