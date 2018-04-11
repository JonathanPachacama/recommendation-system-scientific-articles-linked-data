/**
 * Created by USRDEL on 29/5/17.
 */
/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [2, 8, 9, 6, 7, 10, 10, 6, 9];
// Me devuelve un arreglo
var resultado = arreglo
    .map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
})
    .some(function (valor) {
    return valor <= 0.2;
});
console.log(resultado); // false
// AND - Todos cumplen verdadero sino falso
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 7);
});
// OR - Si alguno es verdadero entonces devuelvo true
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor < 2);
});
console.log(resultado3); //false
