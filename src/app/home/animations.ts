import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*', style({ transform: 'translateX(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
    ]),
    transition('* => void',
      animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
        transform: 'translateX(100%)',
        opacity: 0
      }))
    )
  ]);
