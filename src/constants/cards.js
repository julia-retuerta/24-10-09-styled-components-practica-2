import { v4 } from 'uuid';

export const CARDS = [
  {
    id: v4(),
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    borderColor: '#44D3D2',
    src: 'assets/images/icon-supervisor.svg',
    alt: 'Supervisor Icon'
  },
  {
    id: v4(),
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    borderColor: '#EA5454',
    src: 'assets/images/icon-team-builder.svg',
    alt: 'Team Builder Icon'
  },
  {
    id: v4(),
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    borderColor: '#FCAE4A',
    src: 'assets/images/icon-karma.svg',
    alt: 'Karma Icon'
  },
  {
    id: v4(),
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    borderColor: '#549EF2',
    src: 'assets/images/icon-calculator.svg',
    alt: 'Calculator Icon'
  }
];
