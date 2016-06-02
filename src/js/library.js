
function CachePoolItem() { //создем конструктор класса CachePoolItem
    this.itemValue = 'emptyValue'; // каждому новому объекту присваиваем значение 'emptyValue'
}

CachePoolItem.prototype.get = function(){ 
                                          
    return this.itemValue;                
}

CachePoolItem.prototype.set = function(value){ 
    this.itemValue = value;                    
}

function CachePool() {                         
    
    this.map = new Map();                         
}

CachePool.prototype.getItem = function(key){   
    if(this.map.get(key) == undefined){
        alert("По ключу(" + key + ") значения не найдено, функция getItem по данному ключу создаст новый объект!");   
    this.map.set(key, new CachePoolItem());  
    return this.map.get(key);      
    }
alert("По ключу(" + key + ") найдено значение, функция getItem по данному ключу выведет данное значение!");
return this.map.get(key); 
};




