export const useValidator = (schema, objToValidate) => {
  for (let prop in schema) {
    // Valideer de type van het object, vergeleken met het type in het schema
    if (typeof objToValidate[prop] !== schema[prop]) {

      // Check of het type van de prop een object of Array is
      if (typeof objToValidate[prop] === 'object') {
        return Array.isArray(objToValidate[prop]);
      }

      return false;
    }
  }

  return true;
}
