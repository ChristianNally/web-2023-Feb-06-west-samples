# hash => collection of key/value pairs; object, dictionary, associative array
# objects in Ruby => data and behaviour

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# "username" # String.new("username")

# "username" == "username"

# symbol is as close to a primitive as we can get; lightweight string

user = {
  :username => "jstamos",
  :password => "1234"
}

# puts user
# p user[:username]

user = {
  username: "jstamos",
  password: "1234"
}

puts user
