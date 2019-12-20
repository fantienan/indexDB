import localforage from 'localforage';
// 查询浏览器配额
class StorageQuota {
    constructor(key) {
        // this._instance = null;
        this.key = "test-quota";
    }

    static get instance() { // 获得实例
        return !!this._instance ? this._instance : this._instance = new StorageQuota()
    }

    set({key = this.key, value = 0} = {}) {
        if (!this.iDBFactory()) {
            return Promise.resolve();
        }
        return localforage.setItem(key, JSON.stringify(value));
    }

    remove() {
        return localforage.removeItem(this.key)
    }

    iDBFactory() {
        return window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    }
}

module.exports = StorageQuota