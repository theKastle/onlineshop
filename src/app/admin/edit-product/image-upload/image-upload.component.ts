import { Product } from './../../../core/models/product';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { ImageService } from './../../../core/services/image.service';
import { FileItem } from './../../../core/models/fileItem';
import { Component, Output, Input, SimpleChanges } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  isEnabledUpload: boolean = true;
  files: Array<FileItem> = [];
  @Input() productId;
  @Input() currentImageUrl;

  constructor(public uploadImagesService: ImageService,
    private af: AngularFire,
    private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['currentImageUrl']) {
      this.currentImageUrl = changes['currentImageUrl'].currentValue;
    }
  }

  upload() {
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      console.log(selectedFile);
      this.files.push(new FileItem(selectedFile))
    }

    this.isEnabledUpload = false;
    this.uploadImagesService.uploadImagesToFirebase(this.files, this.productId);
  }

  clearFiles() {
    this.files = [];
    this.isEnabledUpload = true;
  }
}