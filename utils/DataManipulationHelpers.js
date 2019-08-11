

//map the desired objects to an array
const customMap = (objects,prop) => { 
    try{
    objects = objects.map(object => object[prop]);
    return objects;
    }catch(err){
        console.log(err);
    }
};

//Flatten the nesting by 1 layer
const customReduce = (objects) => objects.reduce((total, subArray) => {
    return total.concat(subArray);
}, []);

//Pipe Where the order of the way the data is manipulated can be changed
const pipe = (objects, prop0, prop1) => {
    objects = customMap(objects, prop0);
    objects = customReduce(objects);
    objects = customMap(objects, prop1);
    objects = customReduce(objects);
    return objects;

};

module.exports = {customMap, customReduce, pipe};