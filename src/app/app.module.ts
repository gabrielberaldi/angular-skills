import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule, } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './dashboard/loader/loader.component';
import { FakeApiService } from './fake-api.service';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello.component';
import { SkillService } from './services/skills.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(FakeApiService, { delay: 1 }),
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule
    ],
    declarations: [AppComponent, HelloComponent, DashboardComponent, CardComponent, LoaderComponent, HeaderComponent],
    bootstrap: [AppComponent],
    providers: [SkillService]
})
export class AppModule { }
