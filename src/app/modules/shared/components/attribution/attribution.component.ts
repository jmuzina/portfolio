import { Component } from '@angular/core';
import { IAttributedResource } from 'src/app/interfaces/attributed-resource.interface';


@Component({
  selector: 'jm-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.scss'],
})
export class AttributionComponent {
  public attributedResources: IAttributedResource[] = [
    {
      label: {
        text: 'Cog Icon',
        link: 'https://www.flaticon.com/free-icon/cog-wheel_6687755',
      },
      usage: 'DevOps skill icon',
      author: {
        text: 'Graphix Dxiners',
        link: 'https://www.flaticon.com/authors/graphix-dxinerz',
      },
    },
  ];
}
