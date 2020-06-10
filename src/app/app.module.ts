import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
