import { Routes } from '@angular/router';
import { MiddlePageComponent } from './middle-page/middle-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DisplayEachContactComponent } from './display-each-contact/display-each-contact.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { studentGuardGuard } from './guards/student-guard.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';
import { FormsCombinationComponent } from './forms-combination/forms-combination.component';
import { BehaviorSubjectParentComponent } from './behavior-subject-parent/behavior-subject-parent.component';
import { PipeComponent } from './pipe/pipe.component';


export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: LandingPageComponent},
    {path: '', redirectTo: '', pathMatch:'full'},
    // {path:"display", component: DisplayContactComponent },
    {path:"addContact", component: AddContactComponent },
    {path:'displayOneUser/:index', component: DisplayEachContactComponent},
    {path:'display', children:[
        {path:'', component: DisplayContactComponent},
    ]},

    {path: 'signUp', component: SignUpComponent},
    {path: 'signIn', component: SignInComponent},
    {path: 'service', component: ServiceComponentComponent},
    {path: 'form', component: TemplateDrivenFormComponent},
    {path: 'form2', component: ReactiveDrivenFormComponent},
    {path: 'comForms', component: FormsCombinationComponent},
    {path: 'behavior', component: BehaviorSubjectParentComponent},
    {path: 'pipe', component: PipeComponent},
    {path: 'dashboard', children: [
        {path: '', component: DashboardComponent},
        {path: 'settings', component: SettingsComponent}
    ], canActivate:[studentGuardGuard]},
    {path:"**", component: ErrorPageComponent }
    // {path: 'home', redirectTo: '', pathMatch:'full'},
    // {path: 'addContacts', component: LandingPageComponent},
    // {path:"display/:index", component: DisplayContactComponent },
];
