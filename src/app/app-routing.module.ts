import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent} from './blogs/blogs.component';
import { BodyComponent } from './body/body.component';
const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'blogs',component:BlogsComponent},
{path:'about',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[BlogsComponent,BodyComponent]