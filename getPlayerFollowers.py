from instagram.client import InstagramAPI

print(InstagramAPI)
access_token = "23610210.d225dd2.ba7559939d0b4feba16b548f1960bd16"
client_secret = "3f0edbecfa6e405593123af948d249c8"
api = InstagramAPI(access_token=access_token, client_secret=client_secret)
# recent_media, next_ = api.user_recent_media(user_id="danvn", count=10)
# recent_media = api.user_recent_media(user_id="danvn", count=10)

# for media in recent_media:
#    print (media.caption.text)

user_followers, next = api.user_followed_by()


len(user_followers) #this is the numbers of followers you have
