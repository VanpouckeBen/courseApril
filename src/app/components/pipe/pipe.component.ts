import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque dicta. Ullam consectetur soluta voluptates laboriosam cumque rerum enim eveniet ipsa pariatur hic reiciendis, magni suscipit molestias dolor, unde adipisci.
  Temporibus illum aut facilis quis, aspernatur maxime error ea nam accusamus repellat, quam labore sapiente voluptatibus, nostrum dolore laboriosam autem.Doloremque corrupti explicabo numquam magnam animi molestias dolor laboriosam modi?
  Nobis, quia nostrum? Odio nostrum temporibus dignissimos totam quis nam eaque beatae eum.Molestias sapiente repellat magni aut culpa adipisci sit accusantium consequuntur quibusdam porro, ratione deleniti cum corrupti atque!
  Doloribus illum, voluptate impedit temporibus dignissimos repellendus est! Aspernatur, itaque, harum assumenda labore officia cumque hic, minus commodi quis modi consequuntur fugit officiis.Atque culpa quasi obcaecati quidem natus ipsam?
  Eaque quia fugit repellat quasi quibusdam eum accusantium illo similique, magni assumenda quod nobis itaque perspiciatis reiciendis quo maiores omnis natus expedita rerum atque commodi dignissimos.Quod quo magnam atque!`;

  constructor() { }

  ngOnInit(): void {
  }

}
