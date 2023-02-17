import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeFieldComponent } from './components/attribute-field/attribute-field.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  { path: '', redirectTo: 'field', pathMatch: 'full' },
  { path: 'field', component: AttributeFieldComponent },
  { path: 'colors', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
