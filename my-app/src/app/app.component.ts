import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import booksJson from '../assets/books.json';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  sortAsc = true;
  searchedKeyword = '';
  books: Book[] = booksJson.books;
  filteredList: Book[] = this.books;
  book: Book = {
    id: new Date().getTime(),
    author: '',
    name: '',
    dateAdded: new Date().toString(),
    dateModified: new Date().toString(),
  };
  sortBy(type: 'name' | 'dateAdded') {
    this.filteredList = this.filteredList.sort((a, b) => {
      if (a[type] < b[type]) {
        return this.sortAsc ? 1 : -1;
      } else return this.sortAsc ? -1 : 1;
    });
    this.sortAsc = !this.sortAsc;
  }
  onEdit(id: number) {
    this.editMode = true;
    const editBook = this.filteredList.find((x) => x.id === id);
    this.book = editBook!;
  }

  onSubmit(form: NgForm) {
    if (this.editMode) {
      const newEditedBook: Book = {
        id: this.book.id,
        name: form.value.book.name,
        author: form.value.book.author,
        dateAdded: this.book.dateAdded,
        dateModified: new Date().toString(),
      };
      this.editMode = false;
      const editBookIndex = this.filteredList.findIndex(
        (x) => x.id === newEditedBook.id
      );
      this.books.splice(editBookIndex, 1, newEditedBook);
    } else {
      const newBook: Book = {
        id: new Date().getTime(),
        name: form.value.book.name,
        author: form.value.book.author,
        dateAdded: new Date().toString(),
        dateModified: new Date().toString(),
      };
      this.books.push(newBook);
    }
    form.reset();
  }

  onDelete(id: number) {
    this.books = this.books.filter((x) => x.id !== id);
    this.filteredList = this.filteredList.filter((x) => x.id !== id);
  }

  onSearch(): void {
    this.filteredList = this.books.filter(
      (x) =>
        x.name
          .toLocaleLowerCase()
          .includes(this.searchedKeyword.toLowerCase().trim()) ||
        x.author
          .toLocaleLowerCase()
          .includes(this.searchedKeyword.toLowerCase().trim())
    );
  }
}
