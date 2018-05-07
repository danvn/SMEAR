setTimeout(myFunction, 1000)
var mlbTeams = [
  ["@Angels","ANA","rgba(178, 0, 31, .5)"],
  ["@Astros","HOU","rgba(0, 40, 87, .5)"],
  ["@Athletics","OAK","rgba(0, 49, 43, .5)"],
  ["@BlueJays","TOR","rgba(19, 65, 131, .5)"],
  ["@Braves","ATL","rgba(193, 17, 41, .5)"],
  ["@Brewers","MIL","rgba(20, 37, 66, .5)"],
  ["@Cardinals","SLN","rgba(178, 13, 41, .5)"],
  ["@Cubs","CHN","rgba(0, 41, 97, .5)"],
  ["@Dbacks","ARI","rgba(0, 36, 75, .5)"],
  ["@Dodgers","LAN","rgba(0, 41, 97, .5)"],
  ["@Indians","CLE","rgba(17, 31, 54, .5)"],
  ["@Mariners","SEA","rgba(15, 32, 56, .5)"],
  ["@Marlins","MIA","rgba(255, 90, 0, .5)"],
  ["@Mets","NYN","rgba(0, 40, 103, .5)"],
  ["@Nationals","WAS","rgba(178, 19, 38, .5)"],
  ["@Orioles","BAL","rgba(219, 61, 7, .5)"],
  ["@Padres","SDN","rgba(0, 40, 87, .5)"],
  ["@Phillies","PHI","rgba(178, 13, 41, .5)"],
  ["@Pirates","PIT","rgba(19, 19, 19, .5)"],
  ["@Rangers","TEX","rgba(0, 44, 109, .5)"],
  ["@RaysBaseball","TBA","rgba(13, 39, 81, .5)"],
  ["@RedSox","BOS","rgba(193, 17, 41, .5)"],
  ["@Reds","CIN","rgba(207, 0, 44, .5)"],
  ["@Rockies","COL","rgba(45, 45, 91, .5)"],
  ["@Royals","KCA","rgba(0, 62, 124, .5)"],
  ["@SFGiants","SFN","rgba(249, 61, 23, .5)"],
  ["@Tigers","DET","rgba(15, 39, 76, .5)"],
  ["@Twins","MIN","rgba(15, 32, 57, .5)"],
  ["@Whitesox","CHA","rgba(35, 33, 29, .5)"],
  ["@Yankees","NYA","rgba(21, 33, 62, .5)"]
]
teamMentionsAndRuns = {}

var allMLBGames =
[
  {
    "Date": 20170407,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170408,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170409,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 9,
    "home_score": 10
  },
  {
    "Date": 20170411,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170412,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170413,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170421,
    "vis_team": "TOR",
    "home_team": "ANA",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170422,
    "vis_team": "TOR",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170423,
    "vis_team": "TOR",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170424,
    "vis_team": "TOR",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170425,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170426,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170427,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170505,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170506,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170507,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170511,
    "vis_team": "DET",
    "home_team": "ANA",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170512,
    "vis_team": "DET",
    "home_team": "ANA",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170513,
    "vis_team": "DET",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170514,
    "vis_team": "DET",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170515,
    "vis_team": "CHA",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170516,
    "vis_team": "CHA",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170517,
    "vis_team": "CHA",
    "home_team": "ANA",
    "vis_score": 8,
    "home_score": 12
  },
  {
    "Date": 20170529,
    "vis_team": "ATL",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170530,
    "vis_team": "ATL",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170531,
    "vis_team": "ATL",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170601,
    "vis_team": "MIN",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170602,
    "vis_team": "MIN",
    "home_team": "ANA",
    "vis_score": 11,
    "home_score": 5
  },
  {
    "Date": 20170603,
    "vis_team": "MIN",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170604,
    "vis_team": "MIN",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170612,
    "vis_team": "NYA",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170613,
    "vis_team": "NYA",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170614,
    "vis_team": "NYA",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170615,
    "vis_team": "KCA",
    "home_team": "ANA",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170616,
    "vis_team": "KCA",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170617,
    "vis_team": "KCA",
    "home_team": "ANA",
    "vis_score": 0,
    "home_score": 9
  },
  {
    "Date": 20170618,
    "vis_team": "KCA",
    "home_team": "ANA",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170628,
    "vis_team": "LAN",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170629,
    "vis_team": "LAN",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170630,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 10,
    "home_score": 0
  },
  {
    "Date": 20170701,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170702,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170714,
    "vis_team": "TBA",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170715,
    "vis_team": "TBA",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170716,
    "vis_team": "TBA",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170718,
    "vis_team": "WAS",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170719,
    "vis_team": "WAS",
    "home_team": "ANA",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170721,
    "vis_team": "BOS",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170722,
    "vis_team": "BOS",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170723,
    "vis_team": "BOS",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170801,
    "vis_team": "PHI",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170802,
    "vis_team": "PHI",
    "home_team": "ANA",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170803,
    "vis_team": "PHI",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170804,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170805,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170806,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 11,
    "home_score": 10
  },
  {
    "Date": 20170807,
    "vis_team": "BAL",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170808,
    "vis_team": "BAL",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170809,
    "vis_team": "BAL",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170821,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170822,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170823,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170824,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170825,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170826,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170827,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170828,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170829,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170830,
    "vis_team": "OAK",
    "home_team": "ANA",
    "vis_score": 8,
    "home_score": 10
  },
  {
    "Date": 20170912,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170913,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170914,
    "vis_team": "HOU",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170915,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170916,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170917,
    "vis_team": "TEX",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170919,
    "vis_team": "CLE",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170920,
    "vis_team": "CLE",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170921,
    "vis_team": "CLE",
    "home_team": "ANA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170929,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170930,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20171001,
    "vis_team": "SEA",
    "home_team": "ANA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170402,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170404,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170405,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170406,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170407,
    "vis_team": "CLE",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170408,
    "vis_team": "CLE",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 11
  },
  {
    "Date": 20170409,
    "vis_team": "CLE",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170421,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 5,
    "home_score": 13
  },
  {
    "Date": 20170422,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 5,
    "home_score": 11
  },
  {
    "Date": 20170423,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170424,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170425,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170426,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170427,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170428,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170429,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170430,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170509,
    "vis_team": "DET",
    "home_team": "ARI",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170510,
    "vis_team": "DET",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170511,
    "vis_team": "PIT",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170512,
    "vis_team": "PIT",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170513,
    "vis_team": "PIT",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170514,
    "vis_team": "PIT",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170515,
    "vis_team": "NYN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170516,
    "vis_team": "NYN",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170517,
    "vis_team": "NYN",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170522,
    "vis_team": "CHA",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170523,
    "vis_team": "CHA",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170524,
    "vis_team": "CHA",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170606,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170607,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170608,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 15
  },
  {
    "Date": 20170609,
    "vis_team": "MIL",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170610,
    "vis_team": "MIL",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170611,
    "vis_team": "MIL",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 11
  },
  {
    "Date": 20170623,
    "vis_team": "PHI",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170624,
    "vis_team": "PHI",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170625,
    "vis_team": "PHI",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170626,
    "vis_team": "PHI",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170627,
    "vis_team": "SLN",
    "home_team": "ARI",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170628,
    "vis_team": "SLN",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170629,
    "vis_team": "SLN",
    "home_team": "ARI",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170630,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170701,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170702,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170707,
    "vis_team": "CIN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170708,
    "vis_team": "CIN",
    "home_team": "ARI",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170709,
    "vis_team": "CIN",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170721,
    "vis_team": "WAS",
    "home_team": "ARI",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170722,
    "vis_team": "WAS",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170723,
    "vis_team": "WAS",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170724,
    "vis_team": "ATL",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170725,
    "vis_team": "ATL",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170726,
    "vis_team": "ATL",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 10
  },
  {
    "Date": 20170808,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170809,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170810,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170811,
    "vis_team": "CHN",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170812,
    "vis_team": "CHN",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170813,
    "vis_team": "CHN",
    "home_team": "ARI",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170814,
    "vis_team": "HOU",
    "home_team": "ARI",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170815,
    "vis_team": "HOU",
    "home_team": "ARI",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170825,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170826,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170827,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 0,
    "home_score": 11
  },
  {
    "Date": 20170829,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170830,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170831,
    "vis_team": "LAN",
    "home_team": "ARI",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170908,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170909,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170910,
    "vis_team": "SDN",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170911,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170912,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170913,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170914,
    "vis_team": "COL",
    "home_team": "ARI",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170922,
    "vis_team": "MIA",
    "home_team": "ARI",
    "vis_score": 11,
    "home_score": 13
  },
  {
    "Date": 20170923,
    "vis_team": "MIA",
    "home_team": "ARI",
    "vis_score": 12,
    "home_score": 6
  },
  {
    "Date": 20170924,
    "vis_team": "MIA",
    "home_team": "ARI",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170925,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 9,
    "home_score": 2
  },
  {
    "Date": 20170926,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170927,
    "vis_team": "SFN",
    "home_team": "ARI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170414,
    "vis_team": "SDN",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170415,
    "vis_team": "SDN",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170416,
    "vis_team": "SDN",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170417,
    "vis_team": "SDN",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170418,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170419,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 14,
    "home_score": 4
  },
  {
    "Date": 20170420,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170501,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170502,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170503,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 16,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "SLN",
    "home_team": "ATL",
    "vis_score": 10,
    "home_score": 0
  },
  {
    "Date": 20170506,
    "vis_team": "SLN",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170507,
    "vis_team": "SLN",
    "home_team": "ATL",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170517,
    "vis_team": "TOR",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170518,
    "vis_team": "TOR",
    "home_team": "ATL",
    "vis_score": 9,
    "home_score": 0
  },
  {
    "Date": 20170519,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170520,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170521,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170522,
    "vis_team": "PIT",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170523,
    "vis_team": "PIT",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170524,
    "vis_team": "PIT",
    "home_team": "ATL",
    "vis_score": 12,
    "home_score": 5
  },
  {
    "Date": 20170525,
    "vis_team": "PIT",
    "home_team": "ATL",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170605,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170606,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170607,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 1,
    "home_score": 14
  },
  {
    "Date": 20170608,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170609,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170610,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170610,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170611,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170616,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170617,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170618,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170619,
    "vis_team": "SFN",
    "home_team": "ATL",
    "vis_score": 0,
    "home_score": 9
  },
  {
    "Date": 20170620,
    "vis_team": "SFN",
    "home_team": "ATL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170621,
    "vis_team": "SFN",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170622,
    "vis_team": "SFN",
    "home_team": "ATL",
    "vis_score": 11,
    "home_score": 12
  },
  {
    "Date": 20170623,
    "vis_team": "MIL",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170624,
    "vis_team": "MIL",
    "home_team": "ATL",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170625,
    "vis_team": "MIL",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170704,
    "vis_team": "HOU",
    "home_team": "ATL",
    "vis_score": 16,
    "home_score": 4
  },
  {
    "Date": 20170705,
    "vis_team": "HOU",
    "home_team": "ATL",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170714,
    "vis_team": "ARI",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170715,
    "vis_team": "ARI",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170716,
    "vis_team": "ARI",
    "home_team": "ATL",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170717,
    "vis_team": "CHN",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170718,
    "vis_team": "CHN",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170719,
    "vis_team": "CHN",
    "home_team": "ATL",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170801,
    "vis_team": "LAN",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170802,
    "vis_team": "LAN",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170803,
    "vis_team": "LAN",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170804,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170805,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170806,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170808,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170809,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170818,
    "vis_team": "CIN",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170819,
    "vis_team": "CIN",
    "home_team": "ATL",
    "vis_score": 11,
    "home_score": 8
  },
  {
    "Date": 20170820,
    "vis_team": "CIN",
    "home_team": "ATL",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170821,
    "vis_team": "SEA",
    "home_team": "ATL",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170822,
    "vis_team": "SEA",
    "home_team": "ATL",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170823,
    "vis_team": "SEA",
    "home_team": "ATL",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170825,
    "vis_team": "COL",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170826,
    "vis_team": "COL",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170827,
    "vis_team": "COL",
    "home_team": "ATL",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170904,
    "vis_team": "TEX",
    "home_team": "ATL",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170906,
    "vis_team": "TEX",
    "home_team": "ATL",
    "vis_score": 12,
    "home_score": 8
  },
  {
    "Date": 20170906,
    "vis_team": "TEX",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170907,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170908,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170909,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170910,
    "vis_team": "MIA",
    "home_team": "ATL",
    "vis_score": 8,
    "home_score": 10
  },
  {
    "Date": 20170915,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170916,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170917,
    "vis_team": "NYN",
    "home_team": "ATL",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170919,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170920,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170921,
    "vis_team": "WAS",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170922,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170923,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170924,
    "vis_team": "PHI",
    "home_team": "ATL",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170403,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170405,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170407,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170408,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170409,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170421,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170422,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170423,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170424,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170425,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170426,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "CHA",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170506,
    "vis_team": "CHA",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170507,
    "vis_team": "CHA",
    "home_team": "BAL",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170508,
    "vis_team": "WAS",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170509,
    "vis_team": "WAS",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170519,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170520,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170521,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170522,
    "vis_team": "MIN",
    "home_team": "BAL",
    "vis_score": 14,
    "home_score": 7
  },
  {
    "Date": 20170523,
    "vis_team": "MIN",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170524,
    "vis_team": "MIN",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170529,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170530,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170531,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170601,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170602,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170603,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170604,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170606,
    "vis_team": "PIT",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170607,
    "vis_team": "PIT",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170616,
    "vis_team": "SLN",
    "home_team": "BAL",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170617,
    "vis_team": "SLN",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 15
  },
  {
    "Date": 20170618,
    "vis_team": "SLN",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170619,
    "vis_team": "CLE",
    "home_team": "BAL",
    "vis_score": 12,
    "home_score": 0
  },
  {
    "Date": 20170620,
    "vis_team": "CLE",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170621,
    "vis_team": "CLE",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170622,
    "vis_team": "CLE",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170630,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170701,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170702,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170714,
    "vis_team": "CHN",
    "home_team": "BAL",
    "vis_score": 9,
    "home_score": 8
  },
  {
    "Date": 20170715,
    "vis_team": "CHN",
    "home_team": "BAL",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170716,
    "vis_team": "CHN",
    "home_team": "BAL",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170717,
    "vis_team": "TEX",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170718,
    "vis_team": "TEX",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 12
  },
  {
    "Date": 20170719,
    "vis_team": "TEX",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170720,
    "vis_team": "TEX",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170721,
    "vis_team": "HOU",
    "home_team": "BAL",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170722,
    "vis_team": "HOU",
    "home_team": "BAL",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170723,
    "vis_team": "HOU",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170731,
    "vis_team": "KCA",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170801,
    "vis_team": "KCA",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170802,
    "vis_team": "KCA",
    "home_team": "BAL",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170803,
    "vis_team": "DET",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170804,
    "vis_team": "DET",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170805,
    "vis_team": "DET",
    "home_team": "BAL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170806,
    "vis_team": "DET",
    "home_team": "BAL",
    "vis_score": 3,
    "home_score": 12
  },
  {
    "Date": 20170818,
    "vis_team": "ANA",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170819,
    "vis_team": "ANA",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170820,
    "vis_team": "ANA",
    "home_team": "BAL",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170821,
    "vis_team": "OAK",
    "home_team": "BAL",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170822,
    "vis_team": "OAK",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170823,
    "vis_team": "OAK",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170828,
    "vis_team": "SEA",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170829,
    "vis_team": "SEA",
    "home_team": "BAL",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170830,
    "vis_team": "SEA",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170831,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 11,
    "home_score": 8
  },
  {
    "Date": 20170901,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170902,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170903,
    "vis_team": "TOR",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170904,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170905,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170907,
    "vis_team": "NYA",
    "home_team": "BAL",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170918,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 10,
    "home_score": 8
  },
  {
    "Date": 20170919,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170920,
    "vis_team": "BOS",
    "home_team": "BAL",
    "vis_score": 9,
    "home_score": 0
  },
  {
    "Date": 20170921,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170922,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170923,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170924,
    "vis_team": "TBA",
    "home_team": "BAL",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170403,
    "vis_team": "PIT",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170405,
    "vis_team": "PIT",
    "home_team": "BOS",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170411,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170412,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 12,
    "home_score": 5
  },
  {
    "Date": 20170413,
    "vis_team": "PIT",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170414,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170415,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170416,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170417,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170426,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170427,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170428,
    "vis_team": "CHN",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170429,
    "vis_team": "CHN",
    "home_team": "BOS",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170430,
    "vis_team": "CHN",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170501,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170502,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170503,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170504,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170512,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170513,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170514,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170523,
    "vis_team": "TEX",
    "home_team": "BOS",
    "vis_score": 6,
    "home_score": 11
  },
  {
    "Date": 20170524,
    "vis_team": "TEX",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170525,
    "vis_team": "TEX",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170526,
    "vis_team": "SEA",
    "home_team": "BOS",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170527,
    "vis_team": "SEA",
    "home_team": "BOS",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170528,
    "vis_team": "SEA",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170609,
    "vis_team": "DET",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170610,
    "vis_team": "DET",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170611,
    "vis_team": "DET",
    "home_team": "BOS",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170612,
    "vis_team": "PHI",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170613,
    "vis_team": "PHI",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170623,
    "vis_team": "ANA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170624,
    "vis_team": "ANA",
    "home_team": "BOS",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170625,
    "vis_team": "ANA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170626,
    "vis_team": "MIN",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170627,
    "vis_team": "MIN",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170628,
    "vis_team": "MIN",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170629,
    "vis_team": "MIN",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170714,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170715,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170716,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170716,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170717,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170718,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170719,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170720,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170728,
    "vis_team": "KCA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170729,
    "vis_team": "KCA",
    "home_team": "BOS",
    "vis_score": 8,
    "home_score": 9
  },
  {
    "Date": 20170730,
    "vis_team": "KCA",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170731,
    "vis_team": "CLE",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170801,
    "vis_team": "CLE",
    "home_team": "BOS",
    "vis_score": 10,
    "home_score": 12
  },
  {
    "Date": 20170803,
    "vis_team": "CHA",
    "home_team": "BOS",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170804,
    "vis_team": "CHA",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170805,
    "vis_team": "CHA",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170806,
    "vis_team": "CHA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170814,
    "vis_team": "CLE",
    "home_team": "BOS",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170815,
    "vis_team": "SLN",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170816,
    "vis_team": "SLN",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170818,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170819,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170820,
    "vis_team": "NYA",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170825,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 16,
    "home_score": 3
  },
  {
    "Date": 20170826,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170827,
    "vis_team": "BAL",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170904,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170905,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170906,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170908,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170909,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 0,
    "home_score": 9
  },
  {
    "Date": 20170910,
    "vis_team": "TBA",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170912,
    "vis_team": "OAK",
    "home_team": "BOS",
    "vis_score": 1,
    "home_score": 11
  },
  {
    "Date": 20170913,
    "vis_team": "OAK",
    "home_team": "BOS",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170914,
    "vis_team": "OAK",
    "home_team": "BOS",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170925,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170926,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170927,
    "vis_team": "TOR",
    "home_team": "BOS",
    "vis_score": 7,
    "home_score": 10
  },
  {
    "Date": 20170928,
    "vis_team": "HOU",
    "home_team": "BOS",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170929,
    "vis_team": "HOU",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170930,
    "vis_team": "HOU",
    "home_team": "BOS",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20171001,
    "vis_team": "HOU",
    "home_team": "BOS",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170404,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170406,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 11
  },
  {
    "Date": 20170407,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170408,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170409,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170421,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170422,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170423,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170424,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 12
  },
  {
    "Date": 20170425,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170426,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170509,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170511,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170512,
    "vis_team": "SDN",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170513,
    "vis_team": "SDN",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170514,
    "vis_team": "SDN",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170526,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170527,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170527,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170528,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170529,
    "vis_team": "BOS",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170530,
    "vis_team": "BOS",
    "home_team": "CHA",
    "vis_score": 13,
    "home_score": 7
  },
  {
    "Date": 20170531,
    "vis_team": "BOS",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170612,
    "vis_team": "BAL",
    "home_team": "CHA",
    "vis_score": 7,
    "home_score": 10
  },
  {
    "Date": 20170613,
    "vis_team": "BAL",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170614,
    "vis_team": "BAL",
    "home_team": "CHA",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170615,
    "vis_team": "BAL",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170623,
    "vis_team": "OAK",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170624,
    "vis_team": "OAK",
    "home_team": "CHA",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170625,
    "vis_team": "OAK",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170626,
    "vis_team": "NYA",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170627,
    "vis_team": "NYA",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170628,
    "vis_team": "NYA",
    "home_team": "CHA",
    "vis_score": 12,
    "home_score": 3
  },
  {
    "Date": 20170629,
    "vis_team": "NYA",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170630,
    "vis_team": "TEX",
    "home_team": "CHA",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170701,
    "vis_team": "TEX",
    "home_team": "CHA",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170702,
    "vis_team": "TEX",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170714,
    "vis_team": "SEA",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170715,
    "vis_team": "SEA",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170716,
    "vis_team": "SEA",
    "home_team": "CHA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170718,
    "vis_team": "LAN",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170719,
    "vis_team": "LAN",
    "home_team": "CHA",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170726,
    "vis_team": "CHN",
    "home_team": "CHA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170727,
    "vis_team": "CHN",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170728,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 9,
    "home_score": 3
  },
  {
    "Date": 20170729,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170730,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170731,
    "vis_team": "TOR",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170801,
    "vis_team": "TOR",
    "home_team": "CHA",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170802,
    "vis_team": "TOR",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170808,
    "vis_team": "HOU",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170809,
    "vis_team": "HOU",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170810,
    "vis_team": "HOU",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170811,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170812,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170813,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 14,
    "home_score": 6
  },
  {
    "Date": 20170821,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170821,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170822,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170823,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170824,
    "vis_team": "MIN",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170825,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170826,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170827,
    "vis_team": "DET",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170901,
    "vis_team": "TBA",
    "home_team": "CHA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170902,
    "vis_team": "TBA",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170903,
    "vis_team": "TBA",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170904,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170905,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170906,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170907,
    "vis_team": "CLE",
    "home_team": "CHA",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170908,
    "vis_team": "SFN",
    "home_team": "CHA",
    "vis_score": 9,
    "home_score": 2
  },
  {
    "Date": 20170909,
    "vis_team": "SFN",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 13
  },
  {
    "Date": 20170910,
    "vis_team": "SFN",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170922,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170923,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170924,
    "vis_team": "KCA",
    "home_team": "CHA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170925,
    "vis_team": "ANA",
    "home_team": "CHA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170926,
    "vis_team": "ANA",
    "home_team": "CHA",
    "vis_score": 9,
    "home_score": 3
  },
  {
    "Date": 20170927,
    "vis_team": "ANA",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170928,
    "vis_team": "ANA",
    "home_team": "CHA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170410,
    "vis_team": "LAN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170412,
    "vis_team": "LAN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170413,
    "vis_team": "LAN",
    "home_team": "CHN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170414,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170415,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170416,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170417,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170418,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170419,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170501,
    "vis_team": "PHI",
    "home_team": "CHN",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170502,
    "vis_team": "PHI",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170503,
    "vis_team": "PHI",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170504,
    "vis_team": "PHI",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "NYA",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170506,
    "vis_team": "NYA",
    "home_team": "CHN",
    "vis_score": 11,
    "home_score": 6
  },
  {
    "Date": 20170507,
    "vis_team": "NYA",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170516,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170517,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170518,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170519,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170521,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 13
  },
  {
    "Date": 20170522,
    "vis_team": "SFN",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170523,
    "vis_team": "SFN",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170524,
    "vis_team": "SFN",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170525,
    "vis_team": "SFN",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170602,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170603,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170604,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170605,
    "vis_team": "MIA",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170606,
    "vis_team": "MIA",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170607,
    "vis_team": "MIA",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170608,
    "vis_team": "COL",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170609,
    "vis_team": "COL",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170610,
    "vis_team": "COL",
    "home_team": "CHN",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170611,
    "vis_team": "COL",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170619,
    "vis_team": "SDN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170620,
    "vis_team": "SDN",
    "home_team": "CHN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170621,
    "vis_team": "SDN",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170704,
    "vis_team": "TBA",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170705,
    "vis_team": "TBA",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170706,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170707,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170708,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170709,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 14,
    "home_score": 3
  },
  {
    "Date": 20170721,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170722,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170723,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170724,
    "vis_team": "CHA",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170725,
    "vis_team": "CHA",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170801,
    "vis_team": "ARI",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 16
  },
  {
    "Date": 20170802,
    "vis_team": "ARI",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170803,
    "vis_team": "ARI",
    "home_team": "CHN",
    "vis_score": 10,
    "home_score": 8
  },
  {
    "Date": 20170804,
    "vis_team": "WAS",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170805,
    "vis_team": "WAS",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170806,
    "vis_team": "WAS",
    "home_team": "CHN",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170814,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 15
  },
  {
    "Date": 20170815,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170816,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170817,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 13,
    "home_score": 10
  },
  {
    "Date": 20170818,
    "vis_team": "TOR",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170819,
    "vis_team": "TOR",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170820,
    "vis_team": "TOR",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170828,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170829,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170830,
    "vis_team": "PIT",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 17
  },
  {
    "Date": 20170831,
    "vis_team": "ATL",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170901,
    "vis_team": "ATL",
    "home_team": "CHN",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170902,
    "vis_team": "ATL",
    "home_team": "CHN",
    "vis_score": 12,
    "home_score": 14
  },
  {
    "Date": 20170903,
    "vis_team": "ATL",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170908,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170909,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 15,
    "home_score": 2
  },
  {
    "Date": 20170910,
    "vis_team": "MIL",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170912,
    "vis_team": "NYN",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170913,
    "vis_team": "NYN",
    "home_team": "CHN",
    "vis_score": 5,
    "home_score": 17
  },
  {
    "Date": 20170914,
    "vis_team": "NYN",
    "home_team": "CHN",
    "vis_score": 6,
    "home_score": 14
  },
  {
    "Date": 20170915,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170916,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170917,
    "vis_team": "SLN",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170929,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170930,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 0,
    "home_score": 9
  },
  {
    "Date": 20171001,
    "vis_team": "CIN",
    "home_team": "CHN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170403,
    "vis_team": "PHI",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170405,
    "vis_team": "PHI",
    "home_team": "CIN",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170406,
    "vis_team": "PHI",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170413,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170414,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170415,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170416,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170418,
    "vis_team": "BAL",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170419,
    "vis_team": "BAL",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170420,
    "vis_team": "BAL",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170421,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170422,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 12,
    "home_score": 8
  },
  {
    "Date": 20170423,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170501,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170502,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 12,
    "home_score": 3
  },
  {
    "Date": 20170503,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170504,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170505,
    "vis_team": "SFN",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 13
  },
  {
    "Date": 20170506,
    "vis_team": "SFN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 14
  },
  {
    "Date": 20170507,
    "vis_team": "SFN",
    "home_team": "CIN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170508,
    "vis_team": "NYA",
    "home_team": "CIN",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170509,
    "vis_team": "NYA",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170519,
    "vis_team": "COL",
    "home_team": "CIN",
    "vis_score": 12,
    "home_score": 6
  },
  {
    "Date": 20170520,
    "vis_team": "COL",
    "home_team": "CIN",
    "vis_score": 8,
    "home_score": 12
  },
  {
    "Date": 20170521,
    "vis_team": "COL",
    "home_team": "CIN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170522,
    "vis_team": "CLE",
    "home_team": "CIN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170523,
    "vis_team": "CLE",
    "home_team": "CIN",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170602,
    "vis_team": "ATL",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170603,
    "vis_team": "ATL",
    "home_team": "CIN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170604,
    "vis_team": "ATL",
    "home_team": "CIN",
    "vis_score": 13,
    "home_score": 8
  },
  {
    "Date": 20170605,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170606,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 1,
    "home_score": 13
  },
  {
    "Date": 20170607,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170608,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170616,
    "vis_team": "LAN",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170617,
    "vis_team": "LAN",
    "home_team": "CIN",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170618,
    "vis_team": "LAN",
    "home_team": "CIN",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170627,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170628,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170629,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170630,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170701,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170702,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170714,
    "vis_team": "WAS",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170715,
    "vis_team": "WAS",
    "home_team": "CIN",
    "vis_score": 10,
    "home_score": 7
  },
  {
    "Date": 20170716,
    "vis_team": "WAS",
    "home_team": "CIN",
    "vis_score": 14,
    "home_score": 4
  },
  {
    "Date": 20170717,
    "vis_team": "WAS",
    "home_team": "CIN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170718,
    "vis_team": "ARI",
    "home_team": "CIN",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170719,
    "vis_team": "ARI",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170720,
    "vis_team": "ARI",
    "home_team": "CIN",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170721,
    "vis_team": "MIA",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170722,
    "vis_team": "MIA",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170723,
    "vis_team": "MIA",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170804,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170805,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170806,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 13,
    "home_score": 4
  },
  {
    "Date": 20170807,
    "vis_team": "SDN",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170808,
    "vis_team": "SDN",
    "home_team": "CIN",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170809,
    "vis_team": "SDN",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170810,
    "vis_team": "SDN",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 10
  },
  {
    "Date": 20170822,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 13,
    "home_score": 9
  },
  {
    "Date": 20170823,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 9,
    "home_score": 3
  },
  {
    "Date": 20170824,
    "vis_team": "CHN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170825,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170826,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170827,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170829,
    "vis_team": "NYN",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 14
  },
  {
    "Date": 20170830,
    "vis_team": "NYN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170831,
    "vis_team": "NYN",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170904,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170905,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170906,
    "vis_team": "MIL",
    "home_team": "CIN",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170915,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170916,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170917,
    "vis_team": "PIT",
    "home_team": "CIN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170919,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170920,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 9,
    "home_score": 2
  },
  {
    "Date": 20170921,
    "vis_team": "SLN",
    "home_team": "CIN",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170922,
    "vis_team": "BOS",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170923,
    "vis_team": "BOS",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170924,
    "vis_team": "BOS",
    "home_team": "CIN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170411,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170412,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170413,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170414,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170415,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 13
  },
  {
    "Date": 20170416,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170425,
    "vis_team": "HOU",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170426,
    "vis_team": "HOU",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170427,
    "vis_team": "HOU",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170428,
    "vis_team": "SEA",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170429,
    "vis_team": "SEA",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170430,
    "vis_team": "SEA",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 12
  },
  {
    "Date": 20170512,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170513,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170514,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170515,
    "vis_team": "TBA",
    "home_team": "CLE",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170516,
    "vis_team": "TBA",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170517,
    "vis_team": "TBA",
    "home_team": "CLE",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170524,
    "vis_team": "CIN",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170526,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170527,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170528,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170529,
    "vis_team": "OAK",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170530,
    "vis_team": "OAK",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170531,
    "vis_team": "OAK",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170601,
    "vis_team": "OAK",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 8
  },
  {
    "Date": 20170609,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170610,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170611,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170613,
    "vis_team": "LAN",
    "home_team": "CLE",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170614,
    "vis_team": "LAN",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170615,
    "vis_team": "LAN",
    "home_team": "CLE",
    "vis_score": 5,
    "home_score": 12
  },
  {
    "Date": 20170623,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170624,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170625,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170626,
    "vis_team": "TEX",
    "home_team": "CLE",
    "vis_score": 9,
    "home_score": 15
  },
  {
    "Date": 20170627,
    "vis_team": "TEX",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170628,
    "vis_team": "TEX",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170629,
    "vis_team": "TEX",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170704,
    "vis_team": "SDN",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170705,
    "vis_team": "SDN",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170706,
    "vis_team": "SDN",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 11
  },
  {
    "Date": 20170707,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 11
  },
  {
    "Date": 20170708,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170709,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170721,
    "vis_team": "TOR",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 13
  },
  {
    "Date": 20170722,
    "vis_team": "TOR",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170723,
    "vis_team": "TOR",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170724,
    "vis_team": "CIN",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170725,
    "vis_team": "ANA",
    "home_team": "CLE",
    "vis_score": 7,
    "home_score": 11
  },
  {
    "Date": 20170726,
    "vis_team": "ANA",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170727,
    "vis_team": "ANA",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170803,
    "vis_team": "NYA",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170804,
    "vis_team": "NYA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170805,
    "vis_team": "NYA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170806,
    "vis_team": "NYA",
    "home_team": "CLE",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170808,
    "vis_team": "COL",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170809,
    "vis_team": "COL",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170821,
    "vis_team": "BOS",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170822,
    "vis_team": "BOS",
    "home_team": "CLE",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170823,
    "vis_team": "BOS",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170824,
    "vis_team": "BOS",
    "home_team": "CLE",
    "vis_score": 6,
    "home_score": 13
  },
  {
    "Date": 20170825,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170826,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170827,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 12
  },
  {
    "Date": 20170908,
    "vis_team": "BAL",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170909,
    "vis_team": "BAL",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170910,
    "vis_team": "BAL",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170911,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 11
  },
  {
    "Date": 20170912,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170913,
    "vis_team": "DET",
    "home_team": "CLE",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170914,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170915,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170916,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170917,
    "vis_team": "KCA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170926,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170927,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170928,
    "vis_team": "MIN",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170929,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170930,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20171001,
    "vis_team": "CHA",
    "home_team": "CLE",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170407,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170408,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170409,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170410,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170411,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170412,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170421,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170422,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 12
  },
  {
    "Date": 20170423,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 8
  },
  {
    "Date": 20170424,
    "vis_team": "WAS",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170425,
    "vis_team": "WAS",
    "home_team": "COL",
    "vis_score": 15,
    "home_score": 12
  },
  {
    "Date": 20170426,
    "vis_team": "WAS",
    "home_team": "COL",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170427,
    "vis_team": "WAS",
    "home_team": "COL",
    "vis_score": 16,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170506,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170507,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170509,
    "vis_team": "CHN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170509,
    "vis_team": "CHN",
    "home_team": "COL",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170510,
    "vis_team": "CHN",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170511,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 7,
    "home_score": 10
  },
  {
    "Date": 20170512,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170513,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170514,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170526,
    "vis_team": "SLN",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 10
  },
  {
    "Date": 20170527,
    "vis_team": "SLN",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170528,
    "vis_team": "SLN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170529,
    "vis_team": "SEA",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170530,
    "vis_team": "SEA",
    "home_team": "COL",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170606,
    "vis_team": "CLE",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170607,
    "vis_team": "CLE",
    "home_team": "COL",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170615,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 9,
    "home_score": 10
  },
  {
    "Date": 20170616,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 8,
    "home_score": 10
  },
  {
    "Date": 20170617,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170618,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170620,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170621,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 16,
    "home_score": 5
  },
  {
    "Date": 20170622,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170703,
    "vis_team": "CIN",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170704,
    "vis_team": "CIN",
    "home_team": "COL",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170705,
    "vis_team": "CIN",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170706,
    "vis_team": "CIN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170707,
    "vis_team": "CHA",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 12
  },
  {
    "Date": 20170708,
    "vis_team": "CHA",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170709,
    "vis_team": "CHA",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 10
  },
  {
    "Date": 20170717,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170718,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170719,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 18
  },
  {
    "Date": 20170721,
    "vis_team": "PIT",
    "home_team": "COL",
    "vis_score": 13,
    "home_score": 5
  },
  {
    "Date": 20170722,
    "vis_team": "PIT",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170723,
    "vis_team": "PIT",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 13
  },
  {
    "Date": 20170801,
    "vis_team": "NYN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170802,
    "vis_team": "NYN",
    "home_team": "COL",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170803,
    "vis_team": "NYN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170804,
    "vis_team": "PHI",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170805,
    "vis_team": "PHI",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170806,
    "vis_team": "PHI",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170814,
    "vis_team": "ATL",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170815,
    "vis_team": "ATL",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170816,
    "vis_team": "ATL",
    "home_team": "COL",
    "vis_score": 2,
    "home_score": 17
  },
  {
    "Date": 20170817,
    "vis_team": "ATL",
    "home_team": "COL",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170818,
    "vis_team": "MIL",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170819,
    "vis_team": "MIL",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170820,
    "vis_team": "MIL",
    "home_team": "COL",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170828,
    "vis_team": "DET",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170829,
    "vis_team": "DET",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170830,
    "vis_team": "DET",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170901,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 9,
    "home_score": 5
  },
  {
    "Date": 20170902,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170903,
    "vis_team": "ARI",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170904,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170905,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170906,
    "vis_team": "SFN",
    "home_team": "COL",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170915,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170916,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 16
  },
  {
    "Date": 20170917,
    "vis_team": "SDN",
    "home_team": "COL",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170925,
    "vis_team": "MIA",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170926,
    "vis_team": "MIA",
    "home_team": "COL",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170927,
    "vis_team": "MIA",
    "home_team": "COL",
    "vis_score": 9,
    "home_score": 15
  },
  {
    "Date": 20170929,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170930,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20171001,
    "vis_team": "LAN",
    "home_team": "COL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170407,
    "vis_team": "BOS",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170408,
    "vis_team": "BOS",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170409,
    "vis_team": "BOS",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170410,
    "vis_team": "BOS",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170411,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170412,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170413,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 11,
    "home_score": 5
  },
  {
    "Date": 20170425,
    "vis_team": "SEA",
    "home_team": "DET",
    "vis_score": 9,
    "home_score": 19
  },
  {
    "Date": 20170426,
    "vis_team": "SEA",
    "home_team": "DET",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170427,
    "vis_team": "SEA",
    "home_team": "DET",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170428,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170429,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170430,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170501,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170502,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170503,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170516,
    "vis_team": "BAL",
    "home_team": "DET",
    "vis_score": 13,
    "home_score": 11
  },
  {
    "Date": 20170517,
    "vis_team": "BAL",
    "home_team": "DET",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170518,
    "vis_team": "BAL",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170519,
    "vis_team": "TEX",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170520,
    "vis_team": "TEX",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170521,
    "vis_team": "TEX",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170602,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 15
  },
  {
    "Date": 20170603,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170604,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170606,
    "vis_team": "ANA",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170607,
    "vis_team": "ANA",
    "home_team": "DET",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170608,
    "vis_team": "ANA",
    "home_team": "DET",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170613,
    "vis_team": "ARI",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170614,
    "vis_team": "ARI",
    "home_team": "DET",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170615,
    "vis_team": "TBA",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170616,
    "vis_team": "TBA",
    "home_team": "DET",
    "vis_score": 4,
    "home_score": 13
  },
  {
    "Date": 20170617,
    "vis_team": "TBA",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170618,
    "vis_team": "TBA",
    "home_team": "DET",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170627,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170628,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170629,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170701,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170701,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170702,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 11,
    "home_score": 8
  },
  {
    "Date": 20170704,
    "vis_team": "SFN",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170705,
    "vis_team": "SFN",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170706,
    "vis_team": "SFN",
    "home_team": "DET",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170714,
    "vis_team": "TOR",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170715,
    "vis_team": "TOR",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 11
  },
  {
    "Date": 20170716,
    "vis_team": "TOR",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170724,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170725,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170726,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 16,
    "home_score": 2
  },
  {
    "Date": 20170728,
    "vis_team": "HOU",
    "home_team": "DET",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170729,
    "vis_team": "HOU",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170730,
    "vis_team": "HOU",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 13
  },
  {
    "Date": 20170809,
    "vis_team": "PIT",
    "home_team": "DET",
    "vis_score": 0,
    "home_score": 10
  },
  {
    "Date": 20170810,
    "vis_team": "PIT",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170811,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170812,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 11,
    "home_score": 12
  },
  {
    "Date": 20170813,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170818,
    "vis_team": "LAN",
    "home_team": "DET",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170819,
    "vis_team": "LAN",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170820,
    "vis_team": "LAN",
    "home_team": "DET",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170822,
    "vis_team": "NYA",
    "home_team": "DET",
    "vis_score": 13,
    "home_score": 4
  },
  {
    "Date": 20170823,
    "vis_team": "NYA",
    "home_team": "DET",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170824,
    "vis_team": "NYA",
    "home_team": "DET",
    "vis_score": 6,
    "home_score": 10
  },
  {
    "Date": 20170901,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170901,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 10,
    "home_score": 0
  },
  {
    "Date": 20170902,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170903,
    "vis_team": "CLE",
    "home_team": "DET",
    "vis_score": 11,
    "home_score": 1
  },
  {
    "Date": 20170904,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170905,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 2,
    "home_score": 13
  },
  {
    "Date": 20170906,
    "vis_team": "KCA",
    "home_team": "DET",
    "vis_score": 13,
    "home_score": 2
  },
  {
    "Date": 20170914,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 17,
    "home_score": 7
  },
  {
    "Date": 20170915,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170916,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170917,
    "vis_team": "CHA",
    "home_team": "DET",
    "vis_score": 0,
    "home_score": 12
  },
  {
    "Date": 20170918,
    "vis_team": "OAK",
    "home_team": "DET",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170919,
    "vis_team": "OAK",
    "home_team": "DET",
    "vis_score": 9,
    "home_score": 8
  },
  {
    "Date": 20170920,
    "vis_team": "OAK",
    "home_team": "DET",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170921,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 12,
    "home_score": 1
  },
  {
    "Date": 20170922,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170923,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170924,
    "vis_team": "MIN",
    "home_team": "DET",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170403,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170404,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170405,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170406,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170407,
    "vis_team": "KCA",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170408,
    "vis_team": "KCA",
    "home_team": "HOU",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170409,
    "vis_team": "KCA",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170417,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170418,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170419,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170420,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170428,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170429,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170430,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170501,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170502,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170503,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170504,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170509,
    "vis_team": "ATL",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170510,
    "vis_team": "ATL",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170519,
    "vis_team": "CLE",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170520,
    "vis_team": "CLE",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170521,
    "vis_team": "CLE",
    "home_team": "HOU",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170522,
    "vis_team": "DET",
    "home_team": "HOU",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170523,
    "vis_team": "DET",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170524,
    "vis_team": "DET",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170525,
    "vis_team": "DET",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170526,
    "vis_team": "BAL",
    "home_team": "HOU",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170527,
    "vis_team": "BAL",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170528,
    "vis_team": "BAL",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170609,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170610,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170611,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 12,
    "home_score": 6
  },
  {
    "Date": 20170612,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170613,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170614,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 13
  },
  {
    "Date": 20170616,
    "vis_team": "BOS",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170617,
    "vis_team": "BOS",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170618,
    "vis_team": "BOS",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170627,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170628,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 8,
    "home_score": 11
  },
  {
    "Date": 20170629,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170630,
    "vis_team": "NYA",
    "home_team": "HOU",
    "vis_score": 13,
    "home_score": 4
  },
  {
    "Date": 20170701,
    "vis_team": "NYA",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170702,
    "vis_team": "NYA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170714,
    "vis_team": "MIN",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170715,
    "vis_team": "MIN",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170716,
    "vis_team": "MIN",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170717,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 9,
    "home_score": 7
  },
  {
    "Date": 20170718,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170719,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170731,
    "vis_team": "TBA",
    "home_team": "HOU",
    "vis_score": 7,
    "home_score": 14
  },
  {
    "Date": 20170801,
    "vis_team": "TBA",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170802,
    "vis_team": "TBA",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170803,
    "vis_team": "TBA",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170804,
    "vis_team": "TOR",
    "home_team": "HOU",
    "vis_score": 7,
    "home_score": 16
  },
  {
    "Date": 20170805,
    "vis_team": "TOR",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170806,
    "vis_team": "TOR",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170816,
    "vis_team": "ARI",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170817,
    "vis_team": "ARI",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170818,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170819,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170820,
    "vis_team": "OAK",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170822,
    "vis_team": "WAS",
    "home_team": "HOU",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170823,
    "vis_team": "WAS",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170824,
    "vis_team": "WAS",
    "home_team": "HOU",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170829,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170830,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170831,
    "vis_team": "TEX",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170902,
    "vis_team": "NYN",
    "home_team": "HOU",
    "vis_score": 8,
    "home_score": 12
  },
  {
    "Date": 20170902,
    "vis_team": "NYN",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170903,
    "vis_team": "NYN",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170915,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170916,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170917,
    "vis_team": "SEA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170919,
    "vis_team": "CHA",
    "home_team": "HOU",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170920,
    "vis_team": "CHA",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170921,
    "vis_team": "CHA",
    "home_team": "HOU",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170922,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170923,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170924,
    "vis_team": "ANA",
    "home_team": "HOU",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170410,
    "vis_team": "OAK",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170412,
    "vis_team": "OAK",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170413,
    "vis_team": "OAK",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170414,
    "vis_team": "ANA",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170415,
    "vis_team": "ANA",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170416,
    "vis_team": "ANA",
    "home_team": "KCA",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170418,
    "vis_team": "SFN",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170419,
    "vis_team": "SFN",
    "home_team": "KCA",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170428,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170430,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170501,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170502,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170503,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170504,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170505,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170506,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170507,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170512,
    "vis_team": "BAL",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170513,
    "vis_team": "BAL",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170514,
    "vis_team": "BAL",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 9
  },
  {
    "Date": 20170516,
    "vis_team": "NYA",
    "home_team": "KCA",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170517,
    "vis_team": "NYA",
    "home_team": "KCA",
    "vis_score": 11,
    "home_score": 7
  },
  {
    "Date": 20170518,
    "vis_team": "NYA",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170529,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 10,
    "home_score": 7
  },
  {
    "Date": 20170530,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170531,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170602,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170603,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 12
  },
  {
    "Date": 20170604,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170605,
    "vis_team": "HOU",
    "home_team": "KCA",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170606,
    "vis_team": "HOU",
    "home_team": "KCA",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170607,
    "vis_team": "HOU",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170608,
    "vis_team": "HOU",
    "home_team": "KCA",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170619,
    "vis_team": "BOS",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170620,
    "vis_team": "BOS",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170621,
    "vis_team": "BOS",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170623,
    "vis_team": "TOR",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170624,
    "vis_team": "TOR",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170625,
    "vis_team": "TOR",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170630,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170701,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 6,
    "home_score": 11
  },
  {
    "Date": 20170701,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170702,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170714,
    "vis_team": "TEX",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170715,
    "vis_team": "TEX",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170716,
    "vis_team": "TEX",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170717,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170718,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 9,
    "home_score": 3
  },
  {
    "Date": 20170719,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170720,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 16
  },
  {
    "Date": 20170721,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170722,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170723,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170803,
    "vis_team": "SEA",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170804,
    "vis_team": "SEA",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170806,
    "vis_team": "SEA",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170806,
    "vis_team": "SEA",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170807,
    "vis_team": "SLN",
    "home_team": "KCA",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170808,
    "vis_team": "SLN",
    "home_team": "KCA",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170818,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 10,
    "home_score": 1
  },
  {
    "Date": 20170819,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170820,
    "vis_team": "CLE",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170822,
    "vis_team": "COL",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170823,
    "vis_team": "COL",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170824,
    "vis_team": "COL",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170828,
    "vis_team": "TBA",
    "home_team": "KCA",
    "vis_score": 12,
    "home_score": 0
  },
  {
    "Date": 20170829,
    "vis_team": "TBA",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170830,
    "vis_team": "TBA",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170907,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170908,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170909,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170910,
    "vis_team": "MIN",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170911,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170912,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170913,
    "vis_team": "CHA",
    "home_team": "KCA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170926,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170927,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170928,
    "vis_team": "DET",
    "home_team": "KCA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170929,
    "vis_team": "ARI",
    "home_team": "KCA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170930,
    "vis_team": "ARI",
    "home_team": "KCA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20171001,
    "vis_team": "ARI",
    "home_team": "KCA",
    "vis_score": 14,
    "home_score": 2
  },
  {
    "Date": 20170403,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 14
  },
  {
    "Date": 20170404,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170405,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170406,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170414,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170415,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170416,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170417,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170418,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170419,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170428,
    "vis_team": "PHI",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170429,
    "vis_team": "PHI",
    "home_team": "LAN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170430,
    "vis_team": "PHI",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170501,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170502,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 5,
    "home_score": 13
  },
  {
    "Date": 20170503,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170508,
    "vis_team": "PIT",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 12
  },
  {
    "Date": 20170509,
    "vis_team": "PIT",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170510,
    "vis_team": "PIT",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170518,
    "vis_team": "MIA",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170519,
    "vis_team": "MIA",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170520,
    "vis_team": "MIA",
    "home_team": "LAN",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170521,
    "vis_team": "MIA",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170523,
    "vis_team": "SLN",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170524,
    "vis_team": "SLN",
    "home_team": "LAN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170525,
    "vis_team": "SLN",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170526,
    "vis_team": "CHN",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170527,
    "vis_team": "CHN",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170528,
    "vis_team": "CHN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170605,
    "vis_team": "WAS",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170606,
    "vis_team": "WAS",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170607,
    "vis_team": "WAS",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170609,
    "vis_team": "CIN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170610,
    "vis_team": "CIN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170611,
    "vis_team": "CIN",
    "home_team": "LAN",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170619,
    "vis_team": "NYN",
    "home_team": "LAN",
    "vis_score": 6,
    "home_score": 10
  },
  {
    "Date": 20170620,
    "vis_team": "NYN",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 12
  },
  {
    "Date": 20170621,
    "vis_team": "NYN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170622,
    "vis_team": "NYN",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170623,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170624,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170625,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 6,
    "home_score": 12
  },
  {
    "Date": 20170626,
    "vis_team": "ANA",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170627,
    "vis_team": "ANA",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170704,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170705,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170706,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170707,
    "vis_team": "KCA",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170708,
    "vis_team": "KCA",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170709,
    "vis_team": "KCA",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170720,
    "vis_team": "ATL",
    "home_team": "LAN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170721,
    "vis_team": "ATL",
    "home_team": "LAN",
    "vis_score": 12,
    "home_score": 3
  },
  {
    "Date": 20170722,
    "vis_team": "ATL",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170723,
    "vis_team": "ATL",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170724,
    "vis_team": "MIN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170725,
    "vis_team": "MIN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170726,
    "vis_team": "MIN",
    "home_team": "LAN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170728,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170729,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170730,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170811,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170812,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170813,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170815,
    "vis_team": "CHA",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170816,
    "vis_team": "CHA",
    "home_team": "LAN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170825,
    "vis_team": "MIL",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170826,
    "vis_team": "MIL",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170827,
    "vis_team": "MIL",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170904,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 13,
    "home_score": 0
  },
  {
    "Date": 20170905,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170906,
    "vis_team": "ARI",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170907,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170908,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170909,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170910,
    "vis_team": "COL",
    "home_team": "LAN",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170922,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170923,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170924,
    "vis_team": "SFN",
    "home_team": "LAN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170925,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170926,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170927,
    "vis_team": "SDN",
    "home_team": "LAN",
    "vis_score": 0,
    "home_score": 10
  },
  {
    "Date": 20170411,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170412,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170413,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 9,
    "home_score": 8
  },
  {
    "Date": 20170414,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170415,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170416,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170428,
    "vis_team": "PIT",
    "home_team": "MIA",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170429,
    "vis_team": "PIT",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170430,
    "vis_team": "PIT",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 10
  },
  {
    "Date": 20170501,
    "vis_team": "TBA",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170502,
    "vis_team": "TBA",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170508,
    "vis_team": "SLN",
    "home_team": "MIA",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170509,
    "vis_team": "SLN",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170510,
    "vis_team": "SLN",
    "home_team": "MIA",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170512,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170513,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170514,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170515,
    "vis_team": "HOU",
    "home_team": "MIA",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170516,
    "vis_team": "HOU",
    "home_team": "MIA",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170517,
    "vis_team": "HOU",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170526,
    "vis_team": "ANA",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170527,
    "vis_team": "ANA",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170528,
    "vis_team": "ANA",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170529,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170530,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170531,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170601,
    "vis_team": "ARI",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170602,
    "vis_team": "ARI",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170603,
    "vis_team": "ARI",
    "home_team": "MIA",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170604,
    "vis_team": "ARI",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170613,
    "vis_team": "OAK",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170614,
    "vis_team": "OAK",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 11
  },
  {
    "Date": 20170619,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170620,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 12,
    "home_score": 3
  },
  {
    "Date": 20170621,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170622,
    "vis_team": "CHN",
    "home_team": "MIA",
    "vis_score": 11,
    "home_score": 1
  },
  {
    "Date": 20170623,
    "vis_team": "CHN",
    "home_team": "MIA",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170624,
    "vis_team": "CHN",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170625,
    "vis_team": "CHN",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170627,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170628,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170629,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170714,
    "vis_team": "LAN",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170715,
    "vis_team": "LAN",
    "home_team": "MIA",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170716,
    "vis_team": "LAN",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170717,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170718,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170719,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170727,
    "vis_team": "CIN",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170728,
    "vis_team": "CIN",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170729,
    "vis_team": "CIN",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170730,
    "vis_team": "CIN",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170731,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170801,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170802,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170811,
    "vis_team": "COL",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170812,
    "vis_team": "COL",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170813,
    "vis_team": "COL",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170814,
    "vis_team": "SFN",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170815,
    "vis_team": "SFN",
    "home_team": "MIA",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170816,
    "vis_team": "SFN",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170825,
    "vis_team": "SDN",
    "home_team": "MIA",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170826,
    "vis_team": "SDN",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170827,
    "vis_team": "SDN",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170831,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170901,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170902,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 9,
    "home_score": 10
  },
  {
    "Date": 20170903,
    "vis_team": "PHI",
    "home_team": "MIA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170904,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170905,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170906,
    "vis_team": "WAS",
    "home_team": "MIA",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170915,
    "vis_team": "MIL",
    "home_team": "MIA",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170916,
    "vis_team": "MIL",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170917,
    "vis_team": "MIL",
    "home_team": "MIA",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170918,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 13
  },
  {
    "Date": 20170919,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170920,
    "vis_team": "NYN",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170928,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170929,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170930,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20171001,
    "vis_team": "ATL",
    "home_team": "MIA",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170403,
    "vis_team": "COL",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170404,
    "vis_team": "COL",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170405,
    "vis_team": "COL",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170406,
    "vis_team": "COL",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170407,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170408,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 11,
    "home_score": 6
  },
  {
    "Date": 20170409,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170420,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170421,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170422,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170423,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170424,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 11
  },
  {
    "Date": 20170425,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170426,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170428,
    "vis_team": "ATL",
    "home_team": "MIL",
    "vis_score": 10,
    "home_score": 8
  },
  {
    "Date": 20170429,
    "vis_team": "ATL",
    "home_team": "MIL",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170430,
    "vis_team": "ATL",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170509,
    "vis_team": "BOS",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 11
  },
  {
    "Date": 20170510,
    "vis_team": "BOS",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170511,
    "vis_team": "BOS",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170512,
    "vis_team": "NYN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170513,
    "vis_team": "NYN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170514,
    "vis_team": "NYN",
    "home_team": "MIL",
    "vis_score": 9,
    "home_score": 11
  },
  {
    "Date": 20170523,
    "vis_team": "TOR",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170524,
    "vis_team": "TOR",
    "home_team": "MIL",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170525,
    "vis_team": "ARI",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170526,
    "vis_team": "ARI",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170527,
    "vis_team": "ARI",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170528,
    "vis_team": "ARI",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170602,
    "vis_team": "LAN",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170603,
    "vis_team": "LAN",
    "home_team": "MIL",
    "vis_score": 10,
    "home_score": 8
  },
  {
    "Date": 20170604,
    "vis_team": "LAN",
    "home_team": "MIL",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170605,
    "vis_team": "SFN",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170606,
    "vis_team": "SFN",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170607,
    "vis_team": "SFN",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170608,
    "vis_team": "SFN",
    "home_team": "MIL",
    "vis_score": 9,
    "home_score": 5
  },
  {
    "Date": 20170616,
    "vis_team": "SDN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170617,
    "vis_team": "SDN",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170618,
    "vis_team": "SDN",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170619,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170620,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170621,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170622,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170630,
    "vis_team": "MIA",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170701,
    "vis_team": "MIA",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170702,
    "vis_team": "MIA",
    "home_team": "MIL",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170703,
    "vis_team": "BAL",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170704,
    "vis_team": "BAL",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170705,
    "vis_team": "BAL",
    "home_team": "MIL",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170714,
    "vis_team": "PHI",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170715,
    "vis_team": "PHI",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170716,
    "vis_team": "PHI",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170728,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170729,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170730,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170801,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170802,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170803,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170809,
    "vis_team": "MIN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170810,
    "vis_team": "MIN",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170811,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 11,
    "home_score": 10
  },
  {
    "Date": 20170812,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170813,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170815,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170816,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170829,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170830,
    "vis_team": "SLN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170831,
    "vis_team": "WAS",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170901,
    "vis_team": "WAS",
    "home_team": "MIL",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170902,
    "vis_team": "WAS",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170903,
    "vis_team": "WAS",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170911,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170912,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170913,
    "vis_team": "PIT",
    "home_team": "MIL",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170921,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170922,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170923,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170924,
    "vis_team": "CHN",
    "home_team": "MIL",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170926,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170927,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170928,
    "vis_team": "CIN",
    "home_team": "MIL",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170403,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170405,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170406,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170414,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170415,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170416,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170417,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170418,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170420,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170421,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170422,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170423,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 13,
    "home_score": 4
  },
  {
    "Date": 20170502,
    "vis_team": "OAK",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170503,
    "vis_team": "OAK",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170504,
    "vis_team": "OAK",
    "home_team": "MIN",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "BOS",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170506,
    "vis_team": "BOS",
    "home_team": "MIN",
    "vis_score": 11,
    "home_score": 1
  },
  {
    "Date": 20170507,
    "vis_team": "BOS",
    "home_team": "MIN",
    "vis_score": 17,
    "home_score": 6
  },
  {
    "Date": 20170516,
    "vis_team": "COL",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170518,
    "vis_team": "COL",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170518,
    "vis_team": "COL",
    "home_team": "MIN",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170519,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170521,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170521,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170526,
    "vis_team": "TBA",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170527,
    "vis_team": "TBA",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170528,
    "vis_team": "TBA",
    "home_team": "MIN",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170529,
    "vis_team": "HOU",
    "home_team": "MIN",
    "vis_score": 16,
    "home_score": 8
  },
  {
    "Date": 20170530,
    "vis_team": "HOU",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170531,
    "vis_team": "HOU",
    "home_team": "MIN",
    "vis_score": 17,
    "home_score": 6
  },
  {
    "Date": 20170612,
    "vis_team": "SEA",
    "home_team": "MIN",
    "vis_score": 14,
    "home_score": 3
  },
  {
    "Date": 20170613,
    "vis_team": "SEA",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 20
  },
  {
    "Date": 20170614,
    "vis_team": "SEA",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170615,
    "vis_team": "SEA",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170616,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170617,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 9,
    "home_score": 3
  },
  {
    "Date": 20170617,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170618,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170620,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170621,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170622,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 9,
    "home_score": 0
  },
  {
    "Date": 20170703,
    "vis_team": "ANA",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170704,
    "vis_team": "ANA",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170705,
    "vis_team": "ANA",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170706,
    "vis_team": "BAL",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170707,
    "vis_team": "BAL",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170708,
    "vis_team": "BAL",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170709,
    "vis_team": "BAL",
    "home_team": "MIN",
    "vis_score": 11,
    "home_score": 5
  },
  {
    "Date": 20170717,
    "vis_team": "NYA",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170718,
    "vis_team": "NYA",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170719,
    "vis_team": "NYA",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170721,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170722,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170723,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170803,
    "vis_team": "TEX",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170804,
    "vis_team": "TEX",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170805,
    "vis_team": "TEX",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170806,
    "vis_team": "TEX",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170807,
    "vis_team": "MIL",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170808,
    "vis_team": "MIL",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170815,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170817,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 9,
    "home_score": 3
  },
  {
    "Date": 20170817,
    "vis_team": "CLE",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170818,
    "vis_team": "ARI",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 10
  },
  {
    "Date": 20170819,
    "vis_team": "ARI",
    "home_team": "MIN",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170820,
    "vis_team": "ARI",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 12
  },
  {
    "Date": 20170829,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170830,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 11
  },
  {
    "Date": 20170831,
    "vis_team": "CHA",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170901,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170902,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 0,
    "home_score": 17
  },
  {
    "Date": 20170903,
    "vis_team": "KCA",
    "home_team": "MIN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170912,
    "vis_team": "SDN",
    "home_team": "MIN",
    "vis_score": 0,
    "home_score": 16
  },
  {
    "Date": 20170913,
    "vis_team": "SDN",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170914,
    "vis_team": "TOR",
    "home_team": "MIN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170915,
    "vis_team": "TOR",
    "home_team": "MIN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170916,
    "vis_team": "TOR",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170917,
    "vis_team": "TOR",
    "home_team": "MIN",
    "vis_score": 7,
    "home_score": 13
  },
  {
    "Date": 20170929,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170930,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20171001,
    "vis_team": "DET",
    "home_team": "MIN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170410,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170412,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170413,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170414,
    "vis_team": "SLN",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170415,
    "vis_team": "SLN",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170416,
    "vis_team": "SLN",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170417,
    "vis_team": "CHA",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170418,
    "vis_team": "CHA",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170419,
    "vis_team": "CHA",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170428,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 11,
    "home_score": 14
  },
  {
    "Date": 20170429,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 12
  },
  {
    "Date": 20170430,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170501,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170502,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 11
  },
  {
    "Date": 20170503,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170511,
    "vis_team": "HOU",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170512,
    "vis_team": "HOU",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170514,
    "vis_team": "HOU",
    "home_team": "NYA",
    "vis_score": 6,
    "home_score": 11
  },
  {
    "Date": 20170514,
    "vis_team": "HOU",
    "home_team": "NYA",
    "vis_score": 10,
    "home_score": 7
  },
  {
    "Date": 20170522,
    "vis_team": "KCA",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170523,
    "vis_team": "KCA",
    "home_team": "NYA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170524,
    "vis_team": "KCA",
    "home_team": "NYA",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170526,
    "vis_team": "OAK",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170527,
    "vis_team": "OAK",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170528,
    "vis_team": "OAK",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170606,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170607,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 0,
    "home_score": 8
  },
  {
    "Date": 20170608,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170609,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170610,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 16
  },
  {
    "Date": 20170611,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 14
  },
  {
    "Date": 20170620,
    "vis_team": "ANA",
    "home_team": "NYA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170621,
    "vis_team": "ANA",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170622,
    "vis_team": "ANA",
    "home_team": "NYA",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170623,
    "vis_team": "TEX",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170624,
    "vis_team": "TEX",
    "home_team": "NYA",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170625,
    "vis_team": "TEX",
    "home_team": "NYA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170703,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170704,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170705,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170707,
    "vis_team": "MIL",
    "home_team": "NYA",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170708,
    "vis_team": "MIL",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170709,
    "vis_team": "MIL",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170725,
    "vis_team": "CIN",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170726,
    "vis_team": "CIN",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170727,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170728,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170729,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170730,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170731,
    "vis_team": "DET",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170801,
    "vis_team": "DET",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170802,
    "vis_team": "DET",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170811,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170812,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170813,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170814,
    "vis_team": "NYN",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170815,
    "vis_team": "NYN",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170825,
    "vis_team": "SEA",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170826,
    "vis_team": "SEA",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170827,
    "vis_team": "SEA",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170828,
    "vis_team": "CLE",
    "home_team": "NYA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170830,
    "vis_team": "CLE",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170830,
    "vis_team": "CLE",
    "home_team": "NYA",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170831,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170901,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170902,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170903,
    "vis_team": "BOS",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170914,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 5,
    "home_score": 13
  },
  {
    "Date": 20170915,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170916,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170917,
    "vis_team": "BAL",
    "home_team": "NYA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170918,
    "vis_team": "MIN",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170919,
    "vis_team": "MIN",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170920,
    "vis_team": "MIN",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170925,
    "vis_team": "KCA",
    "home_team": "NYA",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170926,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170927,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170928,
    "vis_team": "TBA",
    "home_team": "NYA",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170929,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170930,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20171001,
    "vis_team": "TOR",
    "home_team": "NYA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170403,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170405,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170406,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170407,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170408,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170409,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170418,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170419,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170420,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170421,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170422,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170423,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170426,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170427,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170506,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170507,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170508,
    "vis_team": "SFN",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170509,
    "vis_team": "SFN",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170510,
    "vis_team": "SFN",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170519,
    "vis_team": "ANA",
    "home_team": "NYN",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170520,
    "vis_team": "ANA",
    "home_team": "NYN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170521,
    "vis_team": "ANA",
    "home_team": "NYN",
    "vis_score": 12,
    "home_score": 5
  },
  {
    "Date": 20170523,
    "vis_team": "SDN",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170524,
    "vis_team": "SDN",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170525,
    "vis_team": "SDN",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170529,
    "vis_team": "MIL",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170530,
    "vis_team": "MIL",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170531,
    "vis_team": "MIL",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170601,
    "vis_team": "MIL",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170602,
    "vis_team": "PIT",
    "home_team": "NYN",
    "vis_score": 12,
    "home_score": 7
  },
  {
    "Date": 20170603,
    "vis_team": "PIT",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170604,
    "vis_team": "PIT",
    "home_team": "NYN",
    "vis_score": 11,
    "home_score": 1
  },
  {
    "Date": 20170612,
    "vis_team": "CHN",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170613,
    "vis_team": "CHN",
    "home_team": "NYN",
    "vis_score": 14,
    "home_score": 3
  },
  {
    "Date": 20170614,
    "vis_team": "CHN",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170615,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170616,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170617,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170618,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170630,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170701,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170702,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170714,
    "vis_team": "COL",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 14
  },
  {
    "Date": 20170715,
    "vis_team": "COL",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170716,
    "vis_team": "COL",
    "home_team": "NYN",
    "vis_score": 13,
    "home_score": 4
  },
  {
    "Date": 20170717,
    "vis_team": "SLN",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170718,
    "vis_team": "SLN",
    "home_team": "NYN",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170719,
    "vis_team": "SLN",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170720,
    "vis_team": "SLN",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170721,
    "vis_team": "OAK",
    "home_team": "NYN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170722,
    "vis_team": "OAK",
    "home_team": "NYN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170723,
    "vis_team": "OAK",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170804,
    "vis_team": "LAN",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170805,
    "vis_team": "LAN",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170806,
    "vis_team": "LAN",
    "home_team": "NYN",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170808,
    "vis_team": "TEX",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170809,
    "vis_team": "TEX",
    "home_team": "NYN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170816,
    "vis_team": "NYA",
    "home_team": "NYN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170817,
    "vis_team": "NYA",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170818,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170819,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170820,
    "vis_team": "MIA",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170821,
    "vis_team": "ARI",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170822,
    "vis_team": "ARI",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170823,
    "vis_team": "ARI",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170824,
    "vis_team": "ARI",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170904,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 7,
    "home_score": 11
  },
  {
    "Date": 20170905,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170906,
    "vis_team": "PHI",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170907,
    "vis_team": "CIN",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170908,
    "vis_team": "CIN",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170909,
    "vis_team": "CIN",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170910,
    "vis_team": "CIN",
    "home_team": "NYN",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170922,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170923,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170924,
    "vis_team": "WAS",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170925,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 9,
    "home_score": 2
  },
  {
    "Date": 20170925,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170926,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170927,
    "vis_team": "ATL",
    "home_team": "NYN",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170403,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170404,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170405,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170406,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170414,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170415,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170417,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170418,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170419,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170420,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170421,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170422,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170423,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 11,
    "home_score": 1
  },
  {
    "Date": 20170505,
    "vis_team": "DET",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170506,
    "vis_team": "DET",
    "home_team": "OAK",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170507,
    "vis_team": "DET",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170508,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170509,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170510,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170518,
    "vis_team": "BOS",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170519,
    "vis_team": "BOS",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170520,
    "vis_team": "BOS",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170521,
    "vis_team": "BOS",
    "home_team": "OAK",
    "vis_score": 12,
    "home_score": 3
  },
  {
    "Date": 20170523,
    "vis_team": "MIA",
    "home_team": "OAK",
    "vis_score": 11,
    "home_score": 9
  },
  {
    "Date": 20170524,
    "vis_team": "MIA",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170602,
    "vis_team": "WAS",
    "home_team": "OAK",
    "vis_score": 13,
    "home_score": 3
  },
  {
    "Date": 20170603,
    "vis_team": "WAS",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170604,
    "vis_team": "WAS",
    "home_team": "OAK",
    "vis_score": 11,
    "home_score": 10
  },
  {
    "Date": 20170605,
    "vis_team": "TOR",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170606,
    "vis_team": "TOR",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170607,
    "vis_team": "TOR",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170615,
    "vis_team": "NYA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170616,
    "vis_team": "NYA",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170617,
    "vis_team": "NYA",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170618,
    "vis_team": "NYA",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170619,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170620,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170621,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170622,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 12,
    "home_score": 9
  },
  {
    "Date": 20170630,
    "vis_team": "ATL",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170701,
    "vis_team": "ATL",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170702,
    "vis_team": "ATL",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170703,
    "vis_team": "CHA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170704,
    "vis_team": "CHA",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170705,
    "vis_team": "CHA",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170714,
    "vis_team": "CLE",
    "home_team": "OAK",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170715,
    "vis_team": "CLE",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170716,
    "vis_team": "CLE",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170717,
    "vis_team": "TBA",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170718,
    "vis_team": "TBA",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170719,
    "vis_team": "TBA",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170728,
    "vis_team": "MIN",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170729,
    "vis_team": "MIN",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170730,
    "vis_team": "MIN",
    "home_team": "OAK",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170731,
    "vis_team": "SFN",
    "home_team": "OAK",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170801,
    "vis_team": "SFN",
    "home_team": "OAK",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170808,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170809,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170810,
    "vis_team": "BAL",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170811,
    "vis_team": "BAL",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170812,
    "vis_team": "BAL",
    "home_team": "OAK",
    "vis_score": 12,
    "home_score": 5
  },
  {
    "Date": 20170813,
    "vis_team": "BAL",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170814,
    "vis_team": "KCA",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170815,
    "vis_team": "KCA",
    "home_team": "OAK",
    "vis_score": 8,
    "home_score": 10
  },
  {
    "Date": 20170816,
    "vis_team": "KCA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170825,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170826,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170827,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170904,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 11,
    "home_score": 9
  },
  {
    "Date": 20170905,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170906,
    "vis_team": "ANA",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170908,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 8,
    "home_score": 9
  },
  {
    "Date": 20170909,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 11
  },
  {
    "Date": 20170909,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170910,
    "vis_team": "HOU",
    "home_team": "OAK",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170922,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170923,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170924,
    "vis_team": "TEX",
    "home_team": "OAK",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170925,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170926,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170927,
    "vis_team": "SEA",
    "home_team": "OAK",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170407,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170408,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 17
  },
  {
    "Date": 20170409,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170410,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170411,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 14,
    "home_score": 4
  },
  {
    "Date": 20170412,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170421,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170422,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170423,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170426,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170427,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170505,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170506,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170507,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170509,
    "vis_team": "SEA",
    "home_team": "PHI",
    "vis_score": 10,
    "home_score": 9
  },
  {
    "Date": 20170510,
    "vis_team": "SEA",
    "home_team": "PHI",
    "vis_score": 11,
    "home_score": 6
  },
  {
    "Date": 20170522,
    "vis_team": "COL",
    "home_team": "PHI",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170523,
    "vis_team": "COL",
    "home_team": "PHI",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170524,
    "vis_team": "COL",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170525,
    "vis_team": "COL",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170526,
    "vis_team": "CIN",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170527,
    "vis_team": "CIN",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170528,
    "vis_team": "CIN",
    "home_team": "PHI",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170602,
    "vis_team": "SFN",
    "home_team": "PHI",
    "vis_score": 10,
    "home_score": 0
  },
  {
    "Date": 20170603,
    "vis_team": "SFN",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170604,
    "vis_team": "SFN",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 9
  },
  {
    "Date": 20170614,
    "vis_team": "BOS",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170615,
    "vis_team": "BOS",
    "home_team": "PHI",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170616,
    "vis_team": "ARI",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170617,
    "vis_team": "ARI",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170618,
    "vis_team": "ARI",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170620,
    "vis_team": "SLN",
    "home_team": "PHI",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170621,
    "vis_team": "SLN",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170622,
    "vis_team": "SLN",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170703,
    "vis_team": "PIT",
    "home_team": "PHI",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170704,
    "vis_team": "PIT",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170705,
    "vis_team": "PIT",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170706,
    "vis_team": "PIT",
    "home_team": "PHI",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170707,
    "vis_team": "SDN",
    "home_team": "PHI",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170708,
    "vis_team": "SDN",
    "home_team": "PHI",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170709,
    "vis_team": "SDN",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170721,
    "vis_team": "MIL",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170722,
    "vis_team": "MIL",
    "home_team": "PHI",
    "vis_score": 9,
    "home_score": 8
  },
  {
    "Date": 20170723,
    "vis_team": "MIL",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170724,
    "vis_team": "HOU",
    "home_team": "PHI",
    "vis_score": 13,
    "home_score": 4
  },
  {
    "Date": 20170725,
    "vis_team": "HOU",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170726,
    "vis_team": "HOU",
    "home_team": "PHI",
    "vis_score": 0,
    "home_score": 9
  },
  {
    "Date": 20170728,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 10
  },
  {
    "Date": 20170729,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170730,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170731,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170810,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 10,
    "home_score": 0
  },
  {
    "Date": 20170811,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170812,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170813,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170822,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 12,
    "home_score": 8
  },
  {
    "Date": 20170822,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170823,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 0,
    "home_score": 8
  },
  {
    "Date": 20170824,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 9,
    "home_score": 8
  },
  {
    "Date": 20170825,
    "vis_team": "CHN",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170826,
    "vis_team": "CHN",
    "home_team": "PHI",
    "vis_score": 17,
    "home_score": 2
  },
  {
    "Date": 20170827,
    "vis_team": "CHN",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170828,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170830,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170830,
    "vis_team": "ATL",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170912,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 8,
    "home_score": 9
  },
  {
    "Date": 20170913,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170914,
    "vis_team": "MIA",
    "home_team": "PHI",
    "vis_score": 0,
    "home_score": 10
  },
  {
    "Date": 20170915,
    "vis_team": "OAK",
    "home_team": "PHI",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170916,
    "vis_team": "OAK",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170917,
    "vis_team": "OAK",
    "home_team": "PHI",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170918,
    "vis_team": "LAN",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170919,
    "vis_team": "LAN",
    "home_team": "PHI",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170920,
    "vis_team": "LAN",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170921,
    "vis_team": "LAN",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170925,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170926,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170927,
    "vis_team": "WAS",
    "home_team": "PHI",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170929,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170930,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20171001,
    "vis_team": "NYN",
    "home_team": "PHI",
    "vis_score": 0,
    "home_score": 11
  },
  {
    "Date": 20170407,
    "vis_team": "ATL",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170408,
    "vis_team": "ATL",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170409,
    "vis_team": "ATL",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170410,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170411,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170412,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 9,
    "home_score": 2
  },
  {
    "Date": 20170421,
    "vis_team": "NYA",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170422,
    "vis_team": "NYA",
    "home_team": "PIT",
    "vis_score": 11,
    "home_score": 5
  },
  {
    "Date": 20170423,
    "vis_team": "NYA",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170424,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 14,
    "home_score": 3
  },
  {
    "Date": 20170425,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170426,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170505,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170506,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170507,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170516,
    "vis_team": "WAS",
    "home_team": "PIT",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170517,
    "vis_team": "WAS",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170518,
    "vis_team": "WAS",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170519,
    "vis_team": "PHI",
    "home_team": "PIT",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170520,
    "vis_team": "PHI",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170521,
    "vis_team": "PHI",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170526,
    "vis_team": "NYN",
    "home_team": "PIT",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170527,
    "vis_team": "NYN",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170528,
    "vis_team": "NYN",
    "home_team": "PIT",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170529,
    "vis_team": "ARI",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170530,
    "vis_team": "ARI",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170531,
    "vis_team": "ARI",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170608,
    "vis_team": "MIA",
    "home_team": "PIT",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170609,
    "vis_team": "MIA",
    "home_team": "PIT",
    "vis_score": 12,
    "home_score": 7
  },
  {
    "Date": 20170610,
    "vis_team": "MIA",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170611,
    "vis_team": "MIA",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170612,
    "vis_team": "COL",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170613,
    "vis_team": "COL",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170614,
    "vis_team": "COL",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170616,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 9,
    "home_score": 5
  },
  {
    "Date": 20170617,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170618,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170627,
    "vis_team": "TBA",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170628,
    "vis_team": "TBA",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170629,
    "vis_team": "TBA",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170630,
    "vis_team": "SFN",
    "home_team": "PIT",
    "vis_score": 13,
    "home_score": 5
  },
  {
    "Date": 20170701,
    "vis_team": "SFN",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170702,
    "vis_team": "SFN",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170714,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170715,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170716,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170717,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170718,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170719,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170720,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170801,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170802,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170803,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170804,
    "vis_team": "SDN",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 10
  },
  {
    "Date": 20170805,
    "vis_team": "SDN",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170806,
    "vis_team": "SDN",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170807,
    "vis_team": "DET",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170808,
    "vis_team": "DET",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170817,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 11,
    "home_score": 7
  },
  {
    "Date": 20170818,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 11,
    "home_score": 10
  },
  {
    "Date": 20170819,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170820,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170821,
    "vis_team": "LAN",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170822,
    "vis_team": "LAN",
    "home_team": "PIT",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170823,
    "vis_team": "LAN",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170824,
    "vis_team": "LAN",
    "home_team": "PIT",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170901,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170902,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170903,
    "vis_team": "CIN",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170904,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 0,
    "home_score": 12
  },
  {
    "Date": 20170905,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170906,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170907,
    "vis_team": "CHN",
    "home_team": "PIT",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170918,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170919,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170920,
    "vis_team": "MIL",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170922,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170923,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 6,
    "home_score": 11
  },
  {
    "Date": 20170924,
    "vis_team": "SLN",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170926,
    "vis_team": "BAL",
    "home_team": "PIT",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170927,
    "vis_team": "BAL",
    "home_team": "PIT",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170407,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170408,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170409,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170418,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170419,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170420,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170421,
    "vis_team": "MIA",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170422,
    "vis_team": "MIA",
    "home_team": "SDN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170423,
    "vis_team": "MIA",
    "home_team": "SDN",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170502,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170503,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170504,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170505,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170506,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170508,
    "vis_team": "TEX",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170509,
    "vis_team": "TEX",
    "home_team": "SDN",
    "vis_score": 11,
    "home_score": 0
  },
  {
    "Date": 20170515,
    "vis_team": "MIL",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170516,
    "vis_team": "MIL",
    "home_team": "SDN",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170517,
    "vis_team": "MIL",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170518,
    "vis_team": "MIL",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170519,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 10,
    "home_score": 1
  },
  {
    "Date": 20170520,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 9,
    "home_score": 1
  },
  {
    "Date": 20170521,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170529,
    "vis_team": "CHN",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170530,
    "vis_team": "CHN",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170531,
    "vis_team": "CHN",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170602,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170603,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 10,
    "home_score": 1
  },
  {
    "Date": 20170604,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170609,
    "vis_team": "KCA",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170610,
    "vis_team": "KCA",
    "home_team": "SDN",
    "vis_score": 12,
    "home_score": 6
  },
  {
    "Date": 20170611,
    "vis_team": "KCA",
    "home_team": "SDN",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170612,
    "vis_team": "CIN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170613,
    "vis_team": "CIN",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170614,
    "vis_team": "CIN",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170623,
    "vis_team": "DET",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170624,
    "vis_team": "DET",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170625,
    "vis_team": "DET",
    "home_team": "SDN",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170627,
    "vis_team": "ATL",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170628,
    "vis_team": "ATL",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170629,
    "vis_team": "ATL",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170630,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170701,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170702,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170714,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170715,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170716,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170724,
    "vis_team": "NYN",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170725,
    "vis_team": "NYN",
    "home_team": "SDN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170726,
    "vis_team": "NYN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170727,
    "vis_team": "NYN",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170728,
    "vis_team": "PIT",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170729,
    "vis_team": "PIT",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170730,
    "vis_team": "PIT",
    "home_team": "SDN",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170801,
    "vis_team": "MIN",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170802,
    "vis_team": "MIN",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170814,
    "vis_team": "PHI",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170815,
    "vis_team": "PHI",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170816,
    "vis_team": "PHI",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170817,
    "vis_team": "WAS",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170818,
    "vis_team": "WAS",
    "home_team": "SDN",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170819,
    "vis_team": "WAS",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170820,
    "vis_team": "WAS",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170828,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170829,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170830,
    "vis_team": "SFN",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170901,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170902,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170902,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170903,
    "vis_team": "LAN",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170904,
    "vis_team": "SLN",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170905,
    "vis_team": "SLN",
    "home_team": "SDN",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170906,
    "vis_team": "SLN",
    "home_team": "SDN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170907,
    "vis_team": "SLN",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170918,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170919,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170920,
    "vis_team": "ARI",
    "home_team": "SDN",
    "vis_score": 13,
    "home_score": 7
  },
  {
    "Date": 20170921,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170922,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170923,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170924,
    "vis_team": "COL",
    "home_team": "SDN",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170410,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170411,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170412,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 10,
    "home_score": 5
  },
  {
    "Date": 20170414,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170415,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170416,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170417,
    "vis_team": "MIA",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170418,
    "vis_team": "MIA",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170419,
    "vis_team": "MIA",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170502,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170503,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170504,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170505,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170506,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170507,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170515,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170516,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170517,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170518,
    "vis_team": "CHA",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170519,
    "vis_team": "CHA",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170520,
    "vis_team": "CHA",
    "home_team": "SEA",
    "vis_score": 16,
    "home_score": 1
  },
  {
    "Date": 20170521,
    "vis_team": "CHA",
    "home_team": "SEA",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170531,
    "vis_team": "COL",
    "home_team": "SEA",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170601,
    "vis_team": "COL",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170602,
    "vis_team": "TBA",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 12
  },
  {
    "Date": 20170603,
    "vis_team": "TBA",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170604,
    "vis_team": "TBA",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170606,
    "vis_team": "MIN",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 12
  },
  {
    "Date": 20170607,
    "vis_team": "MIN",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170608,
    "vis_team": "MIN",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170609,
    "vis_team": "TOR",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170610,
    "vis_team": "TOR",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170611,
    "vis_team": "TOR",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170619,
    "vis_team": "DET",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170620,
    "vis_team": "DET",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170621,
    "vis_team": "DET",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170622,
    "vis_team": "DET",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 9
  },
  {
    "Date": 20170623,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 13
  },
  {
    "Date": 20170624,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170625,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170627,
    "vis_team": "PHI",
    "home_team": "SEA",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170628,
    "vis_team": "PHI",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170703,
    "vis_team": "KCA",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170704,
    "vis_team": "KCA",
    "home_team": "SEA",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170705,
    "vis_team": "KCA",
    "home_team": "SEA",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170706,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170707,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170708,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170709,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170720,
    "vis_team": "NYA",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170721,
    "vis_team": "NYA",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170722,
    "vis_team": "NYA",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170723,
    "vis_team": "NYA",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170724,
    "vis_team": "BOS",
    "home_team": "SEA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170725,
    "vis_team": "BOS",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170726,
    "vis_team": "BOS",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170728,
    "vis_team": "NYN",
    "home_team": "SEA",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170729,
    "vis_team": "NYN",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170730,
    "vis_team": "NYN",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 9
  },
  {
    "Date": 20170810,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170811,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170812,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170813,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170814,
    "vis_team": "BAL",
    "home_team": "SEA",
    "vis_score": 11,
    "home_score": 3
  },
  {
    "Date": 20170815,
    "vis_team": "BAL",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170816,
    "vis_team": "BAL",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170901,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170902,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170903,
    "vis_team": "OAK",
    "home_team": "SEA",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170904,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170905,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170906,
    "vis_team": "HOU",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170908,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170909,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170910,
    "vis_team": "ANA",
    "home_team": "SEA",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170919,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170920,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 8,
    "home_score": 6
  },
  {
    "Date": 20170921,
    "vis_team": "TEX",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170922,
    "vis_team": "CLE",
    "home_team": "SEA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170923,
    "vis_team": "CLE",
    "home_team": "SEA",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170924,
    "vis_team": "CLE",
    "home_team": "SEA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170410,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170411,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170412,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170413,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170414,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170415,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170416,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170424,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170425,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170426,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170427,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170428,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170429,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 12,
    "home_score": 4
  },
  {
    "Date": 20170430,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170511,
    "vis_team": "CIN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170512,
    "vis_team": "CIN",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170513,
    "vis_team": "CIN",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170514,
    "vis_team": "CIN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170515,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170516,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170517,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170526,
    "vis_team": "ATL",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170527,
    "vis_team": "ATL",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170528,
    "vis_team": "ATL",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170529,
    "vis_team": "WAS",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170530,
    "vis_team": "WAS",
    "home_team": "SFN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170531,
    "vis_team": "WAS",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170609,
    "vis_team": "MIN",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170610,
    "vis_team": "MIN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170611,
    "vis_team": "MIN",
    "home_team": "SFN",
    "vis_score": 8,
    "home_score": 13
  },
  {
    "Date": 20170613,
    "vis_team": "KCA",
    "home_team": "SFN",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170614,
    "vis_team": "KCA",
    "home_team": "SFN",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170623,
    "vis_team": "NYN",
    "home_team": "SFN",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170624,
    "vis_team": "NYN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170625,
    "vis_team": "NYN",
    "home_team": "SFN",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170626,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 9
  },
  {
    "Date": 20170627,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170628,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170707,
    "vis_team": "MIA",
    "home_team": "SFN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170708,
    "vis_team": "MIA",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170709,
    "vis_team": "MIA",
    "home_team": "SFN",
    "vis_score": 10,
    "home_score": 8
  },
  {
    "Date": 20170717,
    "vis_team": "CLE",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170718,
    "vis_team": "CLE",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170719,
    "vis_team": "CLE",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170720,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170721,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 12,
    "home_score": 9
  },
  {
    "Date": 20170722,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170723,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170724,
    "vis_team": "PIT",
    "home_team": "SFN",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170725,
    "vis_team": "PIT",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 11
  },
  {
    "Date": 20170726,
    "vis_team": "PIT",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170802,
    "vis_team": "OAK",
    "home_team": "SFN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170803,
    "vis_team": "OAK",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 11
  },
  {
    "Date": 20170804,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170805,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170806,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170807,
    "vis_team": "CHN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170808,
    "vis_team": "CHN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170809,
    "vis_team": "CHN",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170817,
    "vis_team": "PHI",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170818,
    "vis_team": "PHI",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 10
  },
  {
    "Date": 20170819,
    "vis_team": "PHI",
    "home_team": "SFN",
    "vis_score": 12,
    "home_score": 9
  },
  {
    "Date": 20170820,
    "vis_team": "PHI",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170821,
    "vis_team": "MIL",
    "home_team": "SFN",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170822,
    "vis_team": "MIL",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170823,
    "vis_team": "MIL",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170831,
    "vis_team": "SLN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170901,
    "vis_team": "SLN",
    "home_team": "SFN",
    "vis_score": 11,
    "home_score": 6
  },
  {
    "Date": 20170902,
    "vis_team": "SLN",
    "home_team": "SFN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170903,
    "vis_team": "SLN",
    "home_team": "SFN",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170911,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170912,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170913,
    "vis_team": "LAN",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170915,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170916,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170917,
    "vis_team": "ARI",
    "home_team": "SFN",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170919,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170920,
    "vis_team": "COL",
    "home_team": "SFN",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170929,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 0,
    "home_score": 8
  },
  {
    "Date": 20170930,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20171001,
    "vis_team": "SDN",
    "home_team": "SFN",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170402,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170404,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170406,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170407,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170408,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170409,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170417,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170418,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170419,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170425,
    "vis_team": "TOR",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170427,
    "vis_team": "TOR",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170427,
    "vis_team": "TOR",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170428,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170430,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170501,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170502,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170504,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170512,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170513,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170514,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 5
  },
  {
    "Date": 20170516,
    "vis_team": "BOS",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170517,
    "vis_team": "BOS",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170519,
    "vis_team": "SFN",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170520,
    "vis_team": "SFN",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170521,
    "vis_team": "SFN",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170529,
    "vis_team": "LAN",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170530,
    "vis_team": "LAN",
    "home_team": "SLN",
    "vis_score": 9,
    "home_score": 4
  },
  {
    "Date": 20170531,
    "vis_team": "LAN",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170601,
    "vis_team": "LAN",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170609,
    "vis_team": "PHI",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170610,
    "vis_team": "PHI",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170611,
    "vis_team": "PHI",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170613,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170613,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170614,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170615,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170623,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170624,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170625,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170626,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170630,
    "vis_team": "WAS",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170701,
    "vis_team": "WAS",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170702,
    "vis_team": "WAS",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170703,
    "vis_team": "MIA",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 14
  },
  {
    "Date": 20170704,
    "vis_team": "MIA",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170705,
    "vis_team": "MIA",
    "home_team": "SLN",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170706,
    "vis_team": "MIA",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170707,
    "vis_team": "NYN",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170708,
    "vis_team": "NYN",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170709,
    "vis_team": "NYN",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170724,
    "vis_team": "COL",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170725,
    "vis_team": "COL",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170726,
    "vis_team": "COL",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170727,
    "vis_team": "ARI",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170728,
    "vis_team": "ARI",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170729,
    "vis_team": "ARI",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170730,
    "vis_team": "ARI",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170809,
    "vis_team": "KCA",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170810,
    "vis_team": "KCA",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 8
  },
  {
    "Date": 20170811,
    "vis_team": "ATL",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170812,
    "vis_team": "ATL",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170813,
    "vis_team": "ATL",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170822,
    "vis_team": "SDN",
    "home_team": "SLN",
    "vis_score": 12,
    "home_score": 4
  },
  {
    "Date": 20170823,
    "vis_team": "SDN",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170824,
    "vis_team": "SDN",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170825,
    "vis_team": "TBA",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170826,
    "vis_team": "TBA",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170827,
    "vis_team": "TBA",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170908,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170909,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170910,
    "vis_team": "PIT",
    "home_team": "SLN",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170912,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 4,
    "home_score": 13
  },
  {
    "Date": 20170913,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170914,
    "vis_team": "CIN",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170925,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 10,
    "home_score": 2
  },
  {
    "Date": 20170926,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170927,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170928,
    "vis_team": "CHN",
    "home_team": "SLN",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170929,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170930,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20171001,
    "vis_team": "MIL",
    "home_team": "SLN",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170402,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170404,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170405,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170406,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170407,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 8,
    "home_score": 10
  },
  {
    "Date": 20170408,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170409,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170418,
    "vis_team": "DET",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170419,
    "vis_team": "DET",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170420,
    "vis_team": "DET",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170421,
    "vis_team": "HOU",
    "home_team": "TBA",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170422,
    "vis_team": "HOU",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170423,
    "vis_team": "HOU",
    "home_team": "TBA",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170503,
    "vis_team": "MIA",
    "home_team": "TBA",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170504,
    "vis_team": "MIA",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170505,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 8,
    "home_score": 4
  },
  {
    "Date": 20170506,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170507,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170508,
    "vis_team": "KCA",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170509,
    "vis_team": "KCA",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170510,
    "vis_team": "KCA",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 12
  },
  {
    "Date": 20170511,
    "vis_team": "KCA",
    "home_team": "TBA",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170519,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170520,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170521,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170522,
    "vis_team": "ANA",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170523,
    "vis_team": "ANA",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170524,
    "vis_team": "ANA",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170525,
    "vis_team": "ANA",
    "home_team": "TBA",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170606,
    "vis_team": "CHA",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170607,
    "vis_team": "CHA",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170608,
    "vis_team": "CHA",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170609,
    "vis_team": "OAK",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 13
  },
  {
    "Date": 20170610,
    "vis_team": "OAK",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170610,
    "vis_team": "OAK",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170611,
    "vis_team": "OAK",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170619,
    "vis_team": "CIN",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170620,
    "vis_team": "CIN",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170621,
    "vis_team": "CIN",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170623,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 15
  },
  {
    "Date": 20170624,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170625,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170706,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170707,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 8,
    "home_score": 3
  },
  {
    "Date": 20170708,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170709,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170721,
    "vis_team": "TEX",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170722,
    "vis_team": "TEX",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170723,
    "vis_team": "TEX",
    "home_team": "TBA",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170724,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170725,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170726,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170804,
    "vis_team": "MIL",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170805,
    "vis_team": "MIL",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170806,
    "vis_team": "MIL",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170808,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170809,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170810,
    "vis_team": "CLE",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170811,
    "vis_team": "CLE",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 0
  },
  {
    "Date": 20170812,
    "vis_team": "CLE",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170813,
    "vis_team": "CLE",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170818,
    "vis_team": "SEA",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170819,
    "vis_team": "SEA",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170820,
    "vis_team": "SEA",
    "home_team": "TBA",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170822,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170823,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170824,
    "vis_team": "TOR",
    "home_team": "TBA",
    "vis_score": 0,
    "home_score": 2
  },
  {
    "Date": 20170904,
    "vis_team": "MIN",
    "home_team": "TBA",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170905,
    "vis_team": "MIN",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170906,
    "vis_team": "MIN",
    "home_team": "TBA",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170911,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170912,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170913,
    "vis_team": "NYA",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170915,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 13,
    "home_score": 6
  },
  {
    "Date": 20170916,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170917,
    "vis_team": "BOS",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170919,
    "vis_team": "CHN",
    "home_team": "TBA",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170920,
    "vis_team": "CHN",
    "home_team": "TBA",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170929,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 0,
    "home_score": 7
  },
  {
    "Date": 20170930,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20171001,
    "vis_team": "BAL",
    "home_team": "TBA",
    "vis_score": 0,
    "home_score": 6
  },
  {
    "Date": 20170403,
    "vis_team": "CLE",
    "home_team": "TEX",
    "vis_score": 8,
    "home_score": 5
  },
  {
    "Date": 20170404,
    "vis_team": "CLE",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170405,
    "vis_team": "CLE",
    "home_team": "TEX",
    "vis_score": 9,
    "home_score": 6
  },
  {
    "Date": 20170407,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170408,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170409,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170420,
    "vis_team": "KCA",
    "home_team": "TEX",
    "vis_score": 0,
    "home_score": 1
  },
  {
    "Date": 20170421,
    "vis_team": "KCA",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170422,
    "vis_team": "KCA",
    "home_team": "TEX",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170423,
    "vis_team": "KCA",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170424,
    "vis_team": "MIN",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170425,
    "vis_team": "MIN",
    "home_team": "TEX",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170426,
    "vis_team": "MIN",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 14
  },
  {
    "Date": 20170428,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170429,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 6
  },
  {
    "Date": 20170430,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170510,
    "vis_team": "SDN",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170511,
    "vis_team": "SDN",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170512,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170513,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170514,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170516,
    "vis_team": "PHI",
    "home_team": "TEX",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170517,
    "vis_team": "PHI",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 9
  },
  {
    "Date": 20170518,
    "vis_team": "PHI",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170529,
    "vis_team": "TBA",
    "home_team": "TEX",
    "vis_score": 10,
    "home_score": 8
  },
  {
    "Date": 20170530,
    "vis_team": "TBA",
    "home_team": "TEX",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170531,
    "vis_team": "TBA",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170602,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170603,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170604,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170606,
    "vis_team": "NYN",
    "home_team": "TEX",
    "vis_score": 8,
    "home_score": 10
  },
  {
    "Date": 20170607,
    "vis_team": "NYN",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170616,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170617,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170618,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170619,
    "vis_team": "TOR",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 6
  },
  {
    "Date": 20170620,
    "vis_team": "TOR",
    "home_team": "TEX",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170621,
    "vis_team": "TOR",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170622,
    "vis_team": "TOR",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170703,
    "vis_team": "BOS",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170704,
    "vis_team": "BOS",
    "home_team": "TEX",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170705,
    "vis_team": "BOS",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170707,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 0,
    "home_score": 10
  },
  {
    "Date": 20170708,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170709,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170724,
    "vis_team": "MIA",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170725,
    "vis_team": "MIA",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170726,
    "vis_team": "MIA",
    "home_team": "TEX",
    "vis_score": 22,
    "home_score": 10
  },
  {
    "Date": 20170728,
    "vis_team": "BAL",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170729,
    "vis_team": "BAL",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 0
  },
  {
    "Date": 20170730,
    "vis_team": "BAL",
    "home_team": "TEX",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170731,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170801,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170802,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170811,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170812,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170813,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170814,
    "vis_team": "DET",
    "home_team": "TEX",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170815,
    "vis_team": "DET",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 10
  },
  {
    "Date": 20170816,
    "vis_team": "DET",
    "home_team": "TEX",
    "vis_score": 6,
    "home_score": 12
  },
  {
    "Date": 20170817,
    "vis_team": "CHA",
    "home_team": "TEX",
    "vis_score": 8,
    "home_score": 9
  },
  {
    "Date": 20170818,
    "vis_team": "CHA",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170819,
    "vis_team": "CHA",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 17
  },
  {
    "Date": 20170820,
    "vis_team": "CHA",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170901,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 9,
    "home_score": 10
  },
  {
    "Date": 20170902,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170903,
    "vis_team": "ANA",
    "home_team": "TEX",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170908,
    "vis_team": "NYA",
    "home_team": "TEX",
    "vis_score": 5,
    "home_score": 11
  },
  {
    "Date": 20170909,
    "vis_team": "NYA",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170910,
    "vis_team": "NYA",
    "home_team": "TEX",
    "vis_score": 16,
    "home_score": 7
  },
  {
    "Date": 20170911,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170912,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 10,
    "home_score": 3
  },
  {
    "Date": 20170913,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170914,
    "vis_team": "SEA",
    "home_team": "TEX",
    "vis_score": 10,
    "home_score": 4
  },
  {
    "Date": 20170925,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 11,
    "home_score": 2
  },
  {
    "Date": 20170926,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 14,
    "home_score": 3
  },
  {
    "Date": 20170927,
    "vis_team": "HOU",
    "home_team": "TEX",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170928,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170929,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170930,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20171001,
    "vis_team": "OAK",
    "home_team": "TEX",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170411,
    "vis_team": "MIL",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170412,
    "vis_team": "MIL",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170413,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170414,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170415,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170416,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170418,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 8,
    "home_score": 7
  },
  {
    "Date": 20170419,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170420,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20170428,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170429,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170430,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170508,
    "vis_team": "CLE",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170509,
    "vis_team": "CLE",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 0
  },
  {
    "Date": 20170510,
    "vis_team": "CLE",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 8
  },
  {
    "Date": 20170511,
    "vis_team": "SEA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170512,
    "vis_team": "SEA",
    "home_team": "TOR",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170513,
    "vis_team": "SEA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170514,
    "vis_team": "SEA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170515,
    "vis_team": "ATL",
    "home_team": "TOR",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170516,
    "vis_team": "ATL",
    "home_team": "TOR",
    "vis_score": 9,
    "home_score": 5
  },
  {
    "Date": 20170526,
    "vis_team": "TEX",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170527,
    "vis_team": "TEX",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170528,
    "vis_team": "TEX",
    "home_team": "TOR",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170529,
    "vis_team": "CIN",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 17
  },
  {
    "Date": 20170530,
    "vis_team": "CIN",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170531,
    "vis_team": "CIN",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170601,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170602,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 5,
    "home_score": 7
  },
  {
    "Date": 20170603,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170604,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170613,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 8,
    "home_score": 1
  },
  {
    "Date": 20170614,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170616,
    "vis_team": "CHA",
    "home_team": "TOR",
    "vis_score": 11,
    "home_score": 4
  },
  {
    "Date": 20170617,
    "vis_team": "CHA",
    "home_team": "TOR",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170618,
    "vis_team": "CHA",
    "home_team": "TOR",
    "vis_score": 3,
    "home_score": 7
  },
  {
    "Date": 20170627,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 3,
    "home_score": 1
  },
  {
    "Date": 20170628,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170629,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 0
  },
  {
    "Date": 20170630,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 4
  },
  {
    "Date": 20170701,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170702,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 15,
    "home_score": 1
  },
  {
    "Date": 20170706,
    "vis_team": "HOU",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 7
  },
  {
    "Date": 20170707,
    "vis_team": "HOU",
    "home_team": "TOR",
    "vis_score": 12,
    "home_score": 2
  },
  {
    "Date": 20170708,
    "vis_team": "HOU",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170709,
    "vis_team": "HOU",
    "home_team": "TOR",
    "vis_score": 19,
    "home_score": 1
  },
  {
    "Date": 20170724,
    "vis_team": "OAK",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170725,
    "vis_team": "OAK",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 4
  },
  {
    "Date": 20170726,
    "vis_team": "OAK",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170727,
    "vis_team": "OAK",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170728,
    "vis_team": "ANA",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170729,
    "vis_team": "ANA",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170730,
    "vis_team": "ANA",
    "home_team": "TOR",
    "vis_score": 10,
    "home_score": 11
  },
  {
    "Date": 20170808,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170809,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 11,
    "home_score": 5
  },
  {
    "Date": 20170810,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170811,
    "vis_team": "PIT",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170812,
    "vis_team": "PIT",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 7
  },
  {
    "Date": 20170813,
    "vis_team": "PIT",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170814,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170815,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 4
  },
  {
    "Date": 20170816,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170817,
    "vis_team": "TBA",
    "home_team": "TOR",
    "vis_score": 3,
    "home_score": 5
  },
  {
    "Date": 20170825,
    "vis_team": "MIN",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170826,
    "vis_team": "MIN",
    "home_team": "TOR",
    "vis_score": 9,
    "home_score": 10
  },
  {
    "Date": 20170827,
    "vis_team": "MIN",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 2
  },
  {
    "Date": 20170828,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170829,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 3,
    "home_score": 0
  },
  {
    "Date": 20170830,
    "vis_team": "BOS",
    "home_team": "TOR",
    "vis_score": 7,
    "home_score": 1
  },
  {
    "Date": 20170908,
    "vis_team": "DET",
    "home_team": "TOR",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170909,
    "vis_team": "DET",
    "home_team": "TOR",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170910,
    "vis_team": "DET",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 8
  },
  {
    "Date": 20170911,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170912,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170913,
    "vis_team": "BAL",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 1
  },
  {
    "Date": 20170919,
    "vis_team": "KCA",
    "home_team": "TOR",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170920,
    "vis_team": "KCA",
    "home_team": "TOR",
    "vis_score": 15,
    "home_score": 5
  },
  {
    "Date": 20170921,
    "vis_team": "KCA",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 0
  },
  {
    "Date": 20170922,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 1,
    "home_score": 8
  },
  {
    "Date": 20170923,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170924,
    "vis_team": "NYA",
    "home_team": "TOR",
    "vis_score": 5,
    "home_score": 9
  },
  {
    "Date": 20170403,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170405,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170406,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170410,
    "vis_team": "SLN",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 14
  },
  {
    "Date": 20170411,
    "vis_team": "SLN",
    "home_team": "WAS",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170412,
    "vis_team": "SLN",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 1
  },
  {
    "Date": 20170414,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170415,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170416,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170428,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 7,
    "home_score": 5
  },
  {
    "Date": 20170429,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170430,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 23
  },
  {
    "Date": 20170502,
    "vis_team": "ARI",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170503,
    "vis_team": "ARI",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 2
  },
  {
    "Date": 20170504,
    "vis_team": "ARI",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 4
  },
  {
    "Date": 20170510,
    "vis_team": "BAL",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 7
  },
  {
    "Date": 20170513,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 6
  },
  {
    "Date": 20170514,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 3
  },
  {
    "Date": 20170514,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170523,
    "vis_team": "SEA",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170524,
    "vis_team": "SEA",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170525,
    "vis_team": "SEA",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170526,
    "vis_team": "SDN",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 5
  },
  {
    "Date": 20170527,
    "vis_team": "SDN",
    "home_team": "WAS",
    "vis_score": 0,
    "home_score": 3
  },
  {
    "Date": 20170528,
    "vis_team": "SDN",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 3
  },
  {
    "Date": 20170608,
    "vis_team": "BAL",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170609,
    "vis_team": "TEX",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170610,
    "vis_team": "TEX",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 3
  },
  {
    "Date": 20170611,
    "vis_team": "TEX",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 1
  },
  {
    "Date": 20170612,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 11,
    "home_score": 10
  },
  {
    "Date": 20170613,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170614,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 13,
    "home_score": 2
  },
  {
    "Date": 20170623,
    "vis_team": "CIN",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 6
  },
  {
    "Date": 20170624,
    "vis_team": "CIN",
    "home_team": "WAS",
    "vis_score": 3,
    "home_score": 18
  },
  {
    "Date": 20170625,
    "vis_team": "CIN",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 2
  },
  {
    "Date": 20170626,
    "vis_team": "CHN",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170627,
    "vis_team": "CHN",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170628,
    "vis_team": "CHN",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 8
  },
  {
    "Date": 20170629,
    "vis_team": "CHN",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170703,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170704,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 11
  },
  {
    "Date": 20170706,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 2
  },
  {
    "Date": 20170707,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170708,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 13,
    "home_score": 0
  },
  {
    "Date": 20170709,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 10
  },
  {
    "Date": 20170725,
    "vis_team": "MIL",
    "home_team": "WAS",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170726,
    "vis_team": "MIL",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 8
  },
  {
    "Date": 20170727,
    "vis_team": "MIL",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 15
  },
  {
    "Date": 20170729,
    "vis_team": "COL",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170730,
    "vis_team": "COL",
    "home_team": "WAS",
    "vis_score": 10,
    "home_score": 6
  },
  {
    "Date": 20170730,
    "vis_team": "COL",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170807,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170808,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 7,
    "home_score": 3
  },
  {
    "Date": 20170809,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 10
  },
  {
    "Date": 20170810,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170812,
    "vis_team": "SFN",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170813,
    "vis_team": "SFN",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170813,
    "vis_team": "SFN",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 6
  },
  {
    "Date": 20170815,
    "vis_team": "ANA",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 3
  },
  {
    "Date": 20170816,
    "vis_team": "ANA",
    "home_team": "WAS",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170825,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 2
  },
  {
    "Date": 20170826,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 9
  },
  {
    "Date": 20170827,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 6,
    "home_score": 5
  },
  {
    "Date": 20170827,
    "vis_team": "NYN",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170828,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 11
  },
  {
    "Date": 20170829,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 3,
    "home_score": 8
  },
  {
    "Date": 20170830,
    "vis_team": "MIA",
    "home_team": "WAS",
    "vis_score": 0,
    "home_score": 4
  },
  {
    "Date": 20170907,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 3,
    "home_score": 4
  },
  {
    "Date": 20170908,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 10,
    "home_score": 11
  },
  {
    "Date": 20170909,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 5,
    "home_score": 4
  },
  {
    "Date": 20170910,
    "vis_team": "PHI",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 3
  },
  {
    "Date": 20170912,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 8,
    "home_score": 0
  },
  {
    "Date": 20170913,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 8,
    "home_score": 2
  },
  {
    "Date": 20170914,
    "vis_team": "ATL",
    "home_team": "WAS",
    "vis_score": 2,
    "home_score": 5
  },
  {
    "Date": 20170915,
    "vis_team": "LAN",
    "home_team": "WAS",
    "vis_score": 7,
    "home_score": 0
  },
  {
    "Date": 20170916,
    "vis_team": "LAN",
    "home_team": "WAS",
    "vis_score": 3,
    "home_score": 2
  },
  {
    "Date": 20170917,
    "vis_team": "LAN",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 7
  },
  {
    "Date": 20170928,
    "vis_team": "PIT",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 5
  },
  {
    "Date": 20170929,
    "vis_team": "PIT",
    "home_team": "WAS",
    "vis_score": 1,
    "home_score": 6
  },
  {
    "Date": 20170930,
    "vis_team": "PIT",
    "home_team": "WAS",
    "vis_score": 4,
    "home_score": 1
  },
  {
    "Date": 20171001,
    "vis_team": "PIT",
    "home_team": "WAS",
    "vis_score": 11,
    "home_score": 8
  }
]
var mlbD3Data = []

// Build the loop for all teams now
mlbTeams.forEach(function(team){

  $.getJSON("./teamData/" + team[0] + ".json", function(json) {
    teamMentionsAndRuns[team[0]] = []
    // console.log("➡️➡️➡️", team[0], teamMentionsAndRuns)

    var teamMentions = json
    // console.log("🙌",teamMentions)
    // Go through all the games for the team[0], and add the amount of runs scored by the team[0] to the mentions couting object
    for (let game of allMLBGames){
      if(game["home_team"] == team[1]){
        var teamDateWithMentions = teamMentions["results"].find(function(element){
          return element["timePeriod"] == game["Date"]+"0000"
        })
        teamDateWithMentions["runs"] = game["home_score"]
      }
      if(game["vis_team"] == team[1]){
        var teamDateWithMentions = teamMentions["results"].find(function(element){
          return element["timePeriod"] == game["Date"]+"0000"
        })
        teamDateWithMentions["runs"] = game["vis_score"]
      }
    }

    // Only plot dates that a team[0] had runs
    teamMentions["results"].forEach(function(game){
      if(game["runs"]){
        teamMentionsAndRuns[team[0]].push([game["runs"], game["count"]])
      }

    })
    mlbD3Data.push({
        name: team[0],
        color: team[2],
        data: teamMentionsAndRuns[team[0]]
    })
    console.log(mlbD3Data)

  });
})



// console.log("😈", teamMentionsAndRuns)

function myFunction() {

  Highcharts.chart('container', {
      chart: {
          type: 'scatter',
          zoomType: 'xy'
      },
      title: {
          text: 'Twitter Mentions of MLB Teams vs Runs Per Day'
      },
      subtitle: {
          text: 'Source: Twitter & SportsRadar'
      },
      xAxis: {
          title: {
              enabled: true,
              text: 'Runs'
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
      },
      yAxis: {
          title: {
              text: 'Twitter @ Mentions'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'middle',
          x: 0,
          y: 0,
          floating: false,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
          borderWidth: 1
      },
      plotOptions: {
          scatter: {
              marker: {
                  radius: 5,
                  states: {
                      hover: {
                          enabled: true,
                          lineColor: 'rgb(100,100,100)'
                      }
                  }
              },
              states: {
                  hover: {
                      marker: {
                          enabled: false
                      }
                  }
              },
              tooltip: {
                  headerFormat: '<b>{series.name}</b><br>',
                  pointFormat: '{point.x} runs, {point.y} Twitter Mentions'
              }
          }
      },
      series: mlbD3Data

  });


}
