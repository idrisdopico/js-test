export const useValidator = (schema, objectToValidate) => {
  for (let prop in schema) {
    // Check type van het object, vergeleken met het type in het schema
    if (typeof objectToValidate[prop] !== schema[prop]) {
      // Check of de prop het type "object" heeft
      if (typeof objectToValidate[prop] === 'object') {
        return objectToValidate[prop].constructor === Array && schema[prop] === 'array';
      }

      return false;
    }
  }

  return true;
}


// @TODO: Dit is even om de gedachtengang te laten zien aan jullie :)
// typeof objToValidate[prop] === object / array
// objectToValidate[prop].constructor === Array

// export const useValidator = (schema, objectToValidate) => {
//   for (let prop in schema) {
//     console.log(objectToValidate[prop], 'should be: ', schema[prop]);
//
//     // Valideer de type van het object, vergeleken met het type in het schema
//     if (typeof objectToValidate[prop] !== schema[prop]) {
//       return false;
//     }
//
//     return objectToValidate[prop].constructor === Array && schema[prop] === 'array';
//   }
//
//   return true;
// }

// typeof objToValidate[prop] === object / array
// objectToValidate[prop].constructor === Array
