import sqlite3
import sys, os, csv


def buildTable(conn):
    tsvFile="data.tsv"
    projectDirectory="/c/GitHub/movie-map"

    sqlQuery = '''
        CREATE TABLE IF NOT EXISTS moviedata (title text, country text, pubYear int, genre text);
        '''
    cur = conn.cursor()
    cur.execute(sqlQuery)

def addData(conn, tsvFile):
    projectDirectory="/c/GitHub/movie-map/Django"

    sys.path.append(projectDirectory)
    os.environ['DJANGO_SETTINGS_MODULE'] = 'settings' 
    dataReader = csv.reader(open(tsvFile, encoding="utf-8"), dialect='excel-tab')
    csv.field_size_limit(100000000)

    for row in dataReader:
        title = row[0]
        country = row[1]
        pubYear = row[2]
        genre = row[3]

        sqlQuery = '''
            INSERT INTO moviedata (title, country, pubYear, genre)
            VALUES (?,?,?,?);
            '''
        cur = conn.cursor()
        cur.execute(sqlQuery, row)
        # print(row)


def connection(dbFile):
    try:
        conn = sqlite3.connect(dbFile)
        conn.text_factory = str
        return conn
    except Error as e:
        print(e)
    return None

def main():
    dbName = "db.sqlite3"
    tsvFile1="query1950_1999.tsv"
    tsvFile2="query2000_current.tsv"

    conn = connection(dbName)
    with conn:
        buildTable(conn)
        addData(conn,tsvFile1)
        addData(conn,tsvFile2)

if __name__ == '__main__':
    main()