import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import {AuthModule} from '././domain/auth/auth.module';
import { DashboardComponent } from './domain/home/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommentComponent } from './domain/comment/comment.component';
import { ContentnotfoundComponent } from './domain/contentnotfound/contentnotfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserModule } from './domain/user/user.module';
import { PostModule } from './domain/post/post.module';
import { CategoryModule } from './domain/category/category.module';
import { VideoModule } from './domain/video/video.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    CommentComponent,
    ContentnotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    PostModule,
    CategoryModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
