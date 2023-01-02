array = []
splitted.each_with_index do |s, index|
    puts 'INDEX ' + index.to_s
    js = nil
    if index == 0
    js = JSON.parse(s + '}')
    else
    js = JSON.parse('{'+s+'}')
    end
    array.push(js)
end

File.open './people_js.json', 'w' do |f|
    f.write array.to_json
end


signs = {
    'aries' => '2zrtospisqo7qfh',
    'taurus' => 'oh0zmlafsgwkisn',
    'gemini' => 'ed2kg8sw1zg1lyo',
    'cancer' => 'siajf9elhuxi0sx',
    'leo' => 'n83rwotpmyrtz5v',
    'virgo' => 'jrcdg30rowln7df',
    'libra' => 'z8bv1sniuwf6k7j',
    'scorpio' => 'm03hwvg8bbjotwh',
    'sagittarius' => '8yx87fohfmaq5pt',
    'capricorn' => '0qr964sydg4qtmn',
    'aquarius' => 'gsa8frjkg8te16u',
    'pisces' => '736say6g8rxxqdw',
}

mathematician.each do |actor|
puts "Doing #{actor['name']}"
split_name = actor['name'].split(',')
name = split_name[1] || ''
surname = split_name[0]
@toSend = {
    "name": name + ' ' + surname,
    "sign": signs[actor['sign']],
    "relevance": 0,
    "job": "h1xrbnzv2tysojs",
    "sex": "male"
};

uri = URI.parse("http://127.0.0.1:8090/api/collections/people/records")
https = Net::HTTP.new(uri.host,uri.port)
req = Net::HTTP::Post.new(uri.path,{'Content-Type' =>'application/json'})
req.body = @toSend.to_json
res = https.request(req)
end
