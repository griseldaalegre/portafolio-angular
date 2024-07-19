import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/pages/projects/projects.component';

//importo el componente que necesito mostar segun sel path que tenga

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    { path: 'home', component: HomeComponent },
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }