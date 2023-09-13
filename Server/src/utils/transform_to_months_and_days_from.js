/**
 * Transformo el array de las fechas en un objeto con los meses
 * y los días de la semana de las fechas
*/
module.exports = function( dates ) {
   const months = dates.reduce( (result, date) => {
      const d = new Date( Date.parse(date)+3*3600*1000 );
      result.push( d.getMonth()+1 )
      return result
   }, [] );

   const week_days = dates.reduce( (result, date) => {
      const d = new Date( date )
      result.push( d.getDay() );
      return result;
   }, [] )

   return {
      months: Array.from( new Set( months ) )
      , wdays: Array.from( new Set( week_days ) )
   }
}