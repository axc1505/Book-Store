import { Component, NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { NgModule } from '@angular/core';
import {books} from './books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
    id=Number;
    name= String;
    author = String;
    date = String;
    md = String;



    





  searchedKeyword!: string;
  books =[{
    "id": 1,
    "name": "book 1",
    "author":"book's author",
    "dateAdded":"date",
    "DateModified": "date"
},{
  "id": 2,
  "name": "book 2",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},{
  "id": 3,
  "name": "book 3",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},{
  "id": 4,
  "name": "book 4",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},{
  "id": 5,
  "name": "book 5",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},








]

  constructor(){
 


  }}