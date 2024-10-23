import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TableModule } from 'primeng/table';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [SidebarModule, RouterModule, CardModule, SidebarComponent,TableModule,],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  products!: Producto[];

  constructor(private productService: ProductoService) {}

  ngOnInit() {
      
      
  }
}
