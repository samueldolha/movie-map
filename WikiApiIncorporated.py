#
# from imdb import IMDb
# ia=IMDb()
# l=ia.search_movie('Iran')
# print(l)
# movies = ia.search_movie('matrix')
# print(ia.get_movie(movies[0].getID())['countries'])
# print(dir(movies[0]))

from wikidata.client import Client

client = Client()

#entity = client.get('Q37312', load = True)

entity = client.get('Q20968682', load = True)


print (entity.description)

