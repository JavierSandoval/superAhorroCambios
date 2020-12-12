import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'

@NgModule ({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports:[
        NavbarComponent,
        FooterComponent
    ]
})
export class LayoutModule {}

