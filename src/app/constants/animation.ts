// https://medium.com/@teslenkooleg2017/fade-in-out-animations-in-angular-31a80949cd2e


import { AnimationTriggerMetadata, animate, style, transition, trigger } from '@angular/animations';

export function FadeIn(timingIn: number, height = false): AnimationTriggerMetadata  {
  return trigger('fadeIn', [
    transition(':enter', [
      style(height ? { opacity: 0, height: 0 } : { opacity: 0 }),
      animate(timingIn, style(height ? { opacity: 1, height: 'fit-content' } : { opacity: 1 })),
    ]),
  ]);
}
