import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuLateralComponent } from './Components/menu-lateral/menu-lateral.component';
//import { ClienteComponent } from './Components/cliente/cliente.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { ComprasComponent } from './Components/compras/compras.component';
import { EgresosComponent } from './Components/egresos/egresos.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { PlatilloComponent } from './Components/platillo/platillo.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { PlatilloXFacturaComponent } from './Components/platillo-xfactura/platillo-xfactura.component';
import { InventarioPlatilloComponent } from './Components/inventario-platillo/inventario-platillo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    //ClienteComponent,
    PersonaComponent,
    FacturaComponent,
    PedidoComponent,
    ProveedorComponent,
    ComprasComponent,
    EgresosComponent,
    ProductoComponent,
    InventarioComponent,
    PlatilloComponent,
    UsuarioComponent,
    PlatilloXFacturaComponent,
    InventarioPlatilloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
