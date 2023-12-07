// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.

class library {
  #books = [];
  constructor(...title) {
    this.#books.push(...title);
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if this.#books.include(title) {
      throw Error ('Така книга уже существует');
    }
    this.#books.push(title);
    return this.#books;
  }

  removeBook(title) {
      const indexSplise = this.#books.indexOf(title);
      if (indexSplise === -1) {
          throw Error('Такой книги не существует');
      }
      else {
          this.#books.splice(indexSplise, 1);
          return this.#books;
      }
  }
  hasBook(title) {
    return this.#books.includes(title)
  }
}

const library = new library("A little prince","Pinocchio");
try {
  library.addBook("Indiana Jones and the Interior World");
  library.addBook("A little prince");
} catch (error) {
  console.error(error.message);
}

try {
  library.removeBook("Pinocchio");
  library.removeBook("Fifty Shades of Gray");
} catch (error) {
  console.error(error.message);
}

try {
  console.log(library.hasBook("Pinocchio"));
  console.log(library.hasBook("Mermaid"));
} catch (error) {
  console.error(error.message);
}

console.log(library.allBook);