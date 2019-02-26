# This file contains information about how we populated the database with existing points for development and testing purposes.

CSV file generated using https://www.mapdevelopers.com/geocode_tool.php and manually clicking various parts of the city to give us coordinates of those points.

Then the python script `gen_geojson.py` created json objects and pushed it up to the database to populate the `dumbpointscollection`.

Then the scripts also reads this from the database and dumps into a .json file. Cuz why not?

> DO NOT RUN THIS FILE ON ACTUAL DATABASE WITHOUT CREATING A BACKUP FIRST. You can change the db used by un/commenting out the line where the uri is passed into the `MongoClient` on line 6 and 7.

# Requirements to run the python script

1. pymongo
2. dnspython
