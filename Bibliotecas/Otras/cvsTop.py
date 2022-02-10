import csv

with open('/Dataset/data.csv', 'rb') as csvfile:
    # handle header line, save it for writing to output file
    header = next(csvfile).strip("\n").split(",")
    reader = csv.reader(csvfile)
    results = sorted(reader, key=lambda row: row[2], reverse=True)
 
with open('/Dataset/output.csv', 'wb') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(header)
    for result in results:
        writer.writerow(result)