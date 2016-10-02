import { Observable } from 'rx';
import IndexedDBService from 'service/indexedDB.service';


class TodoService extends IndexedDBService {
  constructor() {
    super('todo_app', 1, {
      storeName: 'todo',
      indices: ['text', 'completed'],
      options: { keyPath: 'id', autoIncrement: true }
    });
  }

  add (text) {
    let storeName = this.config.storeName;
    let todo = { text, completed: false };
    super.open().subscribe((db) => {
      let transaction = db.transaction([storeName], 'readwrite');
      let os = transaction.objectStore(storeName);
      os.add(todo);
    });
  }

  getAll () {
    let storeName = this.config.storeName;
    return Observable.create((observer) => {
      super.getCursor(storeName).subscribe((cursor) => {
        cursor.onsuccess = (e) => {
          let result = e.target.result;
          if (result) {
            observer.onNext(result.value);
            result.continue();
          }
        };
        cursor.onerror = observer.onError;
      });
    }).publish().refCount();
  }
}

export default TodoService;
