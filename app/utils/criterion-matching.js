/**
 * Returns truethy iff value matches with the specified SIMPLE
 * constraint.
 */
function valueMatchesSimpleNumericString( value, string ) {
  let regexMatch;

  if( !string || string == "undefined" ) {
    return;
  } else {
    if( (regexMatch = string.match( /<= (\d+)/) ) ) {
      // <=
      const constraint = parseInt(regexMatch[1]);
      return value <= constraint;
    } else if ( (regexMatch = string.match( /< (\d+)/) ) ) {
      // <
      const constraint = parseInt(regexMatch[1]);
      return value < constraint;
    } else if ( (regexMatch = string.match( /> (\d+)/) ) ) {
      // >
      const constraint = parseInt(regexMatch[1]);
      return value > constraint;
    } else if ( (regexMatch = string.match( />= (\d+)/) ) ) {
      // >=
      const constraint = parseInt(regexMatch[1]);
      return value >= constraint;
    }
  }
}

/**
 * Returns truethy iff value matches the specified constraint (MAY BE
 * COMPLEX).
 */
function valueMatchesNumericString( value, string ) {
  return string
    .split("en")
    .map( (str) => str.trim() )
    .every( (str) => valueMatchesSimpleNumericString( value, str ) );
}

/**
 * Returns truethy iff value matches the specified area constraint (MAY BE COMPLEX)
 */
function valueMatchesAreaString( value, string ) {
  if( string == "undefined" ){
    return true;
  } else if( value && string ) {
    const [y, z] = value;

    return string
      .split("en")
      .map( (str) => str.trim() )
      .every( (str) => {
        // parse out the constraint and the numbers
        const match = str.match( /\s*([><=]+)\s*(\d+)\s*x\s*(\d+)\s*/ );
        if( match ) {
          const [ _fullMatch, constraint, yVal, zVal ] = match;

          return valueMatchesSimpleNumericString( y, `${constraint} ${yVal}` )
            && valueMatchesSimpleNumericString( z, `${constraint} ${zVal}` );
        } else {
          console.log(`Match was null for ${string}`);
        }
      });
  }
}

export { valueMatchesSimpleNumericString, valueMatchesNumericString, valueMatchesAreaString }
