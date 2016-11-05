import { Observable } from 'rx';


const READ_WRITE = 'readwrite';
const READ_ONLY = 'readonly';

class IndexedDBService {
  constructor(tableName, version, config) {
    this.tableName = tableName;
    this.version = version;
    this.config = config;
  };

  static isSupported () {
    return 'indexedDB' in window;
  }

  open () {
    let isNotSupported = !IndexedDBService.isSupported();
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
      let transaction = db.transaction([storeName], READ_WRITE);
      let os = transaction.objectStore(storeName);
      os.add(todo);
    });
    unsubscribe();
  }

  get (key) {
    let storeName = this.config.storeName;
    return Observable.create((observer) => {
      this.open().subscribe((db) => {
        let transaction = db.transaction([storeName], READ_ONLY);
        let os = transaction.objectStore(storeName);
        let getRequest = os.get(key);
        getRequest.onsuccess = (e) => {
          observer.onNext(e.target.result);
        };
        getRequest.onerror= (e) => {
          observer.onError('could not complete get request: ', e);
        };
      });
    }).publish().refCount();
  }

  getCursor (storeName) {
    return Observable.create((observer) => {
      this.open().subscribe((db) => {
        let transaction = db.transaction([storeName], READ_ONLY);
        let os = transaction.objectStore(storeName);
        observer.onNext(os.openCursor());
      });
    }).publish().refCount();
  }

  update (todo) {
    let storeName = this.config.storeName;
    return Observable.create((observer) => {
      this.open().subscribe((db) => {
        let transaction = db.transaction([storeName], READ_WRITE);
        let os = transaction.objectStore(storeName);
        let getRequest = os.put(todo);
        getRequest.onsuccess = (e) => {
          observer.onNext(e.target.result);
        };
        getRequest.onerror= (e) => {
          observer.onError('could not complete get request: ', e);
        };
      });
    }).publish().refCount();
  }
}

export default IndexedDBService;
