import requests
from requests.auth import HTTPBasicAuth

url = "https://gnip-api.twitter.com/search/fullarchive/accounts/greg-students/prod/counts.json?query=gnip"
bucket = "&bucket=day"
user = ""
passWord = ""

teams = ["@athletics", "@Braves", "@Dodgers", "@Royals", "@tigers", "@Dbacks", "@Reds", "@Padres", "@Pirates", "@Mets", "@Orioles", "@Angels", "@Twins", "@Nationals", "@RaysBaseball", "@RedSox", "@Yankees", "@Rangers", "@Cubs", "@BlueJays", "@Mariners", "@SFGiants", "@astros", "@Brewers", "@Cardinals", "@Indians", "@Marlins", "@Phillies", "@whitesox", "@Rockies"]
print(len(teams))
# r = requests.get(url, auth=HTTPBasicAuth(user, passWord))

# r = requests.get('https://api.github.com/events')

# print(r.content)
