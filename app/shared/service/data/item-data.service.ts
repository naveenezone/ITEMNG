import { Injectable } from '@angular/core';
import { Item } from '../../model/item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthService } from '../auth/basic-auth.service';
import { API_URL } from '../../../app.constants';
@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  public item: Item;
  private username = this.authService.getAuthenticatedUser();
  

  // private items: Item [] = [
  //   { id: 1, title: 'Item1', amount: 1},
  //   { id: 2, title: 'Item2', amount: 2},
  //   { id: 3, title: 'Item3', amount: 3},
  //   { id: 4, title: 'Item4', amount: 4},
  //   { id: 5, title: 'Item5', amount: 5},

  // ];

  constructor(private http: HttpClient, private authService: BasicAuthService) { }

  // getItems() {
  //   return this.items;
  // }

  getItems(username) {
   
    
    
    // return this.http.get<Item[]>(`${API_URL}/users/${username}/items`)
    return this.http.get<Item[]>(`${API_URL}/users/${username}/items`);
  }

  getItem(id: number) {
    return this.http.get<Item>(`${API_URL}/users/{username}/items/${id}`)
  }

  deleteItem(id : number) {
    return this.http.delete(`${API_URL}/users/{username}/items/${id}`)
  }

  updateItem(username: string ,id : number, item) {
    return this.http.put<Item>(`${API_URL}/users/{username}/items/${id}`, item)
  }

  createItem(username: string , item) {
    // console.log(`createItem: ${username }`);
    // console.log(item);
    return this.http.post<Item>(`${API_URL}/users/${username}/items`, item)
  }

}
