import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatSlideToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule, 
        ReactiveFormsModule,
        MatToolbarModule, 
        MatIconModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
