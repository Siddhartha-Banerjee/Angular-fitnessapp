import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppreviewService {
	
	url='http://localhost:3000/posts'

  constructor(private http:HttpClient) {}

  saverev(data:any)
  {
  	return this.http.post(this.url,data)
  }
  getrev()
  {
  	return this.http.get(this.url)
  }

}
