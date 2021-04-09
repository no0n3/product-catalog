import { Component, OnInit } from '@angular/core';
import { MobileDeviceProduct } from 'src/app/models/mobile-device-product';
import { Product } from 'src/app/models/product';
import { SoftwareProduct } from 'src/app/models/software-product';
import { FashionProduct } from 'src/app/models/fashion-product';
import { ModalService } from 'src/app/services/modal.service';

interface Field {
  label: string;
  name: string|number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public product: Product
  public show: boolean

  constructor(private modalService: ModalService) {
    modalService.modalSubject$
      .subscribe((product: Product) => {
        this.product = product
        this.show = true
      })
  }

  ngOnInit(): void {
  }

  productFields() {
    const fields: Field[] = [
      { label: 'Name', name: this.product.name },
      { label: 'Price', name: `$${this.product.price}` },
      { label: 'Description', name: this.product.description },
      { label: 'Type', name: this.product.type() }
    ]

    if (this.product instanceof SoftwareProduct) {
      const product = <SoftwareProduct> this.product
      fields.push({ label: 'Operating System', name: product.operating_system })
    } else if (this.product instanceof MobileDeviceProduct) {
      const product = <MobileDeviceProduct> this.product
      fields.push({ label: 'Processor', name: product.processor })
      fields.push({ label: 'Battery', name: product.battery })
    } else if (this.product instanceof FashionProduct) {
      const product = <FashionProduct> this.product
      fields.push({ label: 'Size', name: product.size })
      fields.push({ label: 'Color', name: product.color })
    }

    return fields
  }

  close() {
    this.show = false
  }

}
