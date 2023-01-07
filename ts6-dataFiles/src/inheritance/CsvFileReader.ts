import fs from 'fs';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../enums/MatchResult';

// solution to problem using Generics
export abstract class CsvFileReader<T> {
  data: T[] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }
  abstract mapRow(row:string[]):T



  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }






// end of class
}

