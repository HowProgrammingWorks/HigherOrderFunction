object Closure {
  def func(a: String): String => Unit = {
    val b = "Closure variable"

    (c: String) =>
      println(s"$a\t$b\t$c")
  }

  def main(args: Array[String]): Unit = {
    val f1 = func("Number 1")
    f1("Number 2")

    val f2 = func("Parameter X")
    f2("Parameter Y")
  }
}
