/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
  };

  // Insert row and get new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age and assign it to updatedRow
const updatedRow: RowElement = {
    ...row,
    age: 23,
  };

  // Call update and delete
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
