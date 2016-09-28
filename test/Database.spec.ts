/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/sinon/sinon.d.ts" />
/// <reference path="../typings/sinon-chai/sinon-chai.d.ts" />


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

  it('should allow to open database', () => {
    sinon.spy(database, 'openDb');

    expect(database.openDb).to.not.have.been.called;

    database.openDb();

    expect(database.openDb).to.have.been.called;
  });
});
