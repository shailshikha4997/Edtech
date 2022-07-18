import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentnotfoundComponent } from './domain/contentnotfound/contentnotfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./domain/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./domain/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./domain/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./domain/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./domain/video/video.module').then((m) => m.VideoModule),
  },
  { path: 'sidebar', component: SidebarComponent },
  { path: '**', component: ContentnotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
