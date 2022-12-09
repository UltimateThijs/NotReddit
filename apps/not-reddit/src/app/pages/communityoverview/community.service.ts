import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommunity, IPost, IUser } from '@not-reddit/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../envorinments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  constructor(private httpClient: HttpClient) {}

  getCommunities(): Observable<ICommunity[]> {
    console.log('getCommunities aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<ICommunity[]>(
      `${environment.API_URL}/data-api/community`,
    // `http://localhost:3333/api/data-api/community`,
      {
        headers: headers,
      }
    );
  }
  getCommunityById(id: string): Observable<ICommunity> {
    console.log('getCommunityById aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<ICommunity>(
        `${environment.API_URL}/data-api/community/$id`,
    // `http://localhost:3333/api/data-api/community/$id`,
      {
        headers: headers,
      }
    );
  }
  addCommunity(community: ICommunity) {
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.post<ICommunity>(
        `${environment.API_URL}/data-api/community`,
    // `http://localhost:3333/api/data-api/community`,
      community,
      {
        headers: headers,
      }
    );
  }
  updateCommunity(community: ICommunity): Observable<ICommunity> {
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.put<ICommunity>(
        `${environment.API_URL}/data-api/community/${community.id}`,
    // `http://localhost:3333/api/data-api/community/${community.id} `,
      community,
      {
        headers: headers,
      }
    );
  }
  getCommunityByIdAsObservable(id: string): Observable<ICommunity> {
    console.log('getCommunityByIdAsObservable aangeroepen');
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<ICommunity>(
        `${environment.API_URL}/data-api/community/${id}`,
    //   `http://localhost:3333/api/data-api/community/${id}`,
      {
        headers: headers,
      }
    );
  }
  getPosts(): Observable<IPost[]> {
    console.log('getPosts aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IPost[]>(
      `${environment.API_URL}/data-api/post`,
    // `http://localhost:3333/api/data-api/post`,
      {
        headers: headers,
      }
    );
  }
}