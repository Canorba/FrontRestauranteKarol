import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './Components/compras/compras.component';
import { EgresosComponent } from './Components/egresos/egresos.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { InventarioPlatilloComponent } from './Components/inventario-platillo/inventario-platillo.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { PlatilloComponent } from './Components/platillo/platillo.component';
import { PlatilloXFacturaComponent } from './Components/platillo-xfactura/platillo-xfactura.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { HomeComponent } from './Components/home/home.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

// Rutas de navegacion
const routes: Routes = [
{path:'', redirectTo: '/Home', pathMatch: 'full' } ,
{path:'Home',component: HomeComponent } ,
{path:'Compras',component: ComprasComponent} ,
{path:'Egresos',component: EgresosComponent},
{path:'Factura',component: FacturaComponent},
{path:'Inventario',component: InventarioComponent},
{path:'InventarioPlatillo',component: InventarioPlatilloComponent},
{path:'Pedido',component: PedidoComponent},
{path:'Persona',component: PersonaComponent},
{path:'Platillo',component: PlatilloComponent},
{path:'platillo-xfactura',component: PlatilloXFacturaComponent},
{path:'Producto',component: ProductoComponent},
{path:'Proveedor',component: ProveedorComponent},
{path:'Usuario',component: UsuarioComponent},
{path:'Formulario',component: FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
