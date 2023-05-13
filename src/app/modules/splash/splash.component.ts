import { Component } from '@angular/core';
import { FadeIn } from 'src/app/constants/animation.constants';

@Component({
  selector: 'jm-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  animations: [FadeIn(150, true)],
})
export class SplashComponent {

}
