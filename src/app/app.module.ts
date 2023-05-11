import { NgModule } from '@angular/core';
import {MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuLateralComponent } from './Components/menu-lateral/menu-lateral.component';
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
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './Components/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { BotonComponent } from './Components/boton/boton.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableTemplateComponent } from './Components/TableTemplate/table-template.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormularioComprasComponent } from './Forms/formulario-compras/formulario-compras.component';
import { FormularioEgresosComponent } from './Forms/formulario-egresos/formulario-egresos.component';
import { FormularioFacturaComponent } from './Forms/formulario-factura/formulario-factura.component';
import { FormularioInventarioComponent } from './Forms/formulario-inventario/formulario-inventario.component';
import { FormularioPedidoComponent } from './Forms/formulario-pedido/formulario-pedido.component';
import { FormularioPersonaComponent } from './Forms/formulario-persona/formulario-persona.component';
import { FormularioPlatilloComponent } from './Forms/formulario-platillo/formulario-platillo.component';
import { FormularioProductoComponent } from './Forms/formulario-producto/formulario-producto.component';
import { FormularioProveedorComponent } from './Forms/formulario-proveedor/formulario-proveedor.component';
import { FormularioUsuarioComponent } from './Forms/formulario-usuario/formulario-usuario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
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
    HomeComponent,
    TableTemplateComponent,
    BotonComponent,
    FormularioComprasComponent,
    FormularioEgresosComponent,
    FormularioFacturaComponent,
    FormularioInventarioComponent,
    FormularioPedidoComponent,
    FormularioPersonaComponent,
    FormularioPlatilloComponent,
    FormularioProductoComponent,
    FormularioProveedorComponent,
    FormularioUsuarioComponent,
    LoginComponent,
   

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
    MatListModule,
    MatSortModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
