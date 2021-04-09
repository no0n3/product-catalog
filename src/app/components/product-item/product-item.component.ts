import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  showModal() {
    this.modalService.open(this.product)
  }
}
