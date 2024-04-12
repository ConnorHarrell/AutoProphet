const path = require('path');
const { contextBridge } = require('electron')
const { promises: fsPromises } = require('fs');
const fs = require('fs');
  
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: require('electron').ipcRenderer,
});

contextBridge.exposeInMainWorld('fs', {
    fs: require('fs'),
});

contextBridge.exposeInMainWorld('yahoo', {
    finance: require('yahoo-finance2').default
});

// for databases that rely on require(), add them to this contextBridge
contextBridge.exposeInMainWorld('database', {
    sqlite: (database) => {
        try{
            const sqlite3 = require('sqlite3').verbose();
            const db = new sqlite3.Database(database);
            return db;
        } catch(error) {
            window.console.error(error);
        }
        
    }
});

// use window.console.log when you need to log within electron
/*contextBridge.exposeInMainWorld('terminal', {
    log: (data) => {
        console.log(data);
    },
    error: (data) => {
        console.error(data);
    }
});*/