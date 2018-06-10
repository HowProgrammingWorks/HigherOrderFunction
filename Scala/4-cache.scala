object Cache {

//  acts like functor
  def cached() = {
    println("Generate cache")
    var cache: Int Map String = Map.empty[Int, String]

    (a: Int) =>
      cache.get(a) map { value =>
        println("Found in cache")
        value
      } getOrElse {
        println("Not found in cache, calculating and saving")
        val res = a -> s"value $a"
        cache += res
        res
      }
  }

  def main(args: Array[String]): Unit = {
    val f1 = cached()
    f1(1)
    f1(2)
    f1(1)
    f1(2)

    val f2 = cached()
    f2(1)
    f2(2)
    f2(1)
    f2(2)
  }
}
