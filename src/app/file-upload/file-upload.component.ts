import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  imageURL: string;
  uploadForm: FormGroup;
  nombreImagen: string;
  URL = 'http://127.0.0.1:5004/identificar/';
  datos: any;
  constructor(public fb: FormBuilder, public http: HttpClient) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
  }

  ngOnInit(): void { }


  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.nombreImagen = file.name;
    console.log(this.nombreImagen);
    this.uploadForm.patchValue({
      avatar: file,
    });
    this.uploadForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  subirImagen() {
    this.http.get(this.URL + this.nombreImagen).subscribe(data => {
      console.log(data);
      this.datos = data;
    }, error => {
      console.log(error);
    });
  }
  // Submit Form
  submit() {
    console.log(this.uploadForm.value);
    this.subirImagen();
  }

}
