setTimeout(myFunction, 500)

teamMentionsAndRuns = {}
var rockiesMentions = {
  "results": [
    {
      "timePeriod": "201711020000",
      "count": 1591
    },
    {
      "timePeriod": "201711010000",
      "count": 506
    },
    {
      "timePeriod": "201710310000",
      "count": 550
    },
    {
      "timePeriod": "201710300000",
      "count": 1662
    },
    {
      "timePeriod": "201710290000",
      "count": 382
    },
    {
      "timePeriod": "201710280000",
      "count": 385
    },
    {
      "timePeriod": "201710270000",
      "count": 826
    },
    {
      "timePeriod": "201710260000",
      "count": 1692
    },
    {
      "timePeriod": "201710250000",
      "count": 752
    },
    {
      "timePeriod": "201710240000",
      "count": 851
    },
    {
      "timePeriod": "201710230000",
      "count": 245
    },
    {
      "timePeriod": "201710220000",
      "count": 366
    },
    {
      "timePeriod": "201710210000",
      "count": 470
    },
    {
      "timePeriod": "201710200000",
      "count": 750
    },
    {
      "timePeriod": "201710190000",
      "count": 323
    },
    {
      "timePeriod": "201710180000",
      "count": 541
    },
    {
      "timePeriod": "201710170000",
      "count": 770
    },
    {
      "timePeriod": "201710160000",
      "count": 696
    },
    {
      "timePeriod": "201710150000",
      "count": 1506
    },
    {
      "timePeriod": "201710140000",
      "count": 2400
    },
    {
      "timePeriod": "201710130000",
      "count": 654
    },
    {
      "timePeriod": "201710120000",
      "count": 1008
    },
    {
      "timePeriod": "201710110000",
      "count": 645
    },
    {
      "timePeriod": "201710100000",
      "count": 1591
    },
    {
      "timePeriod": "201710090000",
      "count": 2415
    },
    {
      "timePeriod": "201710080000",
      "count": 616
    },
    {
      "timePeriod": "201710070000",
      "count": 793
    },
    {
      "timePeriod": "201710060000",
      "count": 1098
    },
    {
      "timePeriod": "201710050000",
      "count": 19348
    },
    {
      "timePeriod": "201710040000",
      "count": 12017
    },
    {
      "timePeriod": "201710030000",
      "count": 2999
    },
    {
      "timePeriod": "201710020000",
      "count": 4020
    },
    {
      "timePeriod": "201710010000",
      "count": 21145
    },
    {
      "timePeriod": "201709300000",
      "count": 15768
    },
    {
      "timePeriod": "201709290000",
      "count": 2408
    },
    {
      "timePeriod": "201709280000",
      "count": 2611
    },
    {
      "timePeriod": "201709270000",
      "count": 4368
    },
    {
      "timePeriod": "201709260000",
      "count": 2983
    },
    {
      "timePeriod": "201709250000",
      "count": 1893
    },
    {
      "timePeriod": "201709240000",
      "count": 1649
    },
    {
      "timePeriod": "201709230000",
      "count": 2137
    },
    {
      "timePeriod": "201709220000",
      "count": 2521
    },
    {
      "timePeriod": "201709210000",
      "count": 2884
    },
    {
      "timePeriod": "201709200000",
      "count": 2984
    },
    {
      "timePeriod": "201709190000",
      "count": 616
    },
    {
      "timePeriod": "201709180000",
      "count": 1052
    },
    {
      "timePeriod": "201709170000",
      "count": 3204
    },
    {
      "timePeriod": "201709160000",
      "count": 2650
    },
    {
      "timePeriod": "201709150000",
      "count": 1670
    },
    {
      "timePeriod": "201709140000",
      "count": 1169
    },
    {
      "timePeriod": "201709130000",
      "count": 3344
    },
    {
      "timePeriod": "201709120000",
      "count": 4584
    },
    {
      "timePeriod": "201709110000",
      "count": 2645
    },
    {
      "timePeriod": "201709100000",
      "count": 4673
    },
    {
      "timePeriod": "201709090000",
      "count": 1994
    },
    {
      "timePeriod": "201709080000",
      "count": 2754
    },
    {
      "timePeriod": "201709070000",
      "count": 2880
    },
    {
      "timePeriod": "201709060000",
      "count": 2387
    },
    {
      "timePeriod": "201709050000",
      "count": 1186
    },
    {
      "timePeriod": "201709040000",
      "count": 1588
    },
    {
      "timePeriod": "201709030000",
      "count": 1434
    },
    {
      "timePeriod": "201709020000",
      "count": 1264
    },
    {
      "timePeriod": "201709010000",
      "count": 1497
    },
    {
      "timePeriod": "201708310000",
      "count": 629
    },
    {
      "timePeriod": "201708300000",
      "count": 2774
    },
    {
      "timePeriod": "201708290000",
      "count": 1545
    },
    {
      "timePeriod": "201708280000",
      "count": 2181
    },
    {
      "timePeriod": "201708270000",
      "count": 2440
    },
    {
      "timePeriod": "201708260000",
      "count": 2295
    },
    {
      "timePeriod": "201708250000",
      "count": 1478
    },
    {
      "timePeriod": "201708240000",
      "count": 2774
    },
    {
      "timePeriod": "201708230000",
      "count": 2210
    },
    {
      "timePeriod": "201708220000",
      "count": 1238
    },
    {
      "timePeriod": "201708210000",
      "count": 1934
    },
    {
      "timePeriod": "201708200000",
      "count": 2524
    },
    {
      "timePeriod": "201708190000",
      "count": 2858
    },
    {
      "timePeriod": "201708180000",
      "count": 927
    },
    {
      "timePeriod": "201708170000",
      "count": 3765
    },
    {
      "timePeriod": "201708160000",
      "count": 3071
    },
    {
      "timePeriod": "201708150000",
      "count": 23257
    },
    {
      "timePeriod": "201708140000",
      "count": 1687
    },
    {
      "timePeriod": "201708130000",
      "count": 2767
    },
    {
      "timePeriod": "201708120000",
      "count": 1560
    },
    {
      "timePeriod": "201708110000",
      "count": 1363
    },
    {
      "timePeriod": "201708100000",
      "count": 1347
    },
    {
      "timePeriod": "201708090000",
      "count": 3428
    },
    {
      "timePeriod": "201708080000",
      "count": 3460
    },
    {
      "timePeriod": "201708070000",
      "count": 3655
    },
    {
      "timePeriod": "201708060000",
      "count": 2419
    },
    {
      "timePeriod": "201708050000",
      "count": 2275
    },
    {
      "timePeriod": "201708040000",
      "count": 2016
    },
    {
      "timePeriod": "201708030000",
      "count": 4171
    },
    {
      "timePeriod": "201708020000",
      "count": 5408
    },
    {
      "timePeriod": "201708010000",
      "count": 2397
    },
    {
      "timePeriod": "201707310000",
      "count": 4176
    },
    {
      "timePeriod": "201707300000",
      "count": 3165
    },
    {
      "timePeriod": "201707290000",
      "count": 1445
    },
    {
      "timePeriod": "201707280000",
      "count": 1474
    },
    {
      "timePeriod": "201707270000",
      "count": 3081
    },
    {
      "timePeriod": "201707260000",
      "count": 1464
    },
    {
      "timePeriod": "201707250000",
      "count": 3243
    },
    {
      "timePeriod": "201707240000",
      "count": 3403
    },
    {
      "timePeriod": "201707230000",
      "count": 3861
    },
    {
      "timePeriod": "201707220000",
      "count": 2257
    },
    {
      "timePeriod": "201707210000",
      "count": 1649
    },
    {
      "timePeriod": "201707200000",
      "count": 2376
    },
    {
      "timePeriod": "201707190000",
      "count": 5578
    },
    {
      "timePeriod": "201707180000",
      "count": 3543
    },
    {
      "timePeriod": "201707170000",
      "count": 1240
    },
    {
      "timePeriod": "201707160000",
      "count": 2148
    },
    {
      "timePeriod": "201707150000",
      "count": 1082
    },
    {
      "timePeriod": "201707140000",
      "count": 1721
    },
    {
      "timePeriod": "201707130000",
      "count": 1852
    },
    {
      "timePeriod": "201707120000",
      "count": 3929
    },
    {
      "timePeriod": "201707110000",
      "count": 3140
    },
    {
      "timePeriod": "201707100000",
      "count": 2720
    },
    {
      "timePeriod": "201707090000",
      "count": 5768
    },
    {
      "timePeriod": "201707080000",
      "count": 2907
    },
    {
      "timePeriod": "201707070000",
      "count": 3253
    },
    {
      "timePeriod": "201707060000",
      "count": 39355
    },
    {
      "timePeriod": "201707050000",
      "count": 2039
    },
    {
      "timePeriod": "201707040000",
      "count": 3431
    },
    {
      "timePeriod": "201707030000",
      "count": 3240
    },
    {
      "timePeriod": "201707020000",
      "count": 3038
    },
    {
      "timePeriod": "201707010000",
      "count": 2455
    },
    {
      "timePeriod": "201706300000",
      "count": 1655
    },
    {
      "timePeriod": "201706290000",
      "count": 2293
    },
    {
      "timePeriod": "201706280000",
      "count": 3498
    },
    {
      "timePeriod": "201706270000",
      "count": 1824
    },
    {
      "timePeriod": "201706260000",
      "count": 2358
    },
    {
      "timePeriod": "201706250000",
      "count": 2004
    },
    {
      "timePeriod": "201706240000",
      "count": 1706
    },
    {
      "timePeriod": "201706230000",
      "count": 1503
    },
    {
      "timePeriod": "201706220000",
      "count": 3083
    },
    {
      "timePeriod": "201706210000",
      "count": 6540
    },
    {
      "timePeriod": "201706200000",
      "count": 3159
    },
    {
      "timePeriod": "201706190000",
      "count": 5969
    },
    {
      "timePeriod": "201706180000",
      "count": 6971
    },
    {
      "timePeriod": "201706170000",
      "count": 3373
    },
    {
      "timePeriod": "201706160000",
      "count": 3739
    },
    {
      "timePeriod": "201706150000",
      "count": 2477
    },
    {
      "timePeriod": "201706140000",
      "count": 3344
    },
    {
      "timePeriod": "201706130000",
      "count": 3072
    },
    {
      "timePeriod": "201706120000",
      "count": 1236
    },
    {
      "timePeriod": "201706110000",
      "count": 2619
    },
    {
      "timePeriod": "201706100000",
      "count": 2713
    },
    {
      "timePeriod": "201706090000",
      "count": 4023
    },
    {
      "timePeriod": "201706080000",
      "count": 1739
    },
    {
      "timePeriod": "201706070000",
      "count": 3570
    },
    {
      "timePeriod": "201706060000",
      "count": 1384
    },
    {
      "timePeriod": "201706050000",
      "count": 1422
    },
    {
      "timePeriod": "201706040000",
      "count": 1644
    },
    {
      "timePeriod": "201706030000",
      "count": 2063
    },
    {
      "timePeriod": "201706020000",
      "count": 2033
    },
    {
      "timePeriod": "201706010000",
      "count": 1956
    },
    {
      "timePeriod": "201705310000",
      "count": 1274
    },
    {
      "timePeriod": "201705300000",
      "count": 1357
    },
    {
      "timePeriod": "201705290000",
      "count": 2351
    },
    {
      "timePeriod": "201705280000",
      "count": 4015
    },
    {
      "timePeriod": "201705270000",
      "count": 4367
    },
    {
      "timePeriod": "201705260000",
      "count": 995
    },
    {
      "timePeriod": "201705250000",
      "count": 2760
    },
    {
      "timePeriod": "201705240000",
      "count": 3638
    },
    {
      "timePeriod": "201705230000",
      "count": 3193
    },
    {
      "timePeriod": "201705220000",
      "count": 1832
    },
    {
      "timePeriod": "201705210000",
      "count": 1898
    },
    {
      "timePeriod": "201705200000",
      "count": 2406
    },
    {
      "timePeriod": "201705190000",
      "count": 1393
    },
    {
      "timePeriod": "201705180000",
      "count": 2490
    },
    {
      "timePeriod": "201705170000",
      "count": 2068
    },
    {
      "timePeriod": "201705160000",
      "count": 1523
    },
    {
      "timePeriod": "201705150000",
      "count": 1903
    },
    {
      "timePeriod": "201705140000",
      "count": 3783
    },
    {
      "timePeriod": "201705130000",
      "count": 1615
    },
    {
      "timePeriod": "201705120000",
      "count": 2266
    },
    {
      "timePeriod": "201705110000",
      "count": 1776
    },
    {
      "timePeriod": "201705100000",
      "count": 3070
    },
    {
      "timePeriod": "201705090000",
      "count": 5395
    },
    {
      "timePeriod": "201705080000",
      "count": 3501
    },
    {
      "timePeriod": "201705070000",
      "count": 2754
    },
    {
      "timePeriod": "201705060000",
      "count": 850
    },
    {
      "timePeriod": "201705050000",
      "count": 1259
    },
    {
      "timePeriod": "201705040000",
      "count": 2234
    },
    {
      "timePeriod": "201705030000",
      "count": 1482
    },
    {
      "timePeriod": "201705020000",
      "count": 1118
    },
    {
      "timePeriod": "201705010000",
      "count": 1404
    },
    {
      "timePeriod": "201704300000",
      "count": 4381
    },
    {
      "timePeriod": "201704290000",
      "count": 4026
    },
    {
      "timePeriod": "201704280000",
      "count": 600
    },
    {
      "timePeriod": "201704270000",
      "count": 1846
    },
    {
      "timePeriod": "201704260000",
      "count": 2380
    },
    {
      "timePeriod": "201704250000",
      "count": 4185
    },
    {
      "timePeriod": "201704240000",
      "count": 2046
    },
    {
      "timePeriod": "201704230000",
      "count": 3336
    },
    {
      "timePeriod": "201704220000",
      "count": 3191
    },
    {
      "timePeriod": "201704210000",
      "count": 614
    },
    {
      "timePeriod": "201704200000",
      "count": 2343
    },
    {
      "timePeriod": "201704190000",
      "count": 5123
    },
    {
      "timePeriod": "201704180000",
      "count": 3564
    },
    {
      "timePeriod": "201704170000",
      "count": 1969
    },
    {
      "timePeriod": "201704160000",
      "count": 2221
    },
    {
      "timePeriod": "201704150000",
      "count": 1998
    },
    {
      "timePeriod": "201704140000",
      "count": 2251
    },
    {
      "timePeriod": "201704130000",
      "count": 1444
    },
    {
      "timePeriod": "201704120000",
      "count": 2706
    },
    {
      "timePeriod": "201704110000",
      "count": 1479
    },
    {
      "timePeriod": "201704100000",
      "count": 758
    },
    {
      "timePeriod": "201704090000",
      "count": 3377
    },
    {
      "timePeriod": "201704080000",
      "count": 2246
    },
    {
      "timePeriod": "201704070000",
      "count": 6820
    },
    {
      "timePeriod": "201704060000",
      "count": 2482
    },
    {
      "timePeriod": "201704050000",
      "count": 2544
    },
    {
      "timePeriod": "201704040000",
      "count": 1804
    },
    {
      "timePeriod": "201704030000",
      "count": 4948
    },
    {
      "timePeriod": "201704020000",
      "count": 1382
    },
    {
      "timePeriod": "201704010000",
      "count": 985
    },
    {
      "timePeriod": "201703310000",
      "count": 2670
    },
    {
      "timePeriod": "201703300000",
      "count": 1388
    },
    {
      "timePeriod": "201703290000",
      "count": 982
    },
    {
      "timePeriod": "201703280000",
      "count": 1753
    },
    {
      "timePeriod": "201703270000",
      "count": 519
    },
    {
      "timePeriod": "201703260000",
      "count": 407
    },
    {
      "timePeriod": "201703250000",
      "count": 366
    },
    {
      "timePeriod": "201703240000",
      "count": 502
    },
    {
      "timePeriod": "201703230000",
      "count": 1406
    },
    {
      "timePeriod": "201703220000",
      "count": 2026
    },
    {
      "timePeriod": "201703210000",
      "count": 5117
    },
    {
      "timePeriod": "201703200000",
      "count": 364
    },
    {
      "timePeriod": "201703190000",
      "count": 452
    },
    {
      "timePeriod": "201703180000",
      "count": 437
    },
    {
      "timePeriod": "201703170000",
      "count": 548
    },
    {
      "timePeriod": "201703160000",
      "count": 954
    },
    {
      "timePeriod": "201703150000",
      "count": 7455
    },
    {
      "timePeriod": "201703140000",
      "count": 8136
    },
    {
      "timePeriod": "201703130000",
      "count": 932
    },
    {
      "timePeriod": "201703120000",
      "count": 518
    },
    {
      "timePeriod": "201703110000",
      "count": 1098
    },
    {
      "timePeriod": "201703100000",
      "count": 578
    },
    {
      "timePeriod": "201703090000",
      "count": 833
    },
    {
      "timePeriod": "201703080000",
      "count": 667
    },
    {
      "timePeriod": "201703070000",
      "count": 411
    },
    {
      "timePeriod": "201703060000",
      "count": 429
    },
    {
      "timePeriod": "201703050000",
      "count": 349
    },
    {
      "timePeriod": "201703040000",
      "count": 371
    },
    {
      "timePeriod": "201703030000",
      "count": 320
    },
    {
      "timePeriod": "201703020000",
      "count": 308
    },
    {
      "timePeriod": "201703010000",
      "count": 266
    },
    {
      "timePeriod": "201702280000",
      "count": 805
    },
    {
      "timePeriod": "201702270000",
      "count": 406
    },
    {
      "timePeriod": "201702260000",
      "count": 810
    },
    {
      "timePeriod": "201702250000",
      "count": 993
    },
    {
      "timePeriod": "201702240000",
      "count": 461
    },
    {
      "timePeriod": "201702230000",
      "count": 1147
    },
    {
      "timePeriod": "201702220000",
      "count": 2320
    }
  ],
  "totalCount": 60448,
  "next": "eyJhdXRoZW50aWNpdHkiOiI4MTRhYzZiNDQ5OTRjOGY1NGFhZjAyMmE2MmNjMTY4MGNlYTYwNTQ5NDRkYjc2YmY0Zjk1NDNhOWU4NzgzOTBkIiwiZnJvbURhdGUiOiIyMDE3MDIyMjAwMDAiLCJ0b0RhdGUiOiIyMDE3MTEwMzAwMDAiLCJidWNrZXQiOiJkYXkiLCJuZXh0Ijp7Im1heERhdGUiOiIyMDE3MTAwMzAwMDAwMCIsImV4cGVuc2l2ZVF1ZXJ5IjpmYWxzZX19",
  "requestParameters": {
    "bucket": "day",
    "fromDate": "201702220000",
    "toDate": "201711030000"
  }
}
var allMLBGames = [
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

var teamJSONFiles = ["@athletics", "@Braves", "@Dodgers", "@Royals", "@tigers", "@Dbacks", "@Reds", "@Padres", "@Pirates", "@Mets", "@Orioles", "@Angels", "@Twins", "@Nationals", "@RaysBaseball", "@RedSox", "@Yankees", "@Rangers", "@Cubs", "@BlueJays", "@Mariners", "@SFGiants", "@astros", "@Brewers", "@Cardinals", "@Indians", "@Marlins", "@Phillies", "@whitesox", "@Rockies"]
var twoTeams = {
  "@Angels": "ANA",
  "@Astros": "HOU"
  // "@Rockies": "COL"
}

var rockiesArray = []

for (let game of allMLBGames){
  // Go through all the games for the team, and add the amount of runs scored by the team to the mentions couting object
  if(game["home_team"] == "COL"){
    var teamDateWithMentions = rockiesMentions["results"].find(function(element){
      return element["timePeriod"] == game["Date"]+"0000"
    })
    teamDateWithMentions["runs"] = game["home_score"]
  }
  if(game["vis_team"] == "COL"){
    var teamDateWithMentions = rockiesMentions["results"].find(function(element){
      return element["timePeriod"] == game["Date"]+"0000"
    })
    teamDateWithMentions["runs"] = game["vis_score"]
  }
}
// console.log(rockiesMentions)
rockiesMentions["results"].forEach(function(game){
  if(game["runs"]){
    rockiesArray.push([game["runs"], game["count"]])
  }
})

// Build the loop for all teams now
for (team in twoTeams){
  teamMentionsAndRuns[team] = []
  $.getJSON("./../teamData/" + team + ".json", function(json) {
    var teamMentions = json
    // console.log("🙌",teamMentions)
    // Go through all the games for the team, and add the amount of runs scored by the team to the mentions couting object
    for (let game of allMLBGames){
      if(game["home_team"] == twoTeams[team]){
        var teamDateWithMentions = teamMentions["results"].find(function(element){
          return element["timePeriod"] == game["Date"]+"0000"
        })
        teamDateWithMentions["runs"] = game["home_score"]
      }
      if(game["vis_team"] == twoTeams[team]){
        var teamDateWithMentions = teamMentions["results"].find(function(element){
          return element["timePeriod"] == game["Date"]+"0000"
        })
        teamDateWithMentions["runs"] = game["vis_score"]
      }
    }
    // Only plot dates that a team had runs
    teamMentions["results"].forEach(function(game){
      if(game["runs"]){
        teamMentionsAndRuns[team].push([game["runs"], game["count"]])
      }
    })
  });
}


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
          verticalAlign: 'top',
          x: 100,
          y: 70,
          floating: true,
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
      series: [{
          name: 'Rockies',
          color: 'rgba(223, 83, 83, .5)',
          data: teamMentionsAndRuns["@Angels"]
      }]
  });

  // console.log("RRR", rockiesArray)

}
