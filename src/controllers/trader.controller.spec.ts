import { Test, TestingModule } from '@nestjs/testing';

import { TraderController } from './';
import { TraderService } from '../services';

describe('TraderController', () => {
  let mockController: TraderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TraderController],
      providers: [TraderService],
    }).compile();

    mockController = app.get<TraderController>(TraderController);
  });

  describe('getAllTraders', () => {
    it('returns an array', () => {
      const result = mockController.getAllTraders();

      expect(Array.isArray(result)).toBe(true);
    });

    it('returns an array containing all of the traders in the db', () => {
      const result = mockController.getAllTraders();

      expect(result.length).toBe(1);
    });
  });
});
