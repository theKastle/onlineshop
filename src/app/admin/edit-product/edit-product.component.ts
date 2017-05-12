import { FileItem } from './../../core/models/fileItem';
import { ImageService } from './../../core/services/image.service';
import { Product } from './../../core/models/product';
import { ProductsService } from './../../core/services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { FirebaseObjectObservable, FirebaseListObservable } from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  dataArrived: boolean = false;
  new: boolean = false;
  errorMessage: string;
  item: FirebaseObjectObservable<any>
  imageUrl: string;
  product: any;
  isEnabledUpload: boolean = true;
  files: Array<FileItem> = [];
  image: FirebaseListObservable<any[]>
  form: FormGroup
  private validationMessages: { [key: string]: { [key: string]: string } };

  private sub: Subscription
  // private sub2: Subscription
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductsService,
    private imageService: ImageService) {
  }

  ngOnInit() {
    this.createFrom()

    // this.sub2 = this.route.data.subscribe(data => {
    //   console.log('DATA', data)
    //   this.new = data.new
    // })

    this.sub = this.route.params.subscribe(
      params => {
        console.log('Params', params)
        let id = params['id'];
        console.log('ID ', id)
        let p: Product = Object.assign({}, this.form.value)
        let newRef = firebase.database().ref().child('products')
        let nnref;
        if (!id) {
          console.log('HERERE = ', id)
          nnref = newRef.push()
          nnref.set({})
          id = nnref.key
          console.log('HERERsdfadsfE = ', id)
        }
        this.item = this.productService.getProduct(id)
        this.item.subscribe(
          e => {
            console.log('GET = ', e)
            this.onProductRetrieved(e)
          }
        )

      }
    )
  }

  save() {
    let p: Product = Object.assign({}, this.product, this.form.value)
    console.log('Saved = ', p)
    this.item.update(p)
    this.onSaveComplete()
  }

  delete() {
    const key = this.product.$key
    console.log('DELETE ',key)
    this.productService.getData().remove(key)
    this.onSaveComplete()
  }

  onProductRetrieved(product: Product) {
    this.dataArrived = true;
    if (this.form) {
      this.form.reset()
    }

    this.product = product;
    this.imageUrl = product.imageUrl;

    this.form.patchValue({
      name: this.product.name,
      category: this.product.category,
      price: this.product.price,
      description: this.product.description,
      imageUrl: this.product.imageUrl
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  createFrom() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['']
    })
  }

  upload() {
    console.log('up')
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      this.files.push(new FileItem(selectedFile))
    }

    this.isEnabledUpload = false;
    this.imageService.uploadImagesToFirebase(this.files, this.product.$key);
  }

  clearFiles() {
    this.files = [];
    this.isEnabledUpload = true;
  }

  onSaveComplete(): void {
        this.router.navigate(['/admin']);
    }
}
