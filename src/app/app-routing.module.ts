import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
{path:'', component:AboutComponent},
{path:'aboutlink', component:AboutComponent},
{path:'resumelink', component:ResumeComponent},
{path:'portfoliolink', component:PortfolioComponent},
{path:'projectlink', component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
