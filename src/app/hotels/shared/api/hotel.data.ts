import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IAero } from '../models/hotel';

/**
 * Initial data for in memory web api
 *
 * @export
 * @class HotelData
 * @implements {InMemoryDbService}
 */
export class HotelData implements InMemoryDbService {

  createDb(): Record<string, IAero[]> {
    const aeros: IAero[] = [
      {
        id: 1,
        AeroName: 'Casa CN 235',
        description: 'Le CASA CN 235 est un avion de transport militaire. L\'avion peut transporter jusqu\'à 51 passagers ou 5 000 kg de fret, avec une autonomie de vol allant jusqu\'à 2 500 km. Il est équipé de deux moteurs turbopropulseurs qui lui permettent de voler à des vitesses allant jusqu\'à 454 km/h',
        price: 230000,
        imageUrl: 'assets/img/casa.jpeg'
      }, {
        id: 2,
        AeroName: 'King Air BE 20',
        description: 'Le King Air BE 20 est un avion de transport militaire. il est un avion bimoteur turbopropulsé pouvant transporter jusqu\'à 9 passagers et une charge utile allant jusqu\'à 1 800 kg. Il est capable de voler à des vitesses allant jusqu\'à 560 km/h, avec une portée maximale de 3 500 km.',
        price: 600000,
        imageUrl: 'assets/img/king.jpeg'
      }, {
        id: 3,
        AeroName: 'MI 17',
        description: 'Le MI-17 peut transporter jusqu\'à 36 passagers ou une charge utile allant jusqu\'à 4 000 kg. Il est équipé de deux moteurs turboshaft qui lui permettent de voler à des vitesses allant jusqu\'à 250 km/h, avec une portée maximale de 800 km.',
        price: 700000,
        imageUrl: 'assets/img/mi.jpeg'
      }, {
        id: 4,
        AeroName: 'ECUREUIL AS 350',
        description: 'L\'Ecureuil AS 350 est un hélicoptère polyvalent. L\'AS 350 est un hélicoptère monomoteur capable de transporter jusqu\'à 6 passagers. Il est équipé d\'un moteur turbomoteur qui lui permet de voler à des vitesses allant jusqu\'à 250 km/h, avec une portée maximale de 700 km.',
        price: 800000,
        imageUrl: 'assets/img/Ecureuil.jpg'
      }, {
        id: 5,
        AeroName: 'AIR TRACTOR AT 802',
        description: 'L\'Air Tractor AT-802 est un avion de pulvérisation agricole et de lutte contre les incendies fabriqué par la société Air Tractor Inc. aux États-Unis. Il est équipé d\'un turbopropulseur Pratt & Whitney Canada PT6A-67F qui lui permet de voler à des vitesses allant jusqu\'à 315 km/h avec une portée maximale de 2 670 km.',
        price: 900000,
        imageUrl: 'assets/img/Tractor.jpeg'
      }
    ];

    return { hotels: aeros };
  }

}
