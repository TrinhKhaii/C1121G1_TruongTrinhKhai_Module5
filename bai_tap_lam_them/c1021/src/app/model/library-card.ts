import {Book} from './book';
import {Student} from './student';

export interface LibraryCard {
  id: number,
  libraryCardCode: string,
  book: Book,
  student: Student,
  startDate: string,
  endDate: string
}
