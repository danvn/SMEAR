import requests
from requests.auth import HTTPBasicAuth
import json as json

url = ""
bucket = "&bucket=day"
user = ""
password = ""
# fromDate ="201702220000" 	#yyyymmddhhmm
# toDate = "201711030000"		#yyyymmddhhmm
timeframe = "&fromDate=201702220000&toDate=201711030000"
teams = ["@athletics", "@Braves", "@Dodgers", "@Royals", "@tigers", "@Dbacks", "@Reds", "@Padres", "@Pirates", "@Mets", "@Orioles", "@Angels", "@Twins", "@Nationals", "@RaysBaseball", "@RedSox", "@Yankees", "@Rangers", "@Cubs", "@BlueJays", "@Mariners", "@SFGiants", "@astros", "@Brewers", "@Cardinals", "@Indians", "@Marlins", "@Phillies", "@whitesox", "@Rockies"]

for team in teams:
    queryParameters = {
        'bucket': 'day'
        }
    r = requests.get(url + team + timeframe, params=queryParameters, auth=HTTPBasicAuth(user, password))
    totalCounts = r.json()
    currentPage = r.json()

    while("next" in currentPage):
        nextToken = currentPage["next"]
        queryParameters.update({"next": nextToken})
        r = requests.get(url + team + timeframe, params=queryParameters, auth=HTTPBasicAuth(user, password))
        nextPage = r.json()
        for day in nextPage["results"]:
            totalCounts["results"].append(day)
        currentPage = nextPage

    with open(team + '.json', 'w') as fp:
        json.dump(totalCounts, fp)
