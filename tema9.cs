// using System;

// public class HelloWorld
// {
//     public static void Main(string[] args)
//     {
//         char letra;
//         bool esVocal, esCifra;
        
//         Console.WriteLine("Introduce una letra");
//         letra = Convert.ToChar(Console.ReadLine());
        
//         esCifra = (letra >= '0') && (letra <= '9');
        
//         esVocal = (letra == 'a') || (letra == 'e') ||(letra == 'i') ||(letra == 'o') ||(letra == 'u');
        
//         if (esCifra){
//             Console.WriteLine("Es una Cifra numérica.");
//         }else if (esVocal){
//             Console.WriteLine("Es una Vocal.");
//         }else{
//             Console.WriteLine("Es una consonante u otro símbolo.");

//         }
//     }
// }


// using System;

// public class HelloWorld
// {
//     public static void Main(string[] args)
//     {
//         double ladoA, ladoB, ladoC;
//         Console.WriteLine("Ingrese el primer lado");
//         ladoA = double.Parse(Console.ReadLine());
//         Console.WriteLine("Ingrese el segundo lado");
//         ladoB = double.Parse(Console.ReadLine());
//         Console.WriteLine("Ingrese el tercer lado");
//         ladoC = double.Parse(Console.ReadLine());
//         if((ladoA == ladoB) & (ladoA == ladoC)){
//             Console.WriteLine("Triángulo Equilátero, Lados iguales.");
//         }
//         if((ladoA != ladoB) & (ladoA != ladoC) & (ladoB != ladoC)){
//             Console.WriteLine("Triángulo Escaleno, Lados diferentes.");
//         }
//         if(((ladoA == ladoB) & (ladoA != ladoC)) || ((ladoA == ladoC) & (ladoA !=ladoB)) || ((ladoB == ladoC) & (ladoA != ladoB))){
//             Console.WriteLine("Triángulo Isosceles, 2 lados iguales.");
//         }
//     }
// }