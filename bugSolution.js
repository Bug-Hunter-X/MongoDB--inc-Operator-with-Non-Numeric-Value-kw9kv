```javascript
//Correct usage of $inc operator with numeric values
db.collection('myCollection').updateOne( { "_id": 1 }, { $inc: { "myField": 1 } } );
```