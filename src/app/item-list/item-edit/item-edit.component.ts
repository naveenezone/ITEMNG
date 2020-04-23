import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/item.model';
import { ItemDataService } from 'src/app/shared/service/data/item-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicAuthService } from 'src/app/shared/service/auth/basic-auth.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  private username = this.authService.getAuthenticatedUser();
  id: number;
  item: Item;

  constructor(private itemDataService: ItemDataService, private route: ActivatedRoute, private router: Router, private authService: BasicAuthService) { }

  // ngOnInit() {
  //   this.id = this.route.snapshot.params['id'];
  //   this.itemDataService.getItem(this.id).subscribe(
  //     data => {
  //       this.item = data
  //       // console.log(this.item);
  //     }
  //   );
  // }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.item = { id: this.id, title: '', amount: 0 }

    if (this.id != -1) {
      this.itemDataService.getItem(this.id).subscribe(
        data => {
          this.item = data
          // console.log(this.item);
        }
      );
    }
  }

  // UpdateItem() {
  //   this.itemDataService.updateItem('sam', this.id, this.item).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.router.navigate(['items']);
  //     }
  //   )
  // }

  saveItem() {
    if (this.id == -1) {
      this.itemDataService.createItem(this.username, this.item).subscribe(
        data => {
          //        console.log(`Test-New-data-1: ${data}`)
          this.router.navigate(['items']);
        }
      );
    }
    else {
      this.itemDataService.updateItem(this.username, this.id, this.item).subscribe(
        data => {
          // console.log(data)
          this.router.navigate(['items']);
        }
      )
    }
  }


}
