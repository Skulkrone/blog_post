import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor ut velit at gravida. Aliquam non commodo ipsum. Nunc convallis sodales gravida.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor ut velit at gravida. Aliquam non commodo ipsum. Nunc convallis sodales gravida.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor ut velit at gravida. Aliquam non commodo ipsum. Nunc convallis sodales gravida. Pellentesque lorem diam, dictum vitae condimentum a, mattis vel neque. Ut a ultrices sapien. Nulla a metus id purus egestas fringilla.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

   constructor() {
   }

   ngOnInit() {
   }
}
