import { Observable } from 'rx';


class IndexedDBService {
  constructor(tableName, version, config) {
    this.tableName = tableName;
    this.version = version;
    this.config = config;
  };


  isSupported () {
    return 'indexedDB' in window;
  }

  open () {
    let isNotSupported = !this.isSupported();
    let tableName = this.tableName;
    let version = this.version;
    let config = this.config;

    return Observable.create(function (observer) {
      if (isNotSupported) {
        observer.onError('indexedDB is not supported');
      }

      let idb = window.indexedDB;
      let openRequest = idb.open(tableName, version || 1);

      openRequest.onupgradeneeded = (e) => {
        let db = e.target.result;
        if (!db.objectStoreNames.contains(config.storeName)) {
          let os = db.createObjectStore(config.storeName, config.options);
          config.indices.forEach((index) => {
            os.createIndex(index, index);
          });
        }
      };

      openRequest.onsuccess = (e) => {
        observer.onNext(e.target.result);
      };

      openRequest.onerror = (e) => {
        observer.onError('could not open table: ', e);
      }
    });
  }

  add (value) {
    let storeName = this.config.storeName;
    let unsubscribe = this.open().subscribe((db) => {
      let transaction = db.transaction([storeName], 'readwrite');
      let os = transaction.objectStore(storeName);
      os.add(todo);
    });
    unsubscribe();
  }

  getCursor (storeName) {
    return Observable.create((observer) => {
      this.open().subscribe((db) => {
        let transaction = db.transaction([storeName], 'readonly');
        let os = transaction.objectStore(storeName);
        observer.onNext(os.openCursor());
      });
    }).publish().refCount();
  }

}

export default IndexedDBService;
