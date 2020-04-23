import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/item.model';
import { ItemDataService } from '../shared/service/data/item-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public items: Item[];
  // private items: Item [];
  private mesgResgetItem;
  private mesgErrResgetItems: string;
  private mesgErrResdelItem: string;
  public mesgdelete: any;

  constructor(private itemDataService: ItemDataService, private router: Router) { }

  // ngOnInit(): void {
  //   this.items=this.itemDataService.getItems();
  // }

  ngOnInit() {
    // console.log(this.itemDataService.getItems('sam')); 
    //  this.itemDataService.getItems('sam').subscribe(response => {
    // console.log(`response- `);
    // console.log(response); 
    // this.items = response
    // }
    // );
    this.refreshItems();
  }

  errResdelItem(error) {
    this.mesgErrResdelItem = "Error Occcured while deleting in API";
  }

  errResgetItems(error) {
    this.mesgErrResgetItems = "Error Occcured in API";
  }

  addItem() {
    // console.log(`AddItem`);
    this.router.navigate(['items', -1, 'new']);
  }
  

  deleteItem(id) {
    // console.log(`deleteItem ${id}`);

    this.itemDataService.deleteItem(id).subscribe(response => {
      this.mesgResgetItem = response;
      console.log(this.mesgResgetItem);
      this.mesgdelete = `Delete of Item ${id} - '${this.mesgResgetItem.title}' successfull!`
      this.refreshItems();

    },
      error => {
        this.errResdelItem(error);
      }
    );

  }

  refreshItems() {
    this.itemDataService.getItems('sam').subscribe(response => {
      this.items = response
    },
      error => {
        this.errResgetItems(error)
      }
    );
  }

}
