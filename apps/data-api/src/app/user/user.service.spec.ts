import { Test } from '@nestjs/testing';

import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { disconnect, Model } from 'mongoose';
import { MongoClient } from 'mongodb';

import { UserService } from './user.service';
import { User, UserDocument, UserSchema } from './user.schema';

describe('UserService', () => {
  let service: UserService;
  let mongod: MongoMemoryServer;
  let mongoc: MongoClient;
  let userModel: Model<UserDocument>;

  const testUsers = [{
    id: 'jan123',
    username: 'jan',
    emailAddress: 'mail@address.com',
  }, {
    id: 'dion123',
    username: 'dion',
    emailAddress: 'mail@address.com',
  }, {
    id: 'davide123',
    username: 'davide',
    emailAddress: 'mail@address.com',
  }];
  
  beforeAll(async () => {
    let uri: string;
    
    const app = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => {
            mongod = await MongoMemoryServer.create();
            uri = mongod.getUri();
            return {uri};
          },
        }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      providers: [UserService],
    }).compile();

    service = app.get<UserService>(UserService);
    userModel = app.get<Model<UserDocument>>(getModelToken(User.name));

    mongoc = new MongoClient(uri);
    await mongoc.connect();
  });

  afterAll(async () => {
    await mongoc.close();
    await disconnect();
    await mongod.stop();
  });

  describe('getAll', () => {
    it('should retrieve all users', async () => {
      const results = await service.getAll();
  
      expect(results).toHaveLength(3);
      expect(results.map(r => r.username)).toContain('jan');
      expect(results.map(r => r.username)).toContain('dion');
      expect(results.map(r => r.username)).toContain('davide');
    });
  
    it('gives the average rating, id, name, topics', async () => {
      const results = await service.getAll();

      expect(results[0]).toHaveProperty('id');
      expect(results[0]).toHaveProperty('username');
    });
  });

  describe('getOne', () => {
    it('should retrieve a specific user', async () => {
      const result = await service.getOne('jan123');

      expect(result).toHaveProperty('name', 'jan');
    });
    
    it('returns null when user is not found', async () => {
      const result = await service.getOne('niemand');
      
      expect(result).toBeUndefined();
    });
  });
});
