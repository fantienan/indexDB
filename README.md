# IndexDB的简单应用

## Install
- yarn install

## Sample
    ```js
    const storage = new Elocalforage()
    const res = await storage.get(key, {
        timestamp: this.data_time
    })
    storage.set(key, res, {
        timestamp: datatime
    })
    storage.remove(key)
    ```

    ```js
    StorageQuota.instance.set().then(res => {
        if (res == undefined) {
            // 浏览器不支持indexDB
        } else {
            // 支持indeXDB 
            StorageQuota.instance.remove();
        }
      }).catch(error => {
        //不支持indexDB或者浏览器配额不足
        StorageQuota.instance.remove();
      });
    ```