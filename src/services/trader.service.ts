import { Injectable } from '@nestjs/common';

@Injectable()
export class TraderService {
  getAllTraders(): Array<any> {
    const trader = {
      name: 'Three Brothers',
      ratingAverage: 5,
      openHours: [{ start: '', end: '' }],
    };

    return [trader];
  }
}
