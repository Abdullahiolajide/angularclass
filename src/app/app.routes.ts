import { Routes } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { EditComponent } from './edit/edit.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentBehavoiurSubjectComponent } from './parent-behavoiur-subject/parent-behavoiur-subject.component';
import { CntBehaviourComponent } from './cnt-behaviour/cnt-behaviour.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NoteAppComponent } from './note-app/note-app.component';
import { ViewNoteContentComponent } from './view-note-content/view-note-content.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { dashboardGuard } from './guard/dashboard.guard';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { EventParentComponent } from './event-parent/event-parent.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { UploadPfpComponent } from './upload-pfp/upload-pfp.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ViewClassmatesComponent } from './view-classmates/view-classmates.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { NoteKeepComponent } from './note-keep/note-keep.component';
import { ViewNoteKeepComponent } from './view-note-keep/view-note-keep.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PipeComponent } from './pipe/pipe.component';
import { MaterialuiComponent } from './materialui/materialui.component';
import { UploadReceiptComponent } from './upload-receipt/upload-receipt.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { StepperComponent } from './stepper/stepper.component';

export const routes: Routes = [
    {path:"", component:LandingPageComponent},
    {path:"home", redirectTo:"", pathMatch:"full"},
    {path:"contact", children:[
        {path:"", component:ContactAppComponent},
        {path:"edit/:id", component:EditComponent},
        {path:"view", component:ViewComponentComponent}
    ]},
    {path:'dashboard', children:[
        {path:'', component:DashboardComponent},
        {path:'profile', children:[
            {path:'', component:ProfileComponent},
            {path:'update_profile', component:UpdateProfileComponent},
        ]}
    ]},
    {path:'parent', component:ParentBehavoiurSubjectComponent},
    {path:'bsubject', component:CntBehaviourComponent},
    {path:'form', component:FormValidationComponent},
    {path:'rform', component:ReactiveFormComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'resetpassword', component:ResetPasswordComponent},
    {path:'eparent', component:EventParentComponent},
    {path:'pipe', component:PipeComponent},
    {path:'material', component:MaterialuiComponent},
    {path:'stepper', component:StepperComponent},
    
    {path:'userDashboard', children:[
        {path:'', component:UserDashboardComponent},
        {path:'registerCourse', component:CourseRegistrationComponent},
        {path:'updatepassword', component:UpdatePasswordComponent},
        {path:'viewcourses', component:ViewCoursesComponent},
        {path:'uploadpfp', component:UploadPfpComponent},
        {path:'pinfo', component:ProfileInfoComponent},
        {path:'viewclassmates', component:ViewClassmatesComponent},
        {path:'uploadreceipt', component:UploadReceiptComponent},
        {path:'notekeep', children:[
            {path:"", component:NoteKeepComponent},
            {path:":id", component:ViewNoteKeepComponent}
        ]},
    ], canActivate:[dashboardGuard]},
    {path:'adminsignup', component:AdminSignUpComponent},
    {path:'adminlogin', component:AdminLoginComponent},
    {path:'admindashboard', children:[
        {path: '',  component:AdminComponent},
        {path: 'receiptapproval', component:AdminApprovalComponent}
    ]},
    {path:'note', children:[
        {path:"", component:NoteAppComponent},
        {path:":id", component:ViewNoteContentComponent}
    ]},
    {path:"**", component:PageNotFoundComponent}
];
