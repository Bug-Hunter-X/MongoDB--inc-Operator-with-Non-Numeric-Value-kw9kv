```javascript
//Incorrect usage of $inc operator with non-numeric values
db.collection('myCollection').updateOne( { "_id": 1 }, { $inc: { "myField": "abc" } } );
```