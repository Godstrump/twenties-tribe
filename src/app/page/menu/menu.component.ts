import { Component, inject, OnInit, signal } from '@angular/core';
import { PathComponent } from '../path/path.component';
import { PageService } from '../page.service';
import { MatIconModule } from '@angular/material/icon';

type IMenu = {
  name: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'tt-menu',
  standalone: true,
  imports: [PathComponent, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  pageService = inject(PageService)
  menus = signal<Array<IMenu>>([]);

  ngOnInit(): void {
    this.menus.set(this.pageService.menus);
  }
}
