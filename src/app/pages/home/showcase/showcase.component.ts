import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {

  @Input() items: any[]=[

    {
      name: 'camera',
      img: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 899
    },
    {
      name: 'shoe',
      img: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 79
    },
    {
      name: 'perfume',
      img: 'https://images.pexels.com/photos/2814832/pexels-photo-2814832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 79
    }
  ];


}
