import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  menus = [
    { name: 'Mentors', icon: '👩🏽‍🏫', color: '#F6FAFD' },
    { name: 'Events', icon: '🎉', color: '#FFFFF6' },
    { name: 'Coupons', icon: '🎟️', color: '#FEF6F2' },
    { name: 'Courses', icon: '📚', color: '#FCF1F0' },
    { name: 'Jobs', icon: '👨🏽‍💻‍', color: '#F6F4FF' },
  ]

  constructor() { }
}
