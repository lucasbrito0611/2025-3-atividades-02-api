import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { TestAppModule } from './modules/test-app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestAppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('status', 'online');
        expect(res.body).toHaveProperty('version', '1.0.0');
        expect(res.body).toHaveProperty(
          'description',
          'Esta é API de tarefas (todos) da turma de Infoweb 2025.',
        );
      });
  });

  afterAll(async () => {
    await app.close();
  });
});