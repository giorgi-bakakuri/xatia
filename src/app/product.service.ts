import { Injectable } from '@angular/core';
import { List } from './interface/list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: List[] = [
    {
      id: 1,
      cover: '../../assets/photos/one/one.jpeg',
      picture: ['../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg',
      '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg'],
      title: 'satauri',
      description: 'aghwera',
      price: 'fasi'
    },
    {
      id: 2,
      cover: '../../assets/photos/one/two/one.png',
      picture: ['../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',
      '../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',],
      title: 'satauri 3',
      description: 'aghwera 3',
      price: 'fasi 3'
    },
    {
      id: 1,
      cover: '../../assets/photos/one/one.jpeg',
      picture: ['../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg',
      '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg'],
      title: 'satauri',
      description: 'aghwera',
      price: 'fasi'
    },
    {
      id: 2,
      cover: '../../assets/photos/one/two/one.png',
      picture: ['../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',
      '../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',],
      title: 'satauri 3',
      description: 'aghwera 3',
      price: 'fasi 3'
    },
    {
      id: 1,
      cover: '../../assets/photos/one/one.jpeg',
      picture: ['../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg',
      '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg'],
      title: 'satauri',
      description: 'aghwera',
      price: 'fasi'
    },
    {
      id: 2,
      cover: '../../assets/photos/one/two/one.png',
      picture: ['../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',
      '../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',],
      title: 'satauri 3',
      description: 'aghwera 3',
      price: 'fasi 3'
    },
    {
      id: 1,
      cover: '../../assets/photos/one/one.jpeg',
      picture: ['../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg',
      '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg', '../../assets/photos/one/one.jpeg'],
      title: 'satauri',
      description: 'aghwera',
      price: 'fasi'
    },
    {
      id: 2,
      cover: '../../assets/photos/one/two/one.png',
      picture: ['../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',
      '../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png','../../assets/photos/one/two/one.png',],
      title: 'satauri 3',
      description: 'aghwera 3',
      price: 'fasi 3'
    },
    {
      id: 3,
      cover: '../../assets/photos/one/three/download.jpeg',
      picture: ['../../assets/photos/one/three/download.jpeg','../../assets/photos/one/three/download.jpeg','../../assets/photos/one/three/download.jpeg','../../assets/photos/one/three/download.jpeg',
      '../../assets/photos/one/three/download.jpeg','../../assets/photos/one/three/download.jpeg','../../assets/photos/one/three/download.jpeg','../../assets/photos/one/three/download.jpeg',],
      title: 'satauri 2',
      description: 'aghwera 2',
      price: 'fasi 2'
    }
  ]

}
