import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';


import { HeartComponent } from './components/heart/heart.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AdultDirective } from './directives/adult.directive';
import { AgeRestrictionComponent } from './components/age-restriction/age-restriction.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CoreModule } from './core/core.module';
import { RxjsComponent } from './components/rxjs/rxjs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    CustomDirectivesComponent,
    HighlightDirective,
    AdultDirective,
    AgeRestrictionComponent,
    PipeComponent,
    SummaryPipe,
    HomePageComponent,
    NotFoundComponent,
    ServicesComponent,
    AccordionComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
