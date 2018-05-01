from instagram.client import InstagramAPI

access_token = ""
client_secret = ""
api = InstagramAPI(access_token=access_token, client_secret=client_secret)
# recent_media, next_ = api.user_recent_media(user_id="", count=10)
recent_media= api.user_recent_media(user_id="danvn", count=10)

# for media in recent_media:
#    print (media.caption.text)

user_followers, next = api.user_followed_by()


len(user_followers) #this is the numbers of followers you have
