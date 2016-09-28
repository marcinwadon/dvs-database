/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />


import Database from '../lib/Database';
import { expect } from 'chai';

describe('Database', () => {
  it('should be initialized', () => {
    const database: Database = new Database();
    expect(database).to.be.instanceof(Database);
  });
});
