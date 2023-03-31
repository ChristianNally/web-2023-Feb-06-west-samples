# # block of code is denoted with do..end
# # Proc => stored procedure => a block in memory

# names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# my_block = Proc.new do |name|
#   puts "hello there #{name} from inside the block"
# end # new Proc()

# puts

# names.each &my_block

# [1, 2, 3].each &my_block

# blocks are accepted into methods "invisibly"
def accepts_a_block amount
  # record the start time
  puts "before the yield"
  yield(amount)
  puts "after the yield"
  # record the end time
  # puts end_time - start_time
end

add_two = Proc.new do |num|
  puts "#{num + 2}"
end

accepts_a_block 10, &add_two
