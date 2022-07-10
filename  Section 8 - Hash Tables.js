//HT - Constructor
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    //Hash Function
    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    //HT - Set
    set(key, value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] = [] //Creates empty array ONLY if space has no array already
        }
        this.dataMap[index].push([key,value])
        return this
    }

    //HT - Get
    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]){
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined
    }

    //HT - Keys
    keys() {
        let allKeys = []
        for(let i = 0; i < this.dataMap.length;i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length;j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }

}

let myHashTable = new HashTable()
myHashTable
myHashTable.set('bolts', 1400)
myHashTable.set('washers', 50)

//HT - Interview Question
//Using for loops: O(n^2)
function itemInCommon(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) return true
        }
    }
}

//Using HashTable or Object: O(n)
function itemInCommon(arr1, arr2) {
    let obj = {}
    for(let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = true
        for(let j = 0; j < arr2.length; j++) {
            if(obj[arr2[j]]) return true
        }
    }
    return false
}



