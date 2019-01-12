import sqlite3
import sys, os, csv


def buildTable(conn):
    tsvFile="data.tsv"
    projectDirectory="/c/GitHub/movie-map"

    sqlQuery = '''
        CREATE TABLE IF NOT EXISTS moviedata (titleID text, ordering int, title text, region text, language text, types text, attributes text, isOriginalTitle int);
        '''
    cur = conn.cursor()
    cur.execute(sqlQuery)

def addData(conn):
    tsvFile="data.tsv"
    projectDirectory="/c/GitHub/movie-map"

    sys.path.append(projectDirectory)
    os.environ['DJANGO_SETTINGS_MODULE'] = 'settings' 
    dataReader = csv.reader(open(tsvFile), dialect='excel-tab')
    csv.field_size_limit(100000000)

    for row in dataReader:
        titleID = row[0]
        ordering = row[1]
        title = row[2]
        region = row[3]
        language = row[4]
        types = row[5]
        attr = row[6]
        isOriginal = row[7] 

        sqlQuery = '''
            INSERT INTO moviedata (titleID, ordering, title, region, language, types, attributes, isOriginalTitle)
            VALUES (?,?,?,?,?,?,?,?);
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

    conn = connection(dbName)
    with conn:
        buildTable(conn)
        addData(conn)

if __name__ == '__main__':
    main()