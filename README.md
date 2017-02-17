Simple validation library for your ES6 classes.

```
class Book extends Validateable {
  
  constructor(title, author) {
    super();
    this.title = title;
    this.author = author;
  }
  
  // Define constraints
  constraints() {
    return {
      title  :  blank(false),
      author :  nullable(false)
    }    
  }

}

const book = new Book("ABC", "Frank");

book.validate() == true;

```

### Available validators
  
  - nullable
  - blank
  - size
  - inlist

