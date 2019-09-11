require 'faker'


postList = []

id_counter = 0
100.times do
  id_counter += 1
  post = {
    :id => id_counter,
    :title => Faker::Hipster.sentence,
    :text => Faker::Hipster.paragraph,
    :username => Faker::Internet.username,
    :hours => rand(6..1000),
    :upvotes => rand(4..1000),
    :subreddit => ["movies", "tv", "politics", "askreddit", "woahdude", "brandnewsentence", "insanepeoplefacwebook", " nostupidquestions"].sample,
    :icon => nil,
    :timestamp => Time.new() - rand(120000..10000000)
  }
  postList.push(post)
end

json = postList.to_json

File.open("postData.json", "w") do |f|
  f.write(json)
end
