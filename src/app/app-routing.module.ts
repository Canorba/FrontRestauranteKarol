import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './Components/compras/compras.component';
import { EgresosComponent } from './Components/egresos/egresos.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { PlatilloComponent } from './Components/platillo/platillo.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { HomeComponent } from './Components/home/home.component';

// Rutas de navegacion
const routes: Routes = [
{path:'', redirectTo: '/Home', pathMatch: 'full' } ,
{path:'Home',component: HomeComponent } ,
{path:'Compras',component: ComprasComponent} ,
{path:'Egresos',component: EgresosComponent},
{path:'Factura',component: FacturaComponent},
{path:'Inventario',component: InventarioComponent},
{path:'Pedido',component: PedidoComponent},
{path:'Persona',component: PersonaComponent},
{path:'Platillo',component: PlatilloComponent},
{path:'Producto',component: ProductoComponent},
{path:'Proveedor',component: ProveedorComponent},
{path:'Usuario',component: UsuarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
