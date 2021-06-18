object Callback {

  def func(data: Option[String], callback: (Either[Exception, String]) => Int): Int =
    data map {d =>
      callback(Right(s"Data: $d"))
    } getOrElse {
      callback(Left(new Exception("Exception occurred!")))
    }

  def simpleCallback(input: Either[Exception, String]): Int =
    input map { s: String =>
      println(s)
      1 // ok, status 1
    } getOrElse {
      println(s"Data is not present!\n${input.left.get.getMessage}")
      -1 // NOT ok, status -1
    }

  def main(args: Array[String]): Unit = {
    println(s"None status = ${func(None, simpleCallback)}")

    println(s"Some status = ${func(Some("123"), simpleCallback)}")
  }
}
