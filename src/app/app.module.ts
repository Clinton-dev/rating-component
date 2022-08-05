import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RatingComponent } from './rating/rating.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const appRoutes: Routes = [
  { path: '', component: RatingComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: '**', component: RatingComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RatingComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
