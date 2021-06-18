object Chain {

  def sum(a: Int) =
    (b: Int) =>
      (c: Int) =>
        a + b + c

  def main(args: Array[String]): Unit = {
    val f1 = sum(1)(1)
    val s1 = f1(1)
    val s2 = f1(2)

    println(s"$s1\t$s2")
  }
}
