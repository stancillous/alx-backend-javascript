/// <reference path="./crud.d.ts"/>
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";
import { deleteRow } from "./crud";

let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}
const newRowID: RowID = 2
CRUD.insertRow(newRowID)

const updateRow: RowElement = {
    firstName: "ray",
    lastName: "stance"
}
row.age = 23
CRUD.updateRow(newRowID, updateRow)
CRUD.deleteRow(newRowID)