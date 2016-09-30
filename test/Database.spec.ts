/// <reference path="../typings/index.d.ts" />

import Database from '../lib/Database';
import { expect, should } from 'chai';
import * as sinon from 'sinon';

describe('Database', () => {
  let database: Database;

  beforeEach(() => {
    database = new Database();
  });

  it('should be initialized', () => {
    expect(database).to.be.instanceof(Database);
  });
});
