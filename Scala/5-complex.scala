/**
  * Some more complex examples of higher order functions usage
  * there are `sum` and `product` functions with regular and tail recursive examples
  * and some generalized functions which can be used for creating `sum` and `product`
  */

object ComplexExample {

  def sum(f: (Int) => Int)(a: Int, b: Int): Int =
    if (a > b) 0
    else f(a) + sum(f)(a + 1, b)


  def product(f: (Int) => Int)(a: Int, b: Int): Int =
    if (a > b) 1
    else f(a) * product(f)(a + 1, b)

//  tail recursive sum
  def sum1(f: (Int) => Int)(a: Int, b: Int): Int = {
    def loop(buf: Int)(curr: Int): Int =
      if (curr > b) buf
      else loop(buf + f(curr))(curr + 1)

    loop(0)(a)
  }

//  tail recursive product
  def product1(f: (Int) => Int)(a: Int, b: Int): Int = {
    def loop(buf: Int)(curr: Int): Int =
      if (curr > b) buf
      else loop(buf * f(curr))(curr + 1)

    loop(1)(a)
  }

  def generalized(zero: Int)(combine: (Int, Int) => Int): (Int => Int) => (Int, Int) => Int = {
    def innerFunc(f: (Int) => Int)(a: Int, b: Int): Int = {
      if (a > b) zero
      else combine(f(a), innerFunc(f)(a + 1, b))
    }
    innerFunc
  }

//  tail recursive generalized function
  def generalized1(zero: Int)(combine: (Int, Int) => Int): (Int => Int) => (Int, Int) => Int = {
    (f: (Int) => Int) => (a: Int, b: Int) => {
      def loop(buf: Int)(curr: Int): Int =
        if (curr > b) buf
        else loop(combine(buf, f(curr)))(curr + 1)

      loop(zero)(a)
    }
  }

  def main(args: Array[String]): Unit = {
    val identity = (x: Int) => x
    val square = (x: Int) => x * x

    val generalizedSum = generalized(0)(_ + _)
    val generalizedSum1 = generalized1(0)(_ + _)
    println("sum of squares")
    println(s"sum(x => x * x)(1, 5) = ${sum(square)(1, 5)}")
    println(s"sum1(x => x * x)(1, 5) = ${sum1(square)(1, 5)}")
    println(s"generalizedSum(x => x * x)(1, 5) = ${generalizedSum(square)(1, 5)}")
    println(s"generalizedSum1(x => x * x)(1, 5) = ${generalizedSum1(square)(1, 5)}")

    val generalizedProduct = generalized(1)(_ * _)
    val generalizedProduct1 = generalized1(1)(_ * _)
    println("factorial")
    println(s"product(x => x)(1, 5) = ${product(identity)(1, 5)}")
    println(s"product1(x => x)(1, 5) = ${product1(identity)(1, 5)}")
    println(s"generalizedProduct(x => x)(1, 5) = ${generalizedProduct(identity)(1, 5)}")
    println(s"generalizedProduct1(x => x)(1, 5) = ${generalizedProduct1(identity)(1, 5)}")
  }
}
