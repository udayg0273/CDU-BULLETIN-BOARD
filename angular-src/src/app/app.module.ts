import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { ListviewComponent } from './components/listview/listview.component';
import { PostviewComponent } from './components/postview/postview.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { OwlModule } from 'ngx-owl-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MyadsComponent } from './components/myads/myads.component';
import { ReportedadsComponent } from './components/reportedads/reportedads.component';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    GridviewComponent,
    ListviewComponent,
    PostviewComponent,
    SearchbarComponent,
    MyadsComponent,
    ReportedadsComponent,
  ],
  imports: [
    NgImageSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    OwlModule,
    MDBBootstrapModule.forRoot(),
    FilterPipeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
