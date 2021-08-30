package ejericios;

public class FizzBuzz {
	public static void main(String[] args) {
		fizzBuzz(15);
	}
	static void fizzBuzz (int n) {
		String fizz = "";
		String buzz = "";
		String fizz_buzz;
		for(int i = 1; i <= n; i++) {
			fizz= (i % 3 == 0 ? "Fizz ": ""); //Compara si es divisible entre 3, si lo es devuelve fizz
			buzz = (i % 5 == 0 ? "Buzz" : "");//Compara si es divisible entre 3, si lo es devuelve buzz
			fizz_buzz = fizz.concat(buzz);//concate los dos Strings
			System.out.println((fizz_buzz.isEmpty() ? i : fizz_buzz));/*Compara si la cadena está vacia
			 si lo está entonces solo imprime el número, si no lo está entonces imprime la cadena*/
			
		}
	}
	
}
