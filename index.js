var recipes = {
  Bread : 'Flour',
  Sugar : 'Salt'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop :1 };
<<<<<<< HEAD
  recipes = Object.assign({}, object, { [key]: value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {key: 'value'};
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
=======
  recipes[key] = value;
  return (obj, key, value)
>>>>>>> 28351aafb11b5f2145743e12bdc5e5bac4238d28
}
