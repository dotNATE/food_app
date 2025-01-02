import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './';
import { AppService } from '../services';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getExampleData', () => {
    it('should return "Hello, this is your example data!"', () => {
      expect(appController.getExampleData()).toBe(
        'Hello, this is your example data!',
      );
    });
  });
});
