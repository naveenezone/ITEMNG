import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/item.model';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from 'src/app/shared/service/data/item-data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public item: Item;

  constructor(private itemDataService: ItemDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.itemDataService.getItem(id).subscribe(
      response => {
        this.item = response
      }
    );
  }



}
