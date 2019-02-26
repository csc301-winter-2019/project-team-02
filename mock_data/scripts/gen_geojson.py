from pymongo import MongoClient
from bson.json_util import dumps
import json
import csv

client = MongoClient('mongodb://localhost:27017/helpthehome')
#client = MongoClient('mongodb+srv://development:dreamteam@cluster0-krnr4.mongodb.net/helpthehome?retryWrites=true')
db = client.helpthehome

def read_coords_csv():
    points = []
    with open("../raw/dumb_coordinates.csv") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        line_number = 0
        for row in reader:
            if line_number == 0:
                line_number += 1
                continue

            # build in accordance with geojson www.geojson.org
            points.append({
                    "type": "Point",
                    "coordinates" : [ float(row[1]), float(row[0]) ],
                    "another": "random field"
            })
            line_number += 1
        return points

# into db
def insert_data(points):
    print("WRITING to DB...")
    for point in points:
        result = db.dumbpointscollection.insert_one(point)

# from the db - not necessary
def find_data():
    print("READING from DB...")
    points = db.dumbpointscollection.find({})
    return dumps(points)

# not necessary
def serialize(data, jfilepath):
    jdata = find_data()
    print("WRITING to FILE...")
    with open("../out/dumbdata.json", "w+") as outfile:
        outfile.write(jdata)

# load serialized data - not necessary
def read_data_json(jfilepath):
    print("READING from FILE...")
    with open(jfilepath, "r") as infile:
        jdata = json.load(infile)
        return jdata

##### Execute functions here #####
#points = read_coords_csv()
#insert_data(points)
jdata = find_data()
serialize(jdata, '../out/dumbdata.json')

#jdata = read_data_json('../out/dumbdata.json')
