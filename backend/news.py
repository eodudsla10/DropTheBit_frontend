import requests
from datetime import datetime

def get_news():
    url = "https://project-team.upbit.com/api/v1/disclosure?region=kr&per_page=20"
    response = requests.get(url).json()
    news_id = {}
    news_date = {}
    news_title = {}
    news = {}
    news_list =[]

    cnt = 0
    for data in response['data']['posts']:
        if cnt==10:
            break
        news_id = data['id']
        news_date = data['start_date']
        news_title = data['assets']+' '+data['text']
        news = {"id" : data['id'],"date" : data['start_date'],"title" : data['text'],}
        cnt = cnt+1
        news_list.append(news)
    return news_list

# print(get_news())
